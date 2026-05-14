import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fadeUp, fadeIn, scaleUp, stagger, slideLeft, slideRight, viewportOnce } from "../lib/motion";
import { useParallax } from "../hooks/useParallax";

const About: React.FC = () => {
  const imgParallax = useParallax(0.15);

  const [team, setTeam] = useState<{ initials: string; name: string; title: string; bio: string }[]>([]);

  useEffect(() => {
    fetch("/api/team")
      .then((r) => r.json())
      .then((data: { initials: string; name: string; title: string; bio: string; active: boolean }[]) =>
        setTeam(data.filter((m) => m.active))
      )
      .catch(() => setTeam([]));
  }, []);

  const industries = [
    "Financial Services", "Healthcare", "Life Sciences", "Insurance",
    "Government", "Manufacturing", "Technology", "Telecommunications",
    "Fintech", "Legal", "Media",
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0E2A38] py-20 lg:py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <motion.img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2070&q=80"
          alt="professional business team in modern office"
          aria-hidden
          style={{ y: imgParallax }}
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-luminosity pointer-events-none select-none"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E2A38] via-[#0E2A38]/60 to-transparent pointer-events-none" />
        <motion.div
          initial="hidden" animate="show" variants={stagger(0.08, 0.14)}
          className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center text-white"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-6 border border-white/10">
            Corporate Profile
          </motion.div>
          <motion.h1 variants={fadeUp} className="font-[Manrope] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-[1.05] mb-6">
            Your Vantage <span className="text-[#0B74B0]">Point</span>.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed text-sm">
            Be it an integration, migration, or professional services project, let us show you why working with us will be to your <span className="text-[#0B74B0] underline decoration-4 underline-offset-8">adVantage</span>.
          </motion.p>
        </motion.div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="show" variants={scaleUp} viewport={viewportOnce}
            className="rounded-3xl bg-white border border-black/10 shadow-sm p-8 lg:p-14"
          >
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <motion.div initial="hidden" whileInView="show" variants={slideRight} viewport={viewportOnce}>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Who We Are</div>
                <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-[1.1] mb-6">
                  Strategic Consulting & <span className="text-[#0B74B0]">Solutions</span>
                </h2>
                <div className="space-y-5 text-[#0E2A38]/70 text-base leading-relaxed">
                  <p>Vantage Point Consulting (a GoHire Tech Company) is a leading strategic consulting and professional services company that provides enterprise IT solutions for clients as they seek to transform and execute strategies that drive exceptional outcomes.</p>
                  <p>We are recognized as a top player in global Professional Services, Oracle & Workday Implementations, Cloud Migration, and AI Integrations. Our consultants and architects work to match our clients' technology needs.</p>
                </div>
                <motion.ul
                  initial="hidden" whileInView="show" variants={stagger(0.1, 0.1)} viewport={viewportOnce}
                  className="mt-8 space-y-3"
                >
                  {[
                    "Professional services, enterprise integrations, and cloud migration under one roof",
                    "Serving organizations across the United States",
                    "Deep expertise across Fintech, Healthcare, Legal, Insurance & more",
                    "Strategic, customizable and efficient approach",
                  ].map((item) => (
                    <motion.li key={item} variants={fadeUp} className="flex items-start gap-2.5 text-sm text-[#0E2A38]/70">
                      <CheckCircle size={15} className="text-[#0B74B0] flex-shrink-0 mt-0.5" /> {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div initial="hidden" whileInView="show" variants={stagger(0.15, 0.15)} viewport={viewportOnce} className="space-y-6">
                {[
                  { label: "Our Approach", text: "We listen to the strategic goals of our clients, so we can implement solutions efficiently and in a timely manner. Our approach emphasizes understanding business objectives, assessing technical requirements, and deploying enterprise platforms based on strong partnerships." },
                  { label: "Our Commitment", text: "With years of experience managing complex IT projects within Fintech, Healthcare, Legal, Insurance, and Media — we have the knowledge and the commitment to make sure we give you the \"ad\"Vantage you're looking for in your industry." },
                ].map((card) => (
                  <motion.div key={card.label} variants={slideLeft} className="rounded-2xl bg-[#EBF4F9] p-6 border border-[#0B74B0]/5">
                    <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">{card.label}</div>
                    <p className="text-[#0E2A38]/70 text-base leading-relaxed">{card.text}</p>
                  </motion.div>
                ))}
                <motion.div variants={slideLeft} className="rounded-2xl bg-[#0E2A38] p-6 text-white shadow-sm">
                  <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact Us</div>
                  <div className="text-sm font-medium space-y-2.5">
                    <div className="flex items-center gap-3"><span className="text-[#0B74B0]">📞</span> 888-230-0250</div>
                    <div className="flex items-center gap-3"><span className="text-[#0B74B0]">✉️</span> info@vpc-staffing.com</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={viewportOnce} className="text-center mb-20">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Our Team</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">
              The People Behind Vantage Point
            </h2>
          </motion.div>
          <motion.div
            initial="hidden" whileInView="show" variants={stagger(0.05, 0.13)} viewport={viewportOnce}
            className={`grid gap-8 mx-auto ${team.length <= 2 ? "sm:grid-cols-2 max-w-2xl" : team.length === 3 ? "sm:grid-cols-3 max-w-3xl" : "sm:grid-cols-2 lg:grid-cols-4"}`}
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3, ease: "easeOut" } }}
                className="rounded-3xl bg-white border border-black/10 shadow-sm p-6 text-center"
              >
                <div className="h-20 w-20 rounded-2xl bg-[#0E2A38] text-[#0B74B0] grid place-items-center text-2xl font-semibold mx-auto mb-6 shadow-inner">
                  {member.initials}
                </div>
                <div className="font-semibold text-[#0E2A38] text-lg mb-1.5">{member.name}</div>
                <div className="text-[#0B74B0] text-xs font-semibold mb-4 tracking-wide uppercase">{member.title}</div>
                <p className="text-[#0E2A38]/65 text-base leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="show" variants={scaleUp} viewport={viewportOnce}
            className="rounded-3xl bg-white border border-black/10 shadow-sm p-8 lg:p-12"
          >
            <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={viewportOnce} className="text-center mb-16">
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Industries</div>
              <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">
                We've Helped Innovative <span className="text-[#0B74B0]">Companies</span>
              </h2>
              <p className="mt-4 text-[#0E2A38]/70 max-w-3xl mx-auto text-base leading-relaxed">
                We provide our clients with services throughout the United States across a wide range of industries.
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="show" variants={stagger(0.03, 0.06)} viewport={viewportOnce}
              className="flex flex-wrap justify-center gap-4"
            >
              {industries.map((ind) => (
                <motion.div
                  key={ind} variants={fadeIn}
                  whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
                  className="bg-[#EBF4F9] rounded-xl px-5 py-2.5 text-sm font-medium text-[#0E2A38] border border-[#0B74B0]/10 shadow-sm cursor-default"
                >
                  {ind}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── ENDORSEMENTS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div initial="hidden" whileInView="show" variants={fadeUp} viewport={viewportOnce} className="text-center mb-20">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Endorsements</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-2xl sm:text-3xl lg:text-4xl">
              Trusted by Industry Leaders
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { quote: "Outstanding work in providing AI, Workday, and ServiceNow solutions. The team's expertise and professionalism exceeded our expectations.", name: "Sr. Director", company: "Healthcare Insurance Company" },
              { quote: "Anthony and his team consistently deliver exceptional enterprise solutions with a sense of urgency. Highly recommended for any complex integration.", name: "Partner", company: "Boston Consulting Group" },
            ].map((e, i) => (
              <motion.div
                key={e.name}
                initial="hidden" whileInView="show"
                variants={i === 0 ? slideRight : slideLeft}
                viewport={viewportOnce}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="rounded-3xl bg-[#EBF4F9] p-8 border border-[#0B74B0]/10 shadow-sm"
              >
                <p className="text-[#0E2A38]/70 text-base leading-relaxed mb-6 italic">"{e.quote}"</p>
                <div className="pt-6 border-t border-black/5">
                  <div className="font-semibold text-[#0E2A38] text-base">{e.name}</div>
                  <div className="text-[#0B74B0] text-xs font-semibold mt-1 uppercase tracking-wide">{e.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="show" variants={scaleUp} viewport={viewportOnce}
            className="relative overflow-hidden rounded-3xl bg-[#0E2A38] text-white p-8 lg:p-12 text-center shadow-sm"
          >
            <div aria-hidden className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-semibold tracking-tight text-3xl sm:text-4xl mb-4 leading-[1.1]">
                Ready to find your <span className="text-[#0B74B0]">adVantage</span>?
              </h3>
              <p className="text-white/70 mb-8 text-sm max-w-2xl mx-auto leading-relaxed">
                Our team is ready to help you find the right technology solutions to drive exceptional outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="inline-flex items-center h-11 px-6 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition">Let's Talk</Link>
                <Link to="/services" className="inline-flex items-center gap-1.5 h-11 px-6 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition">Our Services <ArrowUpRight size={14} /></Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
