import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Users, Cloud, Settings, Clock, TrendingUp, ShieldCheck, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ForCompanies: React.FC = () => {
  const offerings = [
    {
      icon: Users,
      title: "Talent Acquisition",
      desc: "Hire top 1% tech, finance, legal, and executive talent. Pre-vetted shortlists in 48–72 hours.",
      items: ["IT & Tech roles", "Finance & Accounting", "Legal & Compliance", "Executive / C-Level search", "Contract & temp staffing"],
    },
    {
      icon: Cloud,
      title: "Cloud & Tech Solutions",
      desc: "Modernize your infrastructure, reduce costs, and future-proof your technology stack.",
      items: ["AWS / Azure cloud migration", "Hybrid infrastructure design", "AI & process automation", "Data protection & compliance", "Digital transformation roadmaps"],
    },
    {
      icon: Settings,
      title: "Managed IT Services",
      desc: "Your complete IT department as a service — at a predictable flat monthly rate.",
      items: ["24/7 infrastructure monitoring", "Cybersecurity & threat response", "Network management & helpdesk", "Compliance management (HIPAA, SOC 2)"],
    },
  ];

  const process = [
    { n: "1", title: "Discovery Call", desc: "Free 30-minute call to understand your business, team size, and specific hiring or IT needs." },
    { n: "2", title: "Custom Strategy", desc: "We design a tailored plan aligned to your timeline, budget, and business goals." },
    { n: "3", title: "Rapid Execution", desc: "Candidates delivered in 48–72 hours. IT projects kicked off within a week." },
    { n: "4", title: "Ongoing Partnership", desc: "Dedicated account manager, regular check-ins, and continuous improvement." },
  ];

  const guarantees = [
    { icon: Clock, title: "48-Hour Shortlists", desc: "First shortlist of pre-vetted candidates within 48–72 business hours." },
    { icon: ShieldCheck, title: "90-Day Guarantee", desc: "If a direct hire doesn't work out in 90 days, we re-recruit at no extra cost." },
    { icon: TrendingUp, title: "Top 3% Only", desc: "Only the top 3% of candidates we screen ever reach your desk." },
  ];

  const testimonials = [
    { quote: "We went from struggling to hire for 3 months to having 6 qualified engineers in 48 hours. Game changer.", name: "Chris Thompson", title: "VP Engineering, CloudBase Inc.", metric: "48 hrs", metricLabel: "to first shortlist" },
    { quote: "Vantage Point manages our entire IT infrastructure. It's like having a senior IT team without the overhead.", name: "Angela Rivera", title: "CFO, MedCore Health Systems", metric: "40%", metricLabel: "reduction in IT costs" },
    { quote: "They placed our new CTO in 10 days. Quality of candidates far above any other firm we'd used.", name: "David Park", title: "CEO, Nexus FinTech", metric: "10 days", metricLabel: "to CTO hire" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#F4F4F7] py-16 lg:py-20">
        <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(14,42,56,0.55) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0B74B0]/8 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">For Business Leaders & Hiring Teams</div>
            <h1 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[52px] leading-[1.05] mb-6">
              Build Your Dream Team.
              <br />
              Scale Your Technology.
            </h1>
            <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-8 max-w-md">
              Stop wasting time on bad hires and unreliable IT vendors. Vantage Point delivers top talent
              and enterprise-grade technology solutions — fast.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-5 py-2.5 text-sm font-semibold transition shadow-lg shadow-[#0B74B0]/25">
                Book a Free Consultation <ArrowUpRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center rounded-full border border-black/15 bg-white/60 text-[#0E2A38] hover:bg-white px-5 py-2.5 text-sm font-semibold transition shadow-sm">
                View Services
              </Link>
            </div>
          </div>

          {/* Right: Image + floating card */}
          <div className="relative h-[380px] lg:h-[440px]">
            <div className="rounded-3xl overflow-hidden h-full shadow-2xl shadow-black/15">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                alt="Executive business meeting and team leadership"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B74B0]/20 to-[#0E2A38]/50" />
            </div>
            {/* Floating advantages card */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 w-[calc(100%-1rem)] max-w-[340px] bg-white rounded-2xl shadow-[0_20px_50px_-10px_rgba(14,42,56,0.25)] p-5 border border-black/5">
              <div className="text-[#0B74B0] text-[10px] font-bold tracking-[0.2em] uppercase mb-3">The Vantage Point Advantage</div>
              <div className="space-y-2 mb-4">
                {["Pre-vetted candidates in 48–72 hours", "Only top 3% of applicants reach you", "90-day replacement guarantee", "Dedicated account manager"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle size={13} className="text-[#0B74B0] shrink-0" />
                    <span className="text-xs text-[#0E2A38] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="block w-full h-9 leading-9 text-center rounded-xl bg-[#0E2A38] text-white text-xs font-semibold hover:bg-[#0a1f29] transition">
                Start a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Services</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Everything Your Business Needs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offerings.map((o) => (
              <div key={o.title} className="rounded-3xl bg-white border border-black/5 shadow-sm p-7">
                <div className="h-11 w-11 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] mb-5">
                  <o.icon size={20} />
                </div>
                <h3 className="font-semibold text-[#0E2A38] text-lg mb-2">{o.title}</h3>
                <p className="text-[#0E2A38]/60 text-sm leading-relaxed mb-5">{o.desc}</p>
                <ul className="space-y-2">
                  {o.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#0E2A38]/70">
                      <CheckCircle size={13} className="text-[#0B74B0] flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl bg-[#0E2A38] text-white relative overflow-hidden p-8 lg:p-14">
            <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Process</div>
              <h2 className="font-[Manrope] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-10 max-w-xl">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-5">
                {process.map((p) => (
                  <div key={p.n} className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] transition">
                    <div className="text-5xl font-semibold text-white/15 leading-none mb-4">{p.n}</div>
                    <div className="text-lg font-semibold mb-2">{p.title}</div>
                    <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUARANTEES ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Our Guarantees</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">We Back Our Work</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((g) => (
              <div key={g.title} className="rounded-3xl bg-[#EBF4F9] p-8 flex flex-col items-start">
                <div className="h-11 w-11 rounded-xl bg-white grid place-items-center text-[#0B74B0] mb-5">
                  <g.icon size={20} />
                </div>
                <h4 className="font-semibold text-[#0E2A38] text-lg mb-2">{g.title}</h4>
                <p className="text-[#0E2A38]/60 text-sm leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Client Results</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">Numbers Don't Lie</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl bg-white border border-black/5 shadow-sm p-7">
                <div className="text-4xl font-semibold text-[#0B74B0] tracking-tight mb-1">{t.metric}</div>
                <div className="text-xs font-semibold text-[#0E2A38]/50 uppercase tracking-wide mb-4">{t.metricLabel}</div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-[#0B74B0] fill-[#0B74B0]" />)}
                </div>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-[#0E2A38] text-sm">{t.name}</div>
                  <div className="text-[#0E2A38]/40 text-xs mt-0.5">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#0B74B0] text-white p-8 lg:p-12 text-center">
            <div aria-hidden className="absolute inset-0 opacity-25 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-semibold text-3xl sm:text-4xl mb-4">Ready to Hire Smarter & Scale Faster?</h3>
              <p className="text-white/75 mb-8 text-sm max-w-xl mx-auto leading-relaxed">
                Book a free 30-minute strategy call. We'll map out exactly how Vantage Point can help your business — no commitment required.
              </p>
              <Link to="/contact" className="inline-flex items-center h-11 px-7 rounded-full bg-[#0E2A38] hover:bg-[#0a1f29] text-white text-sm font-medium transition shadow">
                Book My Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForCompanies;
