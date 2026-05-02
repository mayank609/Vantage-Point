import { useEffect, useRef } from "react";
import * as THREE from "three";

const RADIUS = 2.0;
const OFFICES = [
  { lat: 34.07, lng: -84.29 },
  { lat: 43.21, lng: -79.77 },
  { lat: 17.39, lng:  78.49 },
  { lat: 28.65, lng:  77.22 },
];

function latLng(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  );
}

export default function Globe3D({
  mouse,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── camera ────────────────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    // ── scene + lighting ──────────────────────────────────────────────────────
    const scene = new THREE.Scene();

    // Key light — sun-like directional from upper-right
    const sunLight = new THREE.DirectionalLight(0xffffff, 1.8);
    sunLight.position.set(5, 3, 5);
    scene.add(sunLight);

    // Fill light — soft blue from opposite side
    const fillLight = new THREE.DirectionalLight(0x4488ff, 0.25);
    fillLight.position.set(-5, -2, -3);
    scene.add(fillLight);

    // Ambient so dark side isn't pitch black
    scene.add(new THREE.AmbientLight(0x112244, 0.6));

    // ── texture loader ────────────────────────────────────────────────────────
    const loader = new THREE.TextureLoader();

    // ── Earth sphere ──────────────────────────────────────────────────────────
    const earthGeo  = new THREE.SphereGeometry(RADIUS, 64, 64);
    const earthMat  = new THREE.MeshPhongMaterial({
      map:         loader.load("/earth.jpg"),
      bumpMap:     loader.load("/earth-bump.jpg"),
      bumpScale:   0.06,
      specularMap: loader.load("/earth-specular.jpg"),
      specular:    new THREE.Color(0x3a6ea5),
      shininess:   18,
    });
    const earth = new THREE.Mesh(earthGeo, earthMat);
    scene.add(earth);

    // ── cloud layer ───────────────────────────────────────────────────────────
    const cloudMat = new THREE.MeshPhongMaterial({
      map:         loader.load("/earth-clouds.png"),
      transparent: true,
      opacity:     0.38,
      depthWrite:  false,
    });
    const clouds = new THREE.Mesh(new THREE.SphereGeometry(RADIUS * 1.012, 64, 64), cloudMat);
    scene.add(clouds);

    // ── atmosphere glow ───────────────────────────────────────────────────────
    const atmMat = new THREE.MeshPhongMaterial({
      color:       0x4488ff,
      transparent: true,
      opacity:     0.08,
      side:        THREE.BackSide,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(RADIUS * 1.1, 64, 64), atmMat));

    // ── tilt ring ─────────────────────────────────────────────────────────────
    const tiltRing = new THREE.Mesh(
      new THREE.TorusGeometry(RADIUS * 1.18, 0.003, 12, 180),
      new THREE.MeshBasicMaterial({ color: 0x75479c, transparent: true, opacity: 0.22 }),
    );
    tiltRing.rotation.set(0.41, 0, 0.2);
    scene.add(tiltRing);

    // ── arcs ──────────────────────────────────────────────────────────────────
    const arcGroup = new THREE.Group();
    [[0, 1], [1, 2], [0, 2], [2, 3]].forEach(([a, b]) => {
      const pa  = latLng(OFFICES[a].lat, OFFICES[a].lng, RADIUS * 1.015);
      const pb  = latLng(OFFICES[b].lat, OFFICES[b].lng, RADIUS * 1.015);
      const mid = pa.clone().lerp(pb, 0.5).normalize().multiplyScalar(RADIUS * 1.38);
      const curve = new THREE.QuadraticBezierCurve3(pa, mid, pb);
      arcGroup.add(new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(60)),
        new THREE.LineBasicMaterial({ color: 0x44aaff, transparent: true, opacity: 0.55 }),
      ));
    });
    scene.add(arcGroup);

    // ── markers ───────────────────────────────────────────────────────────────
    const markerGroup = new THREE.Group();
    const pulseMeshes: THREE.Mesh[] = [];
    OFFICES.forEach((off) => {
      const pos    = latLng(off.lat, off.lng, RADIUS * 1.015);
      const normal = pos.clone().normalize();
      const quat   = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);

      const g = new THREE.Group();
      g.position.copy(pos);

      // bright glowing core dot
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0x00ddff }),
      );
      g.add(core);

      // pulsing ring
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.07, 0.095, 32),
        new THREE.MeshBasicMaterial({ color: 0x00ddff, transparent: true, opacity: 0.65, side: THREE.DoubleSide, depthWrite: false }),
      );
      ring.quaternion.copy(quat);
      g.add(ring);
      pulseMeshes.push(ring);

      markerGroup.add(g);
    });
    scene.add(markerGroup);

    // ── resize observer ───────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const w = mount.clientWidth, h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    ro.observe(mount);

    // ── animation loop ────────────────────────────────────────────────────────
    let raf: number;
    const clock = new THREE.Clock();
    const pulsePhases = OFFICES.map(() => Math.random() * Math.PI * 2);

    function tick() {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      earth.rotation.y        = t * 0.06;
      clouds.rotation.y       = t * 0.065; // slightly faster than surface
      tiltRing.rotation.y     = -t * 0.04;
      arcGroup.rotation.y     = t * 0.06;
      markerGroup.rotation.y  = t * 0.06;

      pulseMeshes.forEach((ring, i) => {
        pulsePhases[i] += 0.04;
        const sc = 1 + 0.6 * Math.abs(Math.sin(pulsePhases[i]));
        ring.scale.setScalar(sc);
        (ring.material as THREE.MeshBasicMaterial).opacity =
          0.65 * (1 - Math.abs(Math.sin(pulsePhases[i])) * 0.7);
      });

      // camera lazily follows mouse
      camera.position.x += (mouse.current.x * 0.6 - camera.position.x) * 0.04;
      camera.position.y += (mouse.current.y * 0.4 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    }
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [mouse]);

  return <div ref={mountRef} className="w-full h-full" />;
}
