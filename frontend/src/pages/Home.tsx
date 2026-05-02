import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useTransform, animate as animateValue } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Users, Cloud, Settings,
  Star, Repeat, Building2, ShieldCheck, Quote,
  TrendingUp, Globe, CheckCircle, Zap,
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
      icon: Users,
      title: "Our Solution",
      desc: "Our team provides the Professional Services, AI, and Migration solutions you need based on your vision. We empower your business with top-notch expertise through a customized approach.",
      to: "/services",
    },
    {
      icon: Cloud,
      title: "We Connect The Dots",
      desc: "We listen to your strategic goals, allowing us to implement enterprise solutions like Oracle and Workday efficiently and in a timely manner.",
      to: "/services",
    },
    {
      icon: Settings,
      title: "Our Experience",
      desc: "We provide clients with services throughout the United States. With years of experience managing complex IT projects, we have the knowledge and commitment to give you the adVantage you're looking for.",
      to: "/services",
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
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">

        {/* Top gradient accent line */}
        <div aria-hidden className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-[#0B74B0] to-[#75479C]" />

        {/* Subtle dot grid */}
        <div aria-hidden className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #0E2A38 1px, transparent 1px)", backgroundSize: "26px 26px" }} />

        {/* Soft ambient orbs */}
        <div aria-hidden className="animate-blob absolute -top-40 -left-20 w-[600px] h-[600px] bg-[#0B74B0]/08 rounded-full blur-[100px] pointer-events-none" />
        <div aria-hidden className="animate-blob animation-delay-2000 absolute -bottom-40 right-0 w-[700px] h-[700px] bg-[#75479C]/07 rounded-full blur-[110px] pointer-events-none" />
        <div aria-hidden className="animate-blob animation-delay-4000 absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#0B74B0]/05 rounded-full blur-[80px] pointer-events-none" />

        {/* Large decorative circle behind right panel */}
        <div aria-hidden className="absolute right-[-8%] top-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full border border-[#0B74B0]/08 pointer-events-none" />
        <div aria-hidden className="absolute right-[2%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[#75479C]/06 pointer-events-none" />

        {/* Sweeping horizontal beam */}
        <motion.div
          aria-hidden
          className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-[#0B74B0]/18 to-transparent pointer-events-none"
          animate={{ x: ["-5vw", "110vw"] }}
          transition={{ duration: 11, repeat: Infinity, repeatDelay: 7, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: copy ── */}
            <motion.div initial="hidden" animate="show" variants={heroStagger}>

              {/* Badge */}
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2.5 bg-[#EBF4F9] border border-[#0B74B0]/18 rounded-full px-4 py-2 mb-8 shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0B74B0] opacity-60" />
                  <span className="relative rounded-full h-2 w-2 bg-[#0B74B0]" />
                </span>
                <span className="text-[#0B74B0] text-xs font-bold tracking-[0.2em] uppercase">An Orpine Company · Est. 2008</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="font-[Manrope] font-black tracking-tight text-5xl sm:text-6xl lg:text-[72px] leading-[1.02] mb-6 text-[#0E2A38]"
              >
                Your{" "}
                <span className="text-gradient-animated">Vantage</span>
                <br />
                <span>Point.</span>
                <br />
                <span className="text-[#0E2A38]/30 text-3xl sm:text-[38px] lg:text-[44px] font-semibold tracking-normal">
                  Our Solution.
                </span>
              </motion.h1>

              {/* Body copy */}
              <motion.p variants={fadeUp} className="text-[#0E2A38]/60 max-w-lg text-base leading-relaxed mb-8">
                Be it an integration, migration, or professional services project, let us show you why working with us will be to your{" "}
                <span className="text-[#0B74B0] font-bold underline decoration-2 underline-offset-4">adVantage</span>.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-9">
                <Link
                  to="/services"
                  className="btn-shine inline-flex items-center gap-2 rounded-full bg-[#0B74B0] hover:bg-[#0986CC] text-white px-7 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#0B74B0]/25 hover:shadow-xl hover:shadow-[#0B74B0]/35"
                >
                  Our Services <ArrowUpRight size={17} strokeWidth={2.5} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0E2A38]/12 bg-white text-[#0E2A38] hover:bg-[#F4F4F7] px-7 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  Get in Touch <ArrowRight size={17} strokeWidth={2.5} />
                </Link>
              </motion.div>

              {/* Trust badges */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2.5 mb-7">
                {badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-2 bg-white border border-black/[0.07] rounded-full px-4 py-1.5 shadow-sm">
                    <CheckCircle size={12} className="text-[#0B74B0]" />
                    <span className="text-xs font-semibold text-[#0E2A38]/55">{badge}</span>
                  </div>
                ))}
              </motion.div>

              {/* Tech tag pills */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {techItems.slice(0, 6).map((item) => (
                  <span key={item}
                    className="rounded-full bg-[#F4F4F7] border border-[#0E2A38]/[0.07] px-3.5 py-1 text-[11px] font-semibold tracking-wide text-[#0E2A38]/45 hover:bg-[#EBF4F9] hover:text-[#0B74B0] hover:border-[#0B74B0]/20 transition-colors duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: floating cards ── */}
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none h-[470px] sm:h-[520px] flex items-center justify-center mt-10 lg:mt-0">

              {/* Soft glow behind main card */}
              <div aria-hidden className="absolute inset-0 m-auto w-72 h-72 rounded-full blur-[70px] pointer-events-none bg-[#0B74B0]/10" />

              {/* Center main card — gradient top border via box shadow trick */}
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-[90%] sm:w-[360px]"
              >
                {/* Gradient border wrapper */}
                <div className="p-px rounded-3xl" style={{ background: "linear-gradient(135deg, #0B74B0 0%, #75479C 50%, rgba(11,116,176,0.25) 100%)" }}>
                  <div className="rounded-3xl bg-white backdrop-blur-xl p-6 sm:p-8 shadow-[0_24px_64px_-20px_rgba(11,116,176,0.2)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#EBF4F9] to-[#E5E0F0] grid place-items-center text-[#0B74B0] flex-shrink-0 border border-[#0B74B0]/10">
                        <Users size={22} />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#0E2A38] font-bold text-lg">Enterprise Solutions</div>
                        <div className="text-[#0E2A38]/45 text-sm">Professional Services</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-emerald-600 tracking-wider">LIVE</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: "Oracle Integrations", width: 85 },
                        { label: "Workday HCM",         width: 70 },
                        { label: "AI Implementations",  width: 90 },
                      ].map((s, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-xs font-semibold text-[#0E2A38]/55 mb-1.5">
                            <span>{s.label}</span>
                            <span className="text-[#0B74B0]">{s.width}%</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-[#F4F4F7] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${s.width}%` }}
                              transition={{ duration: 1.4, delay: 0.55 + i * 0.2, ease: "easeOut" }}
                              className="h-full rounded-full"
                              style={{ background: "linear-gradient(90deg, #0B74B0, #75479C)" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Top-right floating card */}
              <motion.div
                initial={{ opacity: 0, x: 24, y: -24 }}
                animate={{ opacity: 1, x: 0, y: [-8, 6, -8] }}
                transition={{ opacity: { duration: 0.7, delay: 0.45 }, x: { duration: 0.7, delay: 0.45 }, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute top-8 sm:top-12 right-0 sm:-right-4 z-20"
              >
                <div className="rounded-2xl bg-[#0E2A38] text-white p-4 sm:p-5 w-40 sm:w-48 shadow-[0_16px_48px_-12px_rgba(14,42,56,0.45)] border border-white/[0.06]">
                  <Cloud size={20} className="text-[#0B74B0] mb-2.5" />
                  <div className="font-bold text-sm sm:text-base">Cloud Migration</div>
                  <div className="text-white/45 text-xs sm:text-sm mt-0.5">Seamless & Secure</div>
                </div>
              </motion.div>

              {/* Bottom-left floating card */}
              <motion.div
                initial={{ opacity: 0, x: -24, y: 24 }}
                animate={{ opacity: 1, x: 0, y: [6, -7, 6] }}
                transition={{ opacity: { duration: 0.7, delay: 0.6 }, x: { duration: 0.7, delay: 0.6 }, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute bottom-20 sm:bottom-28 left-0 sm:-left-10 z-20"
              >
                <div className="rounded-2xl bg-white p-3 sm:p-4 flex items-center gap-3 w-48 sm:w-56 shadow-[0_12px_40px_-10px_rgba(14,42,56,0.14)] border border-black/[0.06]">
                  <div className="bg-[#EBF4F9] p-2 rounded-xl shrink-0 border border-[#0B74B0]/10">
                    <ShieldCheck size={16} className="text-[#0B74B0]" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0E2A38] text-xs sm:text-sm">Managed Services</div>
                    <div className="text-[#0E2A38]/40 text-[10px] sm:text-xs mt-0.5">24/7 Support</div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{ opacity: { duration: 0.7, delay: 0.8 }, scale: { duration: 0.7, delay: 0.8 }, y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                className="absolute bottom-5 sm:bottom-10 right-4 sm:right-0 z-30"
              >
                <div
                  className="rounded-full px-4 py-2.5 sm:px-5 sm:py-3 flex items-center gap-2 text-white font-bold text-xs sm:text-sm"
                  style={{ background: "linear-gradient(135deg, #0B74B0, #75479C)", boxShadow: "0 8px 32px -6px rgba(11,116,176,0.45)" }}
                >
                  <Star size={13} className="fill-white" />
                  99% Client Satisfaction
                </div>
              </motion.div>
            </div>
          </div>
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
