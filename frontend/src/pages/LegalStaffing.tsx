import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LegalStaffing: React.FC = () => {
  const positions = [
    "Paralegal", "Legal Secretary", "Attorney", "Litigation Solutions",
    "Case Assistant", "Records Clerk", "Legal Administrative Assistant",
    "Legal Billing/ Elite 3 E", "Legal Word Processor", "Contracts Analyst",
    "Legal Compliance", "Substantive Attorney", "AML Reviewer", "BSA Reviewer",
    "Document Review Attorney", "Information Technology", "GRC",
  ];

  const differentiators = [
    { title: "Touch with Technology", desc: "Our seasoned recruiters and attorney search teams utilize personal relationships cultivated over years in the legal industry, coupled with our proprietary tools, to simplify the process of aligning the perfect individual with the right position." },
    { title: "No One-Size-Fits-All", desc: "We invest time in comprehending the distinctive requirements and nuances of our clients and candidates from the outset, crafting exceptional experiences for every individual, every time." },
    { title: "Values-Driven Firm", desc: "We operate as a values-driven firm, steadfastly upholding honesty, ethics, and integrity as the guiding principles influencing our behaviors and actions at every juncture." },
    { title: "Broad Placement Focus", desc: "Our focus lies in the placement of: Lawyers | Litigation Support | Legal Administrators | Legal Office Services | Legal Secretaries | Paralegals | Information Technology Services | Billing" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0E2A38] py-24 lg:py-28">
        <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        {/* Hero atmosphere image */}
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2070&q=80"
          alt="legal books and gavel"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-luminosity pointer-events-none select-none"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E2A38] via-[#0E2A38]/60 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Legal Staffing</div>
          <h1 className="font-[Manrope] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[56px] leading-[1.05]">
            Embark on a customized, comprehensive
            <br />
            legal staffing solution tailored to your firm's distinct needs.
          </h1>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto text-sm leading-relaxed">
            Discover a pool of attorneys, paralegals, and specialized legal personnel ready to bolster your practice or legal department. Connect with fresh legal talent and opportunities right at your fingertips.
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
                  Merging Touch with Technology
                </h2>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  At Vantage Point Consulting, we shun a one-size-fits-all mentality! We invest time in comprehending the distinctive requirements and nuances of our clients and candidates from the outset, crafting exceptional experiences for every individual, every time.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-5">
                  Merging touch with technology, our seasoned recruiters and attorney search teams utilize personal relationships cultivated over years in the legal industry, coupled with our proprietary tools, to simplify the process of aligning the perfect individual with the right position.
                </p>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed mb-8">
                  Crucially, we operate as a values-driven firm, steadfastly upholding honesty, ethics, and integrity as the guiding principles influencing our behaviors and actions at every juncture.
                </p>
                <ul className="space-y-3">
                  {["Specialized legal personnel ready to bolster your practice", "Explore career-expanding positions", "Seasoned recruiters and attorney search teams", "Guiding principles of honesty, ethics, and integrity"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#0E2A38]/70">
                      <CheckCircle size={15} className="text-[#0B74B0] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">The Vantage Point Way</div>
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
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Areas We Help Place Candidates</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Specialized Legal Talent
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {positions.map((pos) => (
              <div key={pos} className="bg-[#EBF4F9] rounded-full px-5 py-2.5 text-sm font-medium text-[#0E2A38] hover:shadow-sm transition cursor-default border border-black/5">
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
            <div aria-hidden className="absolute inset-0 opacity-25 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
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
