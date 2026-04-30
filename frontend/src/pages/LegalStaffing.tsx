import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LegalStaffing: React.FC = () => {
  const positions = [
    "Paralegals", "Legal Secretaries", "Attorneys", "Litigation Support",
    "Legal Administrators", "Case Assistants", "Records Clerks", "Billing Specialists",
    "Word Processors", "Contracts Analysts", "Compliance Officers", "Document Review Attorneys",
    "IT Professionals", "GRC Specialists",
  ];

  const differentiators = [
    { title: "Personal Relationships", desc: "Personal relationships cultivated over years in the legal industry, combined with our proprietary tools to match candidates with the right positions." },
    { title: "Industry Experience", desc: "Our attorney search teams bring direct industry experience — we are former lawyers, paralegals, and litigation support professionals." },
    { title: "Confidential Pre-Screening", desc: "Confidential pre-screening methods including personal and virtual interviews to protect candidate and client privacy at every stage." },
    { title: "Values-Driven", desc: "A values-driven organization built on honesty, ethics, and integrity. We reject generic approaches in favor of a truly customized solution." },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0E2A38] py-24 lg:py-28">
        <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 36px)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Legal Staffing</div>
          <h1 className="font-[Manrope] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]">
            Embark on a customized, comprehensive
            <br />
            legal staffing solution tailored to your firm's distinct needs.
          </h1>
          <p className="mt-6 text-white/60 max-w-xl mx-auto text-sm leading-relaxed">
            Built on personal relationships, proprietary tools, and a commitment to honesty, ethics, and integrity.
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
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Philosophy</div>
                <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-6">
                  We Invest Time in Understanding Your Distinct Needs
                </h2>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  Vantage Point Consulting operates as a values-driven organization that rejects generic approaches. We invest time in comprehending the distinctive requirements and nuances of our clients and candidates from the outset.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  We combine personal relationships cultivated over years in the legal industry with our proprietary tools to match candidates with positions that are the right fit for both parties.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-8">
                  Our services cover compliance, insurance claims, document review, and litigation support. Our approach involves confidential pre-screening methods, including personal and virtual interviews.
                </p>
                <ul className="space-y-3">
                  {["Former lawyers, paralegals & litigation support professionals", "Proprietary matching tools and methods", "Confidential pre-screening at every stage", "Honesty, ethics, and integrity in every engagement"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#0E2A38]/70">
                      <CheckCircle size={15} className="text-[#0B74B0] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">What Sets Us Apart</div>
                <div className="space-y-4">
                  {differentiators.map((d) => (
                    <div key={d.title} className="rounded-2xl bg-[#EBF4F9] p-5">
                      <h4 className="font-semibold text-[#0E2A38] mb-1.5">{d.title}</h4>
                      <p className="text-[#0E2A38]/60 text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── POSITIONS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Positions We Fill</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Across the Full Legal Spectrum
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {positions.map((pos) => (
              <div key={pos} className="bg-[#EBF4F9] rounded-full px-5 py-2.5 text-sm font-medium text-[#0E2A38] hover:shadow-sm transition cursor-default">
                {pos}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#0B74B0] text-white p-8 lg:p-12 text-center">
            <div aria-hidden className="absolute inset-0 opacity-25 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 28px)" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-semibold text-3xl sm:text-4xl mb-4">Got a project or a partnership in mind?</h3>
              <p className="text-white/75 mb-8 text-sm max-w-md mx-auto">
                Let's talk about your legal staffing needs and build a customized solution for your firm.
              </p>
              <Link to="/contact" className="inline-flex items-center h-11 px-7 rounded-full bg-[#0E2A38] hover:bg-[#0a1f29] text-white text-sm font-medium transition shadow">
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

export default LegalStaffing;
