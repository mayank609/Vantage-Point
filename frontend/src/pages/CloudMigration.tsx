import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Cloud } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CloudMigration: React.FC = () => {
  const offerings = [
    { title: "Public Cloud", desc: "Benefit from established practices, effective management tools, and expert cloud technologists to hasten your transformation." },
    { title: "Private Cloud", desc: "Dedicated cloud environments tailored to your specific security, performance, and compliance requirements." },
    { title: "Hybrid Cloud", desc: "Advancing On-Premise, Hybrid and Cloud Migration projects using our Cloud Data Protection Platform." },
    { title: "Cloud Data Protection", desc: "Provides consistent and adaptable data protection, allowing enterprises to utilize valuable data insights." },
    { title: "Migration Consulting", desc: "Client-focused method utilizing pre-designed templates and data analysis tools to facilitate seamless migrations." },
    { title: "Strategic Collaboration", desc: "We collaborate with you to identify the optimal cloud strategy – public, private, or hybrid – for your business." },
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
                  Navigate the Evolving Landscape
                </h2>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  The ever-evolving landscape of cloud technology can be difficult for many businesses to keep up with. With VPC’s managed public cloud services, companies benefit from established practices, effective management tools, and expert cloud technologists to hasten their cloud transformation.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  At VPC, we enable companies to advance their On-Premise, Hybrid and Cloud Migration projects using our Cloud Data Protection Platform. This provides consistent and adaptable data protection, allowing enterprises to fulfill customer demands and improve their competitiveness.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-8">
                  VPC collaborates with you to identify the optimal cloud strategy – public, private, or hybrid – for your business. Our cloud migration consulting services adopt a client-focused method to facilitate migrations seamlessly, efficiently, and with no disruption to your operations.
                </p>
                <ul className="space-y-3">
                  {["Benefit from established practices & management tools", "Hasten transformation with expert cloud technologists", "Consistent and adaptable data protection", "Client-focused method with no business disruption", "Identify the optimal strategy: public, private, or hybrid"].map((item) => (
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
                <h3 className="font-semibold text-[#0E2A38] text-xl mb-3">Cloud Data Protection</h3>
                <p className="text-[#0E2A38]/60 text-sm leading-relaxed mb-6">
                  Utilize valuable data insights and discover new possibilities while ensuring your data remains protected across all cloud systems.
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
