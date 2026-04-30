import { useRef, useState, MouseEvent } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  perspective?: number;
  maxRotation?: number;
  scale?: number;
}

const TiltCard = ({
  children,
  className = "",
  perspective = 1000,
  maxRotation = 15,
  scale = 1.05,
}: TiltCardProps) => {
  const isMobile = useIsMobile();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * maxRotation;
    const rotateX = -((mouseY - centerY) / (rect.height / 2)) * maxRotation;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-200 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          transform: isHovering
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`
            : "rotateX(0deg) rotateY(0deg) scale(1)",
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out",
        }}
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
