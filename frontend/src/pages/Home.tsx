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

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

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
    { value: 99, suffix: "%", label: "Client Satisfaction", icon: Star },
    { value: 15, suffix: "+", label: "Years Experience", icon: Globe },
    { value: 50, suffix: "+", label: "Enterprise Clients", icon: Users },
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
      <section className="relative overflow-hidden bg-[#F4F4F7] py-16 lg:py-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(14,42,56,0.55) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
        />
        {/* Ambient orbs */}
        <div aria-hidden className="absolute top-10 left-1/4 w-80 h-80 bg-[#0B74B0]/10 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#75479C]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-[#EBF4F9] border border-[#0B74B0]/15 rounded-full px-5 py-2 mb-10 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#0B74B0] animate-pulse" />
              <span className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">VPC is an An Orpine Company</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] mb-6"
            >
              Your Vantage{" "}
              <span className="text-gradient-animated">Point</span>.
              <br />
              Our Solution.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-[#0E2A38]/65 max-w-xl text-sm leading-relaxed">
              Be it an integration, migration, or professional services project, let us show you why working with us will be to your{" "}
              <span className="text-[#0B74B0] font-semibold underline decoration-4 underline-offset-8">adVantage</span>.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="btn-shine inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-semibold transition shadow-lg shadow-[#0B74B0]/25"
              >
                Our Services <ArrowUpRight size={18} strokeWidth={2.5} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/60 text-[#0E2A38] hover:bg-white px-6 py-2.5 text-sm font-semibold transition shadow-sm"
              >
                Get in Touch <ArrowRight size={18} strokeWidth={2.5} />
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white border border-black/8 rounded-full px-4 py-1.5 shadow-sm">
                  <CheckCircle size={13} className="text-[#0B74B0]" />
                  <span className="text-xs font-semibold text-[#0E2A38]/60">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none h-[450px] sm:h-[500px] mt-10 lg:mt-0 flex items-center justify-center">
            {/* Background Blob */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], rotate: [0, 90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 m-auto w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-gradient-to-tr from-[#0B74B0]/20 to-[#EBF4F9]/60 rounded-full blur-3xl pointer-events-none"
            />
            {/* Center Main Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-[90%] sm:w-[360px]"
            >
              <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_-15px_rgba(14,42,56,0.15)] p-6 sm:p-8 border border-white/60">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-[#0B74B0]/15 to-[#75479C]/15 grid place-items-center text-[#0B74B0] flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <div className="text-[#0E2A38] font-bold text-lg sm:text-xl">Enterprise Solutions</div>
                    <div className="text-[#0E2A38]/50 text-sm font-medium">Professional Services</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Oracle Integrations", width: 85 },
                    { label: "Workday HCM", width: 70 },
                    { label: "AI Implementations", width: 90 },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-semibold text-[#0E2A38]/70 mb-1.5">
                        <span>{stat.label}</span>
                        <span className="text-[#0B74B0]">{stat.width}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-[#F4F4F7] overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.width}%` }}
                          transition={{ duration: 1.2, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#0B74B0] to-[#75479C]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Top Right Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: [-10, 5, -10] }}
              transition={{ opacity: { duration: 0.8, delay: 0.4 }, x: { duration: 0.8, delay: 0.4 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute top-4 sm:top-10 right-0 sm:-right-8 z-20"
            >
              <div className="rounded-2xl bg-[#0E2A38] text-white shadow-xl p-4 sm:p-5 border border-white/10 w-40 sm:w-48 backdrop-blur-md">
                <Cloud size={22} className="text-[#0B74B0] mb-2 sm:mb-3" />
                <div className="font-semibold text-sm sm:text-base">Cloud Migration</div>
                <div className="text-white/50 text-xs sm:text-sm mt-1">Seamless & Secure</div>
              </div>
            </motion.div>

            {/* Bottom Left Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: [5, -10, 5] }}
              transition={{ opacity: { duration: 0.8, delay: 0.6 }, x: { duration: 0.8, delay: 0.6 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
              className="absolute bottom-16 sm:bottom-24 left-0 sm:-left-12 z-20"
            >
              <div className="rounded-2xl bg-white/95 backdrop-blur-md shadow-[0_15px_40px_-10px_rgba(14,42,56,0.15)] p-3 sm:p-4 border border-black/5 flex items-center gap-3 w-48 sm:w-56">
                <div className="bg-[#EBF4F9] p-2 rounded-xl shrink-0">
                  <ShieldCheck size={18} className="text-[#0B74B0]" />
                </div>
                <div>
                  <div className="font-semibold text-[#0E2A38] text-xs sm:text-sm">Managed Services</div>
                  <div className="text-[#0E2A38]/40 text-[10px] sm:text-xs font-medium">24/7 Support</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ opacity: { duration: 0.8, delay: 0.8 }, scale: { duration: 0.8, delay: 0.8 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
              className="absolute bottom-4 sm:bottom-10 right-4 sm:right-0 z-30"
            >
              <div className="rounded-full bg-gradient-to-r from-[#0B74B0] to-[#75479C] text-white shadow-lg py-2.5 px-4 sm:py-3 sm:px-5 flex items-center gap-2">
                <Star size={14} className="fill-white" />
                <div className="font-bold text-xs sm:text-sm tracking-wide">99% Client Satisfaction</div>
              </div>
            </motion.div>
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
              <span className="text-[#0E2A38]/25 font-bold text-xs uppercase tracking-[0.3em] whitespace-nowrap select-none">
                {item}
              </span>
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
                  {/* Big number watermark */}
                  <div
                    aria-hidden
                    className="text-[#0E2A38]/[0.03] font-black text-[120px] leading-none tracking-tighter absolute -top-6 -left-4 select-none pointer-events-none"
                  >
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
            {/* Ambient orbs */}
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
                {/* Gradient top border */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0B74B0] to-[#75479C]" />
                {/* Subtle bg glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B74B0]/[0.02] to-[#75479C]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <Quote size={36} className="text-[#0B74B0]/12 mb-5 -ml-1" />

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-[#0B74B0] fill-[#0B74B0]" />
                  ))}
                </div>

                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-8 italic relative">
                  "{t.quote}"
                </p>

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
              <span className="text-[#0E2A38]/20 font-bold text-xs uppercase tracking-[0.3em] whitespace-nowrap select-none">
                {item}
              </span>
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
            {/* Orbs */}
            <div aria-hidden className="absolute -top-24 -left-24 w-72 h-72 bg-[#0B74B0]/25 rounded-full blur-3xl pointer-events-none" />
            <div aria-hidden className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#75479C]/20 rounded-full blur-3xl pointer-events-none" />
            {/* Zap icon decor */}
            <div aria-hidden className="absolute top-6 right-8 text-white/[0.04]">
              <Zap size={200} strokeWidth={1} />
            </div>

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
                <Link
                  to="/contact"
                  className="btn-shine inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-semibold transition shadow-lg shadow-[#0B74B0]/30"
                >
                  Let's Talk <ArrowUpRight size={16} strokeWidth={2.5} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 h-12 px-8 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition"
                >
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
