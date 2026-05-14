import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Briefcase, DollarSign, Clock, Star, Search, FileText, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fadeUp, fadeIn, scaleUp, stagger, slideLeft, viewportOnce } from "../lib/motion";

const ForCandidates: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Technology", "Finance", "Legal", "Executive", "Healthcare", "Engineering"];

  const roles = [
    { title: "Senior Software Engineer", type: "Full-Time", location: "Remote / US", salary: "$130K–$180K", tag: "Technology", hot: true },
    { title: "DevOps / Cloud Engineer", type: "Contract", location: "New York, NY", salary: "$90–$120/hr", tag: "Technology", hot: false },
    { title: "Financial Analyst", type: "Full-Time", location: "Chicago, IL", salary: "$80K–$110K", tag: "Finance", hot: false },
    { title: "Chief Financial Officer", type: "Full-Time", location: "Austin, TX", salary: "$200K–$260K", tag: "Executive", hot: true },
    { title: "Cybersecurity Analyst", type: "Contract", location: "Remote / US", salary: "$75–$95/hr", tag: "Technology", hot: false },
    { title: "Healthcare IT Consultant", type: "Contract", location: "Houston, TX", salary: "$80–$110/hr", tag: "Healthcare", hot: true },
    { title: "Corporate Attorney", type: "Full-Time", location: "Washington, DC", salary: "$150K–$220K", tag: "Legal", hot: false },
    { title: "Data Scientist", type: "Full-Time", location: "San Francisco, CA", salary: "$140K–$190K", tag: "Technology", hot: true },
    { title: "Chief Technology Officer", type: "Full-Time", location: "Nationwide", salary: "$220K–$300K", tag: "Executive", hot: true },
  ];

  const displayed = activeFilter === "All" ? roles : roles.filter((r) => r.tag === activeFilter);

  const benefits = [
    { icon: Search, title: "Access to Hidden Jobs", desc: "Many roles are exclusive — not posted anywhere else. Our clients come to us first." },
    { icon: DollarSign, title: "Competitive Pay", desc: "We negotiate on your behalf to secure the highest possible offer for your skills." },
    { icon: TrendingUp, title: "Personalized Matching", desc: "A dedicated recruiter who learns your skills, goals, and culture preferences." },
    { icon: Clock, title: "Fast Process", desc: "From submission to offer, we keep things moving — no ghosting, no radio silence." },
    { icon: FileText, title: "Career Coaching", desc: "Resume review, interview prep, and salary negotiation support at no cost to you." },
    { icon: Briefcase, title: "Contract & Perm Options", desc: "Whether you want stability or flexibility, we have the right engagement model." },
  ];

  const process = [
    { n: "1", title: "Submit Your Profile", desc: "Share your resume and tell us your ideal role, salary range, and location preferences." },
    { n: "2", title: "Recruiter Match", desc: "A specialist recruiter in your field reviews your profile and schedules a call." },
    { n: "3", title: "Interview Prep", desc: "We coach you on the role, company culture, and interview format." },
    { n: "4", title: "Job Offer", desc: "We negotiate the best possible offer and support you through onboarding." },
  ];

  const testimonials = [
    { quote: "My recruiter took the time to understand exactly what I was looking for. I had 3 interviews lined up within a week.", name: "Marcus Johnson", title: "Senior Software Engineer, placed at a FinTech startup" },
    { quote: "They negotiated a $20K higher salary than I was going to accept. Genuinely career-changing experience.", name: "Lisa Chen", title: "Financial Analyst, placed at a Fortune 500 firm" },
    { quote: "As a CTO candidate, the quality of companies they sent me was 10× better than anything I found on my own.", name: "Kevin Okafor", title: "CTO, placed at a Series B SaaS company" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#F4F4F7] py-16 lg:py-20">
        <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(14,42,56,0.55) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div aria-hidden className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#0B74B0]/8 rounded-full blur-3xl pointer-events-none -translate-x-1/3 -translate-y-1/3" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={stagger(0.06, 0.13)}>
              <motion.div variants={fadeUp} className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">For Tech, Finance, Legal & Executive Professionals</motion.div>
              <motion.h1 variants={fadeUp} className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-[1.08] mb-6">
                Your Next Great Role Is One Conversation Away.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-[#0E2A38]/60 max-w-lg text-base leading-relaxed mb-8">
                Access exclusive high-paying roles at top US companies. Our dedicated recruiters match your skills with opportunities that actually move your career forward.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <a href="#open-roles" className="inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-semibold transition shadow-lg shadow-[#0B74B0]/25">
                  Browse Open Roles <ArrowUpRight size={16} />
                </a>
                <Link to="/contact" className="inline-flex items-center rounded-full border border-black/15 bg-white/60 text-[#0E2A38] hover:bg-white px-6 py-2.5 text-sm font-semibold transition shadow-sm">
                  Talk to a Recruiter
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl overflow-hidden h-[340px] lg:h-[420px] shadow-2xl shadow-black/15"
            >
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80" alt="Professional ready for next career opportunity" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B74B0]/20 to-[#0E2A38]/50" />
              <motion.div
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3"
              >
                <div className="h-9 w-9 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] shrink-0"><ArrowUpRight size={18} /></div>
                <div>
                  <div className="text-[#0E2A38] font-bold text-xs">Exclusive Roles</div>
                  <div className="text-[#0E2A38]/50 text-[10px]">Top US companies · IT · Finance · Legal</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="show" variants={scaleUp} viewport={viewportOnce}
            className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-14"
          >
            <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={viewportOnce} className="text-center mb-12">
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Why Work With Us</div>
              <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-[1.1]">
                The Vantage Point Candidate Experience
              </h2>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="show" variants={stagger(0.05, 0.12)} viewport={viewportOnce}
              className="grid md:grid-cols-3 gap-8"
            >
              {benefits.map((b) => (
                <motion.div
                  key={b.title} variants={fadeUp}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="group"
                >
                  <div className="h-11 w-11 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] mb-5 transition-transform group-hover:scale-110 duration-300">
                    <b.icon size={20} />
                  </div>
                  <h4 className="font-semibold text-[#0E2A38] text-lg mb-2">{b.title}</h4>
                  <p className="text-sm text-[#0E2A38]/60 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={viewportOnce} className="text-center mb-10">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Current Openings</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">Featured Roles</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`h-9 px-4 rounded-full text-sm font-medium transition ${activeFilter === f ? "bg-[#0B74B0] text-white shadow-sm" : "bg-white border border-black/10 text-[#0E2A38]/70 hover:bg-black/5"}`}
              >{f}</button>
            ))}
          </div>

          <motion.div
            key={activeFilter}
            initial="hidden" animate="show" variants={stagger(0.04, 0.08)}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {displayed.map((role) => (
              <motion.div key={role.title + role.location} variants={scaleUp}>
                <Link to="/contact"
                  className="group relative bg-white border border-black/5 hover:border-[#0B74B0]/40 hover:shadow-md rounded-2xl p-5 transition block"
                >
                  {role.hot && <span className="absolute top-4 right-4 bg-[#0B74B0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Hot</span>}
                  <div className="h-9 w-9 rounded-lg bg-[#EBF4F9] grid place-items-center text-[#0B74B0] mb-3"><Briefcase size={15} /></div>
                  <h4 className="font-semibold text-[#0E2A38] text-sm group-hover:text-[#0B74B0] transition mb-1">{role.title}</h4>
                  <div className="text-[#0B74B0] text-xs font-semibold mb-3">{role.tag}</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-[#F4F4F7] text-[#0E2A38]/60 text-xs px-2.5 py-1 rounded-full">{role.type}</span>
                    <span className="bg-[#F4F4F7] text-[#0E2A38]/60 text-xs px-2.5 py-1 rounded-full">{role.location}</span>
                    <span className="bg-[#EBF4F9] text-[#0B74B0] text-xs px-2.5 py-1 rounded-full font-semibold">{role.salary}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-medium transition shadow-sm">
              Submit Your Resume <ArrowUpRight size={16} />
            </Link>
            <p className="text-[#0E2A38]/40 text-xs mt-3">Don't see your role? Submit your profile — we'll match you as new roles open.</p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="show" variants={scaleUp} viewport={viewportOnce}
            className="rounded-3xl bg-[#0E2A38] text-white relative overflow-hidden p-8 lg:p-14"
          >
            <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={viewportOnce}>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">The Process</div>
                <h2 className="font-[Manrope] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-[1.1] mb-10 max-w-xl">How We Place You</h2>
              </motion.div>
              <motion.div
                initial="hidden" whileInView="show" variants={stagger(0.1, 0.14)} viewport={viewportOnce}
                className="grid md:grid-cols-4 gap-5"
              >
                {process.map((p) => (
                  <motion.div
                    key={p.n} variants={fadeUp}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] transition"
                  >
                    <div className="text-5xl font-semibold text-white/15 leading-none mb-4">{p.n}</div>
                    <div className="text-lg font-semibold mb-2">{p.title}</div>
                    <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={viewportOnce} className="text-center mb-12">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Success Stories</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">Candidates Love Working With Us</h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="show" variants={stagger(0.08, 0.14)} viewport={viewportOnce}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name} variants={scaleUp}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="rounded-3xl bg-white border border-black/5 shadow-sm p-7"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-[#0B74B0] fill-[#0B74B0]" />)}
                </div>
                <p className="text-[#0E2A38]/70 text-base leading-relaxed mb-6">"{t.quote}"</p>
                <div>
                  <div className="font-semibold text-[#0E2A38] text-sm">{t.name}</div>
                  <div className="text-[#0E2A38]/40 text-xs mt-0.5">{t.title}</div>
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
            initial="hidden" whileInView="show" variants={scaleUp} viewport={viewportOnce}
            className="relative overflow-hidden rounded-3xl bg-[#0E2A38] text-white p-8 lg:p-12 text-center"
          >
            <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-semibold text-3xl sm:text-4xl mb-4">Ready for Your Next Move?</h3>
              <p className="text-white/55 mb-8 text-sm max-w-md mx-auto">Submit your profile today and get matched with exclusive roles. It costs you nothing and changes everything.</p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="inline-flex items-center h-11 px-6 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition">Submit Your Resume</Link>
                <Link to="/contact" className="inline-flex items-center gap-1.5 h-11 px-6 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/5 transition">Talk to a Recruiter <ArrowUpRight size={16} /></Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForCandidates;
