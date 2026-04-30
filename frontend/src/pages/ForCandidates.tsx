import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle, Briefcase, DollarSign, Clock, Star, Search, FileText, TrendingUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <section className="relative overflow-hidden bg-[#F4F4F7]">
        <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #0E2A38 0 1px, transparent 1px 36px)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 text-center">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">For Tech, Finance, Legal & Executive Professionals</div>
          <h1 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05]">
            Your Next Great Role
            <br />
            Is One Conversation Away.
          </h1>
          <p className="mt-6 text-[#0E2A38]/60 max-w-xl mx-auto text-sm leading-relaxed">
            Access exclusive high-paying roles at top US companies. Our dedicated recruiters match your skills with opportunities that actually move your career forward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a href="#open-roles" className="inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-medium transition shadow-sm">
              Browse Open Roles <ArrowUpRight size={16} />
            </a>
            <Link to="/contact" className="inline-flex items-center rounded-full border border-black/15 text-[#0E2A38] hover:bg-black/5 px-6 py-2.5 text-sm font-medium transition">
              Talk to a Recruiter
            </Link>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-14">
            <div className="text-center mb-12">
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Why Work With Us</div>
              <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1]">
                The Vantage Point Candidate Experience
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b) => (
                <div key={b.title} className="group">
                  <div className="h-11 w-11 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] mb-5 transition-transform group-hover:-translate-y-1">
                    <b.icon size={20} />
                  </div>
                  <h4 className="font-semibold text-[#0E2A38] text-lg mb-2">{b.title}</h4>
                  <p className="text-sm text-[#0E2A38]/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Current Openings</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">Featured Roles</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`h-9 px-4 rounded-full text-sm font-medium transition ${
                  activeFilter === f
                    ? "bg-[#0B74B0] text-white shadow-sm"
                    : "bg-white border border-black/10 text-[#0E2A38]/70 hover:bg-black/5"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayed.map((role) => (
              <Link
                key={role.title + role.location}
                to="/contact"
                className="group relative bg-white border border-black/5 hover:border-[#0B74B0]/40 hover:shadow-md rounded-2xl p-5 transition"
              >
                {role.hot && (
                  <span className="absolute top-4 right-4 bg-[#0B74B0] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    Hot
                  </span>
                )}
                <div className="h-9 w-9 rounded-lg bg-[#EBF4F9] grid place-items-center text-[#0B74B0] mb-3">
                  <Briefcase size={15} />
                </div>
                <h4 className="font-semibold text-[#0E2A38] text-sm group-hover:text-[#0B74B0] transition mb-1">{role.title}</h4>
                <div className="text-[#0B74B0] text-xs font-semibold mb-3">{role.tag}</div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="bg-[#F4F4F7] text-[#0E2A38]/60 text-xs px-2.5 py-1 rounded-full">{role.type}</span>
                  <span className="bg-[#F4F4F7] text-[#0E2A38]/60 text-xs px-2.5 py-1 rounded-full">{role.location}</span>
                  <span className="bg-[#EBF4F9] text-[#0B74B0] text-xs px-2.5 py-1 rounded-full font-semibold">{role.salary}</span>
                </div>
              </Link>
            ))}
          </div>

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
          <div className="rounded-3xl bg-[#0E2A38] text-white relative overflow-hidden p-8 lg:p-14">
            <div aria-hidden className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 36px)" }} />
            <div className="relative">
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">The Process</div>
              <h2 className="font-[Manrope] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-10 max-w-xl">How We Place You</h2>
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

      {/* ── TESTIMONIALS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-12">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Success Stories</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Candidates Love Working With Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-3xl bg-white border border-black/5 shadow-sm p-7">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-[#0B74B0] fill-[#0B74B0]" />)}
                </div>
                <p className="text-[#0E2A38]/70 text-sm leading-relaxed mb-6">"{t.quote}"</p>
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
          <div className="relative overflow-hidden rounded-3xl bg-[#0E2A38] text-white p-8 lg:p-12 text-center">
            <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 36px)" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-semibold text-3xl sm:text-4xl mb-4">Ready for Your Next Move?</h3>
              <p className="text-white/55 mb-8 text-sm max-w-md mx-auto">
                Submit your profile today and get matched with exclusive roles. It costs you nothing and changes everything.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="inline-flex items-center h-11 px-6 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition">
                  Submit Your Resume
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-1.5 h-11 px-6 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/5 transition">
                  Talk to a Recruiter <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForCandidates;
