import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Settings } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ManagedServices: React.FC = () => {
  const capabilities = [
    { title: "Information Technology", desc: "Complete IT strategy, planning, and management — from systems design to day-to-day operations." },
    { title: "Network Management", desc: "Full network infrastructure design, monitoring, and optimization to keep your business always connected." },
    { title: "Application Support", desc: "End-to-end application lifecycle management including deployment, performance monitoring, and updates." },
    { title: "Infrastructure", desc: "Servers, storage, and data center management — on-premise, cloud, or hybrid environments." },
    { title: "Security", desc: "Proactive cybersecurity monitoring, threat response, vulnerability management, and compliance support." },
    { title: "Change Management", desc: "Top-notch customer service, communication, and change management processes to ensure seamless transitions." },
  ];

  const industries = [
    "Aquaculture", "Intelligence Solutions", "Energy", "Life Sciences",
    "Oil & Gas", "Healthcare", "Financial Services", "Government",
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#F4F4F7] py-16 lg:py-20">
        <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(14,42,56,0.55) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div aria-hidden className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0B74B0]/8 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Managed Services</div>
              <h1 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] mb-6">
                Full-Service Managed IT Provider
              </h1>
              <p className="text-[#0E2A38]/60 max-w-lg text-sm leading-relaxed mb-8">
                Strategizing and building a complete Information Technology, network, application, infrastructure and security solution — customized to meet your needs.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-semibold transition shadow-lg shadow-[#0B74B0]/25">
                Let's Talk <ArrowUpRight size={16} />
              </Link>
            </div>
            {/* Right: Image */}
            <div className="relative rounded-3xl overflow-hidden h-[340px] lg:h-[420px] shadow-2xl shadow-black/15">
              <img
                src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=900&q=80"
                alt="Server room and managed IT infrastructure"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B74B0]/25 to-[#0E2A38]/50" />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] shrink-0">
                  <ArrowUpRight size={18} />
                </div>
                <div>
                  <div className="text-[#0E2A38] font-bold text-xs">24/7 Support</div>
                  <div className="text-[#0E2A38]/50 text-[10px]">Network · Security · Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">How We Work</div>
                <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-6">
                  A Powerhouse for Your Existing Team
                </h2>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  We act as a powerhouse to your existing team and technology to ensure a smooth transition. Our expertise covers strategizing and building a complete Information Technology, network, application, infrastructure and security stack.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  We customize our program to meet your needs and leverage technology to optimize your processes — assessing your requirements to choose the best available technology that aligns with your specific business goals.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-8">
                  Our established formal processes minimize risk and ensure seamless transitions. Our customer service, communication, and change management processes are top-notch.
                </p>
                <ul className="space-y-3">
                  {["Minimize risk with formal, proven processes", "Leverage technology to optimize your processes", "Top-notch communication & change management", "Seamless transitions with minimal disruption", "Customized program tailored to your needs"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#0E2A38]/70">
                      <CheckCircle size={15} className="text-[#0B74B0] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-[#EBF4F9] p-7 flex items-center gap-5">
                  <div className="h-14 w-14 rounded-xl bg-white grid place-items-center text-[#0B74B0] flex-shrink-0 shadow-sm">
                    <Settings size={26} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E2A38] mb-1">Assess</div>
                    <p className="text-[#0E2A38]/60 text-sm">We assess your needs and choose the best available technology that aligns with your specific requirements.</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#EBF4F9] p-7 flex items-center gap-5">
                  <div className="h-14 w-14 rounded-xl bg-white grid place-items-center text-[#0B74B0] flex-shrink-0 shadow-sm">
                    <Settings size={26} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E2A38] mb-1">Customize</div>
                    <p className="text-[#0E2A38]/60 text-sm">We customize our program to meet your needs and leverage technology to optimize your processes.</p>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#EBF4F9] p-7 flex items-center gap-5">
                  <div className="h-14 w-14 rounded-xl bg-white grid place-items-center text-[#0B74B0] flex-shrink-0 shadow-sm">
                    <Settings size={26} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0E2A38] mb-1">Execute</div>
                    <p className="text-[#0E2A38]/60 text-sm">Formal processes minimize risk and ensure seamless transitions with top-notch communication throughout.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Capabilities</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              What We Manage
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-3xl bg-[#EBF4F9] p-6">
                <CheckCircle size={16} className="text-[#0B74B0] mb-4" />
                <h4 className="font-semibold text-[#0E2A38] mb-2">{c.title}</h4>
                <p className="text-[#0E2A38]/60 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Industries Served</div>
          <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-10">
            From Aquaculture to Oil & Gas
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div key={ind} className="bg-white border border-black/5 rounded-full px-5 py-2.5 text-sm font-medium text-[#0E2A38]/70 shadow-sm">
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#0E2A38] text-white p-8 lg:p-12 text-center">
            <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-semibold text-3xl sm:text-4xl mb-4">Got a project or a partnership in mind?</h3>
              <p className="text-white/55 mb-8 text-sm max-w-md mx-auto">Let's talk about how our managed services can support your business technology needs.</p>
              <Link to="/contact" className="inline-flex items-center h-11 px-6 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition">
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManagedServices;
