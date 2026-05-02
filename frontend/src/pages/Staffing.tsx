import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fadeUp, scaleUp, stagger, viewportOnce } from "../lib/motion";

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
      <section className="relative overflow-hidden bg-[#F4F4F7] py-16 lg:py-20">
        <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(14,42,56,0.55) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div aria-hidden className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#75479C]/8 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div initial="hidden" animate="show" variants={stagger(0.06, 0.12)}>
              <motion.div variants={fadeUp} className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Staffing Services</motion.div>
              <motion.h1 variants={fadeUp} className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[52px] leading-[1.08] mb-6">
                We help you fill exceptional roles that others find rather challenging.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[#0E2A38]/60 max-w-lg text-sm leading-relaxed mb-8">
                From IT engineers to C-suite executives — our personalized, consultative approach connects you with talent that drives real results.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-semibold transition shadow-lg shadow-[#0B74B0]/25">
                  Let's Talk <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
            {/* Right: Image */}
            <div className="relative rounded-3xl overflow-hidden h-[340px] lg:h-[420px] shadow-2xl shadow-black/15">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                alt="Professional staffing and talent acquisition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#75479C]/20 to-[#0E2A38]/40" />
              {/* Floating badge */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] shrink-0">
                  <ArrowUpRight size={18} />
                </div>
                <div>
                  <div className="text-[#0E2A38] font-bold text-xs">Top 3% Talent</div>
                  <div className="text-[#0E2A38]/50 text-[10px]">48–72 hr placement · 90-day guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVISIONS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-6">
          <motion.div initial="hidden" whileInView="show" variants={stagger(0.06, 0.12)} viewport={viewportOnce}>
            {divisions.map((div) => (
              <motion.div
                key={div.title}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-10"
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={scaleUp}
            viewport={viewportOnce}
            className="relative overflow-hidden rounded-3xl bg-[#0B74B0] text-white p-8 lg:p-12 text-center"
          >
            <div aria-hidden className="absolute inset-0 opacity-25 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-semibold text-3xl sm:text-4xl mb-4">Got a project or a partnership in mind?</h3>
              <p className="text-white/75 mb-8 text-sm max-w-md mx-auto">
                Let's talk about how we can provide the exceptional talent your organization needs.
              </p>
              <Link to="/contact" className="inline-flex items-center h-11 px-7 rounded-full bg-[#0E2A38] hover:bg-[#0a1f29] text-white text-sm font-medium transition shadow">
                Let's Talk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Staffing;
