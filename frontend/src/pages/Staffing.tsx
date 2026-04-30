import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Staffing: React.FC = () => {
  const divisions = [
    {
      title: "Information Technology",
      desc: "Our IT division focuses on identifying candidates for full-time or contract-based roles on cutting-edge and innovative projects. We maintain access to diverse talent pools for both specialized and high-demand positions.",
      roles: ["Software Engineers", "DevOps & Cloud Engineers", "Data Scientists & Analysts", "Cybersecurity Specialists", "Solutions Architects", "IT Project Managers"],
    },
    {
      title: "Finance & Accounting",
      desc: "We recruit permanent and contract professionals across the accounting, financial, banking, and investment industries. Our team brings over 100 years of collective experience and employs a consultative approach combined with retained and contingency recruiting methodologies.",
      roles: ["Certified Public Accountants (CPAs)", "Financial Analysts", "Controllers & CFOs", "Investment Professionals", "Auditors", "Banking Specialists"],
    },
    {
      title: "Engineering",
      desc: "We collaborate with firms needing engineering talent, emphasizing understanding technical needs and delivering customized solutions. We provide access to hidden talent pools developed through decades of experience and cutting-edge recruiting technologies.",
      roles: ["Civil Engineers", "Mechanical Engineers", "Electrical Engineers", "Project Managers", "Quality Assurance Engineers", "Technical Leads"],
    },
    {
      title: "Attorney and Paralegal",
      desc: "Our legal staffing team comprises former lawyers, paralegals, and litigation support professionals. Services cover compliance, insurance claims, document review, and litigation support. Our approach involves confidential pre-screening methods, including personal and virtual interviews.",
      roles: ["Attorneys", "Paralegals", "Litigation Support", "Compliance Officers", "Document Review", "Insurance Claims Specialists"],
    },
    {
      title: "Executive Search",
      desc: "We specialize in recruiting senior roles for organizations seeking proven leadership. Our executive search practice leverages deep industry networks and a rigorous vetting process to identify candidates who drive exceptional outcomes.",
      roles: ["Chief Executive Officers (CEO)", "Chief Operating Officers (COO)", "Chief Financial Officers (CFO)", "General Managers", "Directors", "Country Managers"],
    },
    {
      title: "Operations & Administrative Support",
      desc: "We focus on placing executive assistants and operations professionals to enable leaders to delegate administrative responsibilities effectively and keep their organizations running smoothly.",
      roles: ["Executive Assistants", "Operations Managers", "HR Generalists", "Office Managers", "Administrative Coordinators", "Business Support Specialists"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#F4F4F7]">
        <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #0E2A38 0 1px, transparent 1px 36px)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 text-center">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Staffing Services</div>
          <h1 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05]">
            We help you fill exceptional roles
            <br />
            that others find rather challenging.
          </h1>
          <p className="mt-6 text-[#0E2A38]/60 max-w-xl mx-auto text-sm leading-relaxed">
            From IT engineers to C-suite executives — our personalized, consultative approach connects you with talent that drives real results.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-medium transition shadow-sm">
            Let's Talk <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── DIVISIONS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-6">
          {divisions.map((div) => (
            <div key={div.title} className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h2 className="font-[Manrope] font-semibold text-[#0E2A38] text-2xl lg:text-3xl mb-4 tracking-tight">{div.title}</h2>
                  <p className="text-[#0E2A38]/60 text-sm leading-relaxed mb-6">{div.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-1.5 text-[#0B74B0] text-sm font-medium hover:gap-2.5 transition-all">
                    Get started <ArrowUpRight size={14} />
                  </Link>
                </div>
                <div>
                  <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Roles We Fill</div>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {div.roles.map((role) => (
                      <div key={role} className="flex items-center gap-2 rounded-xl bg-[#EBF4F9] px-4 py-2.5">
                        <CheckCircle size={13} className="text-[#0B74B0] flex-shrink-0" />
                        <span className="text-sm text-[#0E2A38]/80">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                Let's talk about how we can provide the exceptional talent your organization needs.
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

export default Staffing;
