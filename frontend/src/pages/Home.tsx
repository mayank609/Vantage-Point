import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useTransform, animate as animateValue } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Users, Cloud, Settings,
  Star, Repeat, Building2, ShieldCheck, Quote,
  TrendingUp, Globe, CheckCircle, Zap, Sparkles, Rocket, Award, Wallet,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CoreServices from "../components/CoreServices";
import IndustrySection from "../components/IndustrySection";
import { fadeUp, stagger } from "../lib/motion";

const heroStagger = stagger(0.05, 0.12);

function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      animateValue(count, target, { duration, ease: "easeOut" });
    }
  }, [isInView, count, target, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
}

const Home: React.FC = () => {
  const pillars = [
    {
      icon: Building2,
      title: "For Companies",
      desc: "Hire top 1% tech, finance, and legal talent. Pre-vetted shortlists delivered in 48–72 hours to help your business scale faster.",
      to: "/companies",
    },
    {
      icon: Users,
      title: "For Candidates",
      desc: "Access exclusive high-paying roles at top US companies. Our dedicated recruiters match your skills with opportunities that move your career forward.",
      to: "/candidates",
    },
    {
      icon: Wallet,
      title: "Finpay Solutions",
      desc: "Modernize your payment infrastructure with our automated fintech solutions. Secure, scalable, and designed for the future of finance.",
      to: "/finpay",
    },
  ];

  const testimonials = [
    {
      quote: "Outstanding work in providing AI, Workday, and ServiceNow solutions. The team's expertise and professionalism exceeded our expectations.",
      name: "Sr. Director",
      title: "Healthcare Insurance Company",
    },
    {
      quote: "Anthony and his team consistently deliver exceptional enterprise solutions with a sense of urgency. Highly recommended for any complex integration.",
      name: "Partner",
      title: "Boston Consulting Group",
    },
    {
      quote: "We strive to be the best to make you the best. Vantage Point has been an incredible partner in our technological transformation.",
      name: "Client Executive",
      title: "Financial Services Firm",
    },
  ];

  const whyUs = [
    { icon: Repeat, title: "Strategic Approach", desc: "We invest time in comprehending the distinctive technological requirements and operational nuances of our clients from the outset." },
    { icon: Building2, title: "Multi-Industry Expertise", desc: "Deep experience across Fintech, Healthcare, Legal, Insurance, Media, Government, and more across the United States." },
    { icon: ShieldCheck, title: "Honesty & Integrity", desc: "A values-driven organization that rejects generic approaches — built on strong partnerships and proven methodologies." },
  ];

  const stats = [
    { value: 200, suffix: "+", label: "Projects Completed", icon: TrendingUp },
    { value: 99,  suffix: "%", label: "Client Satisfaction", icon: Star },
    { value: 15,  suffix: "+", label: "Years Experience",   icon: Globe },
    { value: 50,  suffix: "+", label: "Enterprise Clients", icon: Users },
  ];

  const techItems = [
    "Oracle", "Workday", "ServiceNow", "AWS", "Azure", "SAP",
    "Microsoft", "Salesforce", "AI / ML", "Cloud Migration",
    "Data Analytics", "ERP Solutions", "HCM", "Agile Delivery",
  ];

  const badges = ["Oracle Partner", "Workday Certified", "AWS Consulting"];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-white min-h-[95vh] flex items-center">

        {/* Top gradient accent line */}
        <div aria-hidden className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#0B74B0] via-50% to-[#75479C]" />

        {/* Multi-point mesh gradient */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-[900px] h-[900px] rounded-full bg-[#0B74B0]/[0.06] blur-[130px]" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#75479C]/[0.05] blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#0B74B0]/[0.03] blur-[90px]" />
        </div>

        {/* Dot grid */}
        <div aria-hidden className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #0B74B0 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* Floating sparkle dots */}
        {([
          { size: 6,  left: "8%",  top: "18%", color: "#0B74B0", dur: 3.2, delay: 0 },
          { size: 4,  left: "14%", top: "68%", color: "#75479C", dur: 4.0, delay: 0.5 },
          { size: 8,  left: "22%", top: "38%", color: "#0B74B0", dur: 3.7, delay: 1.0 },
          { size: 5,  left: "48%", top: "82%", color: "#75479C", dur: 5.0, delay: 0.3 },
          { size: 7,  left: "60%", top: "12%", color: "#0B74B0", dur: 3.5, delay: 0.8 },
          { size: 4,  left: "72%", top: "60%", color: "#75479C", dur: 4.5, delay: 1.2 },
          { size: 6,  left: "85%", top: "28%", color: "#0B74B0", dur: 3.0, delay: 0.6 },
          { size: 5,  left: "92%", top: "74%", color: "#75479C", dur: 4.2, delay: 0.2 },
        ] as const).map((dot, i) => (
          <motion.div
            key={i}
            aria-hidden
            className="absolute rounded-full pointer-events-none"
            style={{ width: dot.size, height: dot.size, left: dot.left, top: dot.top, background: dot.color, opacity: 0.18 }}
            animate={{ y: [0, -18, 0], opacity: [0.18, 0.38, 0.18], scale: [1, 1.4, 1] }}
            transition={{ duration: dot.dur, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
          />
        ))}

        {/* Sweeping vertical beam */}
        <motion.div
          aria-hidden
          className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-[#0B74B0]/20 to-transparent pointer-events-none"
          animate={{ x: ["-5vw", "110vw"] }}
          transition={{ duration: 12, repeat: Infinity, repeatDelay: 9, ease: "easeInOut" }}
        />
        {/* Sweeping horizontal beam */}
        <motion.div
          aria-hidden
          className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#75479C]/20 to-transparent pointer-events-none"
          animate={{ y: ["-10vh", "110vh"] }}
          transition={{ duration: 14, repeat: Infinity, repeatDelay: 6, ease: "easeInOut", delay: 3 }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

            {/* ── LEFT: copy ── */}
            <motion.div initial="hidden" animate="show" variants={heroStagger}>

              {/* Animated badge */}
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#EBF4F9] to-[#EDE8F5] border border-[#0B74B0]/20 rounded-full px-4 py-2 mb-8 shadow-sm shadow-[#0B74B0]/10"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B74B0] opacity-60" />
                  <span className="relative rounded-full h-2.5 w-2.5 bg-[#0B74B0]" />
                </span>
                <Sparkles size={12} className="text-[#75479C]" />
                <span className="text-[#0B74B0] text-xs font-bold tracking-[0.18em] uppercase">An Orpine Company · Est. 2008</span>
              </motion.div>

              {/* Giant headline */}
              <motion.div variants={fadeUp} className="mb-6">
                <h1 className="font-[Manrope] font-black tracking-tight leading-[1.0]">
                  <span className="block text-5xl sm:text-6xl lg:text-[76px] text-[#0E2A38]">Your</span>
                  <span className="block text-6xl sm:text-7xl lg:text-[88px] text-gradient-animated">Vantage</span>
                  <span className="block text-5xl sm:text-6xl lg:text-[76px] text-[#0E2A38]">Point.</span>
                </h1>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-[2px] w-14 rounded-full" style={{ background: "linear-gradient(90deg, #0B74B0, #75479C)" }} />
                  <span className="text-[#0E2A38]/35 text-2xl sm:text-3xl font-semibold">Our Solution.</span>
                </div>
              </motion.div>

              {/* Body */}
              <motion.p variants={fadeUp} className="text-[#0E2A38]/58 max-w-lg text-base leading-relaxed mb-8">
                Be it an integration, migration, or professional services project — let us show you why working with us will be to your{" "}
                <span className="text-[#0B74B0] font-bold">adVantage</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-8">
                <Link to="/services"
                  className="btn-shine group inline-flex items-center gap-2 rounded-full text-white px-8 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #0B74B0 0%, #0986CC 50%, #75479C 100%)", boxShadow: "0 8px 28px -6px rgba(11,116,176,0.4)" }}
                >
                  Our Services
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowUpRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </Link>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#0E2A38]/10 bg-white/80 text-[#0E2A38] hover:border-[#0B74B0]/30 hover:bg-[#EBF4F9] px-7 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  Get in Touch <ArrowRight size={17} strokeWidth={2.5} />
                </Link>
              </motion.div>

              {/* Inline live stats ribbon */}
              <motion.div variants={fadeUp}
                className="flex flex-wrap gap-x-7 gap-y-3 mb-8 py-5 border-y border-[#0E2A38]/[0.06]"
              >
                {[
                  { val: "200+", label: "Projects" },
                  { val: "99%",  label: "Satisfaction" },
                  { val: "15+",  label: "Yrs Exp." },
                  { val: "50+",  label: "Clients" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col gap-0.5">
                    <span className="text-[#0B74B0] font-black text-xl leading-none tabular-nums">{s.val}</span>
                    <span className="text-[#0E2A38]/40 text-[10px] font-bold uppercase tracking-[0.18em]">{s.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {["Oracle Partner", "Workday Certified", "AWS Consulting", "ServiceNow"].map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5 bg-white border border-black/[0.07] rounded-full px-3.5 py-1.5 shadow-sm">
                    <CheckCircle size={11} className="text-emerald-500 shrink-0" />
                    <span className="text-xs font-semibold text-[#0E2A38]/55">{badge}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: floating cards panel ── */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none h-[520px] sm:h-[560px] flex items-center justify-center mt-8 lg:mt-0">

              {/* Spinning conic-gradient rings */}
              <motion.div
                aria-hidden
                className="absolute w-[490px] h-[490px] rounded-full pointer-events-none"
                style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(11,116,176,0.25) 50deg, transparent 100deg, rgba(117,71,156,0.2) 175deg, transparent 230deg, rgba(11,116,176,0.18) 305deg, transparent 360deg)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                aria-hidden
                className="absolute w-[380px] h-[380px] rounded-full pointer-events-none"
                style={{ background: "conic-gradient(from 180deg, transparent 0deg, rgba(117,71,156,0.18) 55deg, transparent 110deg, rgba(11,116,176,0.15) 185deg, transparent 240deg, rgba(117,71,156,0.12) 310deg, transparent 360deg)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Central glow */}
              <div aria-hidden className="absolute inset-0 m-auto w-72 h-72 rounded-full blur-[85px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(11,116,176,0.16) 0%, rgba(117,71,156,0.10) 60%, transparent 100%)" }} />

              {/* Main enterprise card */}
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-[88%] sm:w-[360px]"
              >
                <div className="p-px rounded-3xl" style={{ background: "linear-gradient(135deg, #0B74B0 0%, #75479C 55%, rgba(11,116,176,0.28) 100%)" }}>
                  <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-[0_30px_80px_-20px_rgba(11,116,176,0.22)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#EBF4F9] to-[#E5E0F0] grid place-items-center text-[#0B74B0] border border-[#0B74B0]/10 shrink-0">
                        <Users size={22} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[#0E2A38] font-bold text-lg">Enterprise Solutions</div>
                        <div className="text-[#0E2A38]/45 text-sm">Professional Services</div>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <motion.span
                          className="h-2 w-2 rounded-full bg-emerald-500 block"
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                          transition={{ duration: 1.6, repeat: Infinity }}
                        />
                        <span className="text-[10px] font-bold text-emerald-600 tracking-wider">LIVE</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: "Oracle Integrations", width: 85 },
                        { label: "Workday HCM",         width: 70 },
                        { label: "AI Implementations",  width: 93 },
                      ].map((s, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs font-semibold text-[#0E2A38]/55 mb-1.5">
                            <span>{s.label}</span>
                            <span className="text-[#0B74B0] font-bold">{s.width}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-[#F4F4F7] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${s.width}%` }}
                              transition={{ duration: 1.5, delay: 0.5 + i * 0.22, ease: [0.22, 1, 0.36, 1] }}
                              className="h-full rounded-full"
                              style={{ background: "linear-gradient(90deg, #0B74B0, #75479C)" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-5 border-t border-[#F4F4F7] flex justify-between">
                      {[["12", "Active"], ["98%", "On-Time"], ["4.9★", "Rating"]].map(([v, l]) => (
                        <div key={l} className="text-center">
                          <div className="text-[#0B74B0] font-black text-sm leading-none">{v}</div>
                          <div className="text-[#0E2A38]/35 text-[10px] font-semibold mt-1">{l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Top-right: Cloud Migration chip */}
              <motion.div
                initial={{ opacity: 0, x: 28, y: -20 }}
                animate={{ opacity: 1, x: 0, y: [-8, 5, -8] }}
                transition={{ opacity: { duration: 0.7, delay: 0.5 }, x: { duration: 0.7, delay: 0.5 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute top-6 sm:top-12 right-0 sm:-right-4 z-20"
              >
                <div className="rounded-2xl bg-[#0E2A38] text-white p-4 sm:p-5 w-44 sm:w-52 shadow-[0_20px_55px_-10px_rgba(14,42,56,0.55)] border border-white/[0.07]">
                  <Cloud size={20} className="text-[#44aaff] mb-2.5" />
                  <div className="font-bold text-sm sm:text-base">Cloud Migration</div>
                  <div className="text-white/45 text-xs mt-0.5">Seamless & Secure</div>
                  <div className="mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-[#44aaff]"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Bottom-left: Managed Services chip */}
              <motion.div
                initial={{ opacity: 0, x: -28, y: 20 }}
                animate={{ opacity: 1, x: 0, y: [5, -8, 5] }}
                transition={{ opacity: { duration: 0.7, delay: 0.7 }, x: { duration: 0.7, delay: 0.7 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute bottom-24 sm:bottom-28 left-0 sm:-left-8 z-20"
              >
                <div className="rounded-2xl bg-white p-3 sm:p-4 flex items-center gap-3 w-48 sm:w-56 shadow-[0_14px_45px_-8px_rgba(14,42,56,0.16)] border border-black/[0.07]">
                  <div className="bg-gradient-to-br from-[#EBF4F9] to-[#EDE8F5] p-2.5 rounded-xl shrink-0 border border-[#0B74B0]/10">
                    <ShieldCheck size={16} className="text-[#0B74B0]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0E2A38] text-xs sm:text-sm">Managed Services</div>
                    <div className="text-[#0E2A38]/40 text-[10px] mt-0.5">24/7 Support</div>
                  </div>
                </div>
              </motion.div>

              {/* Middle-right: AI-Powered chip */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{ opacity: { duration: 0.6, delay: 1.0 }, scale: { duration: 0.6, delay: 1.0, type: "spring", bounce: 0.45 }, y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 } }}
                className="absolute top-1/2 -translate-y-8 right-0 sm:-right-2 z-30"
              >
                <div className="rounded-2xl text-white p-3 sm:p-4 flex items-center gap-2 shadow-lg border border-white/10"
                  style={{ background: "linear-gradient(135deg, #75479C, #9B5DD4)", boxShadow: "0 10px 30px -8px rgba(117,71,156,0.4)" }}>
                  <Rocket size={14} className="shrink-0" />
                  <div>
                    <div className="font-bold text-xs leading-none">AI-Powered</div>
                    <div className="text-white/65 text-[9px] mt-0.5 whitespace-nowrap">Solutions</div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom: satisfaction badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{ opacity: { duration: 0.7, delay: 0.9 }, scale: { duration: 0.7, delay: 0.9 }, y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 } }}
                className="absolute bottom-4 sm:bottom-8 right-4 sm:right-0 z-30"
              >
                <div
                  className="rounded-full px-4 py-2.5 sm:px-5 sm:py-3 flex items-center gap-2 text-white font-bold text-xs sm:text-sm"
                  style={{ background: "linear-gradient(135deg, #0B74B0, #75479C)", boxShadow: "0 8px 32px -6px rgba(11,116,176,0.5)" }}
                >
                  <Award size={13} className="shrink-0" />
                  99% Client Satisfaction
                </div>
              </motion.div>
            </div>
          </div>

          {/* ── Trusted-by industries strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="border-t border-[#0E2A38]/[0.06] pt-8 pb-10"
          >
            <p className="text-[#0E2A38]/28 text-[10px] font-bold tracking-[0.3em] uppercase text-center mb-5">Trusted across industries</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12">
              {["Healthcare", "Finance", "Insurance", "Government", "Legal", "Media & Entertainment"].map((ind) => (
                <span key={ind}
                  className="text-[#0E2A38]/22 text-xs font-bold tracking-[0.2em] uppercase hover:text-[#0B74B0]/55 transition-colors duration-300 cursor-default select-none"
                >
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS COUNTER ── */}
      <section className="bg-[#0E2A38] py-14 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0B74B0]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="text-center px-6 py-8 lg:py-4 group"
              >
                <div className="inline-flex h-11 w-11 rounded-xl bg-[#0B74B0]/20 items-center justify-center text-[#0B74B0] mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={20} />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-1.5 tracking-tight tabular-nums">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[#0B74B0] font-semibold text-xs uppercase tracking-[0.18em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH MARQUEE ── */}
      <div className="bg-white py-4 overflow-hidden border-b border-black/[0.06] group/marquee">
        <div className="flex gap-0 animate-marquee group-hover/marquee:[animation-play-state:paused]">
          {[...techItems, ...techItems].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-5 px-8 shrink-0">
              <span className="text-[#0E2A38]/25 font-bold text-xs uppercase tracking-[0.3em] whitespace-nowrap select-none">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B74B0]/30 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* ── THREE PILLARS ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white border border-black/[0.08] shadow-sm p-8 lg:p-14"
          >
            <div className="text-center mb-20">
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Your Vantage Point</div>
              <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                How We Deliver Value
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative"
                >
                  <div aria-hidden className="text-[#0E2A38]/[0.03] font-black text-[120px] leading-none tracking-tighter absolute -top-6 -left-4 select-none pointer-events-none">
                    0{i + 1}
                  </div>
                  <div className="relative">
                    <div className="h-16 w-16 rounded-2xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                      <p.icon size={28} strokeWidth={2.5} />
                    </div>
                    <div className="text-[#0B74B0] text-[10px] font-bold tracking-[0.25em] uppercase mb-2">0{i + 1}</div>
                    <h3 className="font-semibold text-[#0E2A38] text-xl mb-3 tracking-tight">{p.title}</h3>
                    <p className="text-sm text-[#0E2A38]/60 leading-relaxed mb-5">{p.desc}</p>
                    <Link to={p.to} className="inline-flex items-center gap-1.5 text-[#0B74B0] text-sm font-semibold hover:gap-2.5 transition-all duration-300">
                      Explore Solutions <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <CoreServices />

      {/* ── WHY US ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#0E2A38] text-white relative overflow-hidden p-8 lg:p-12 shadow-lg"
          >
            <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 bg-[#0B74B0]/20 rounded-full blur-3xl pointer-events-none" />
            <div aria-hidden className="absolute -bottom-32 -left-16 w-72 h-72 bg-[#75479C]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Why Vantage Point</div>
              <h2 className="font-[Manrope] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-10 max-w-4xl">
                Recognized as a{" "}
                <span className="text-gradient-animated">Top Player</span>{" "}
                in IT Solutions
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {whyUs.map((w, i) => (
                  <motion.div
                    key={w.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    className="rounded-2xl bg-white/[0.06] border border-white/[0.10] p-7 hover:bg-white/[0.10] transition-all duration-300 group card-glow"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-[#0B74B0]/20 grid place-items-center text-[#0B74B0] mb-5 group-hover:scale-110 transition-transform duration-300">
                      <w.icon size={28} strokeWidth={2.5} />
                    </div>
                    <h4 className="font-semibold text-lg mb-2.5 tracking-tight">{w.title}</h4>
                    <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <IndustrySection />

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Endorsements</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-sm text-[#0E2A38]/55 max-w-2xl mx-auto leading-relaxed">
              Trusted by enterprise leaders across healthcare, finance, and technology sectors.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="rounded-3xl bg-white border border-black/[0.08] shadow-sm p-8 relative overflow-hidden group hover:-translate-y-1.5 transition-transform duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0B74B0] to-[#75479C]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B74B0]/[0.02] to-[#75479C]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <Quote size={36} className="text-[#0B74B0]/12 mb-5 -ml-1" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-[#0B74B0] fill-[#0B74B0]" />
                  ))}
                </div>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-8 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3.5 pt-6 border-t border-black/[0.06]">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#0B74B0] to-[#75479C] grid place-items-center text-white font-black text-base shadow-md shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E2A38] text-sm">{t.name}</div>
                    <div className="text-[#0B74B0] text-[11px] font-semibold tracking-[0.15em] uppercase mt-0.5">{t.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECOND MARQUEE (reversed) ── */}
      <div className="bg-white py-4 overflow-hidden border-y border-black/[0.06] group/marquee2">
        <div className="flex gap-0 animate-marquee-reverse group-hover/marquee2:[animation-play-state:paused]">
          {[...techItems, ...techItems].map((item, i) => (
            <div key={i} className="inline-flex items-center gap-5 px-8 shrink-0">
              <span className="text-[#0E2A38]/20 font-bold text-xs uppercase tracking-[0.3em] whitespace-nowrap select-none">{item}</span>
              <span className="w-1 h-1 rounded-full bg-[#75479C]/30 shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-[#0E2A38] text-white p-8 lg:p-14 shadow-xl"
          >
            <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div aria-hidden className="absolute -top-24 -left-24 w-72 h-72 bg-[#0B74B0]/25 rounded-full blur-3xl pointer-events-none" />
            <div aria-hidden className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#75479C]/20 rounded-full blur-3xl pointer-events-none" />
            <div aria-hidden className="absolute top-6 right-8 text-white/[0.04]"><Zap size={200} strokeWidth={1} /></div>
            <div className="relative grid lg:grid-cols-2 gap-12 items-center text-left">
              <div>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Got a Project?</div>
                <h3 className="font-[Manrope] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
                  Got a project or a<br />partnership in mind?
                </h3>
                <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">
                  Our consultants and architects work to match your enterprise technology needs. Let's talk about how we can give you the adVantage.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-5 lg:justify-end">
                <Link to="/contact" className="btn-shine inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-semibold transition shadow-lg shadow-[#0B74B0]/30">
                  Let's Talk <ArrowUpRight size={16} strokeWidth={2.5} />
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition">
                  About Us <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
