import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Cloud } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CloudMigration: React.FC = () => {
  const offerings = [
    { title: "Public Cloud", desc: "Leverage established best practices, management tools, and expert technologists to accelerate your public cloud transformation." },
    { title: "Private Cloud", desc: "Secure, dedicated cloud environments tailored to your compliance requirements and business continuity needs." },
    { title: "Hybrid Cloud", desc: "The optimal mix of public and private cloud, giving you flexibility, control, and scalability across all environments." },
    { title: "Cloud Data Protection", desc: "Our Cloud Data Protection Platform enables consistent, adaptable data protection so enterprises can leverage data insights and meet customer needs." },
    { title: "Migration Consulting", desc: "Client-focused methodology using pre-designed templates and data analysis tools to facilitate seamless, efficient migrations without operational disruption." },
    { title: "Post-Migration Optimization", desc: "Ongoing support to optimize your cloud environment, reduce costs, and ensure maximum performance after migration." },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0E2A38] py-24 lg:py-28">
        <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        {/* Hero atmosphere image */}
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2070&q=80"
          alt="technology and data visualization"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-luminosity pointer-events-none select-none"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E2A38] via-[#0E2A38]/60 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Cloud Migration</div>
          <h1 className="font-[Manrope] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05]">
            Adopt the cloud with peace of mind
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto leading-relaxed text-base">
            Knowing that your data is protected no matter where it is moved, used, or stored within cloud systems.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-medium transition shadow-sm">
            Let's Talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Approach</div>
                <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-6">
                  We Identify the Optimal Cloud Strategy for Your Business
                </h2>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  Navigating cloud technology can prove challenging for organizations. We at VPC collaborate with you to identify the optimal cloud strategy — public, private, or hybrid — for your business.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  We offer managed public cloud services featuring established best practices, management tools, and expert technologists to accelerate transformation efforts.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-8">
                  VPC's approach utilizes a Cloud Data Protection Platform enabling consistent, adaptable data protection — allowing enterprises to leverage data insights, discover opportunities, meet customer needs, and enhance competitive standing.
                </p>
                <ul className="space-y-3">
                  {["Public, private, or hybrid cloud strategy", "Cloud Data Protection Platform", "Pre-designed templates and data analysis tools", "Seamless migration without operational disruption", "Ongoing optimization and support"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#0E2A38]/70">
                      <CheckCircle size={15} className="text-[#0B74B0] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-[#EBF4F9] p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
                <div className="h-16 w-16 rounded-2xl bg-white grid place-items-center text-[#0B74B0] mb-5 shadow-sm">
                  <Cloud size={32} />
                </div>
                <h3 className="font-semibold text-[#0E2A38] text-xl mb-3">Ready to move to the cloud?</h3>
                <p className="text-[#0E2A38]/60 text-sm leading-relaxed mb-6">
                  Our consulting team will assess your current infrastructure and design a migration roadmap tailored to your business.
                </p>
                <Link to="/contact" className="inline-flex items-center h-10 px-6 rounded-full bg-[#0E2A38] text-white text-sm font-medium hover:bg-[#0a1f29] transition">
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">What We Provide</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Cloud Migration Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offerings.map((o) => (
              <div key={o.title} className="rounded-3xl bg-[#EBF4F9] p-6">
                <CheckCircle size={16} className="text-[#0B74B0] mb-4" />
                <h4 className="font-semibold text-[#0E2A38] mb-2">{o.title}</h4>
                <p className="text-[#0E2A38]/60 text-sm leading-relaxed">{o.desc}</p>
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
              <p className="text-white/55 mb-8 text-sm max-w-md mx-auto">Let's talk about your cloud migration needs and design the right strategy for your business.</p>
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

export default CloudMigration;
