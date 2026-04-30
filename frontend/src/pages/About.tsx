import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About: React.FC = () => {
  const team = [
    { initials: "KS", name: "Krish Subbiah", title: "CEO and Partner", bio: "Leads Vantage Point Consulting's vision and strategic direction as CEO and Partner, driving growth across professional services, cloud, and enterprise IT solutions." },
    { initials: "LM", name: "Lalit Mohan", title: "Head of Talent & Delivery", bio: "Oversees the delivery division, ensuring clients receive top-tier technical expertise across all practice areas, including Oracle and Workday implementations." },
    { initials: "AE", name: "Adam Elkind", title: "CEO", bio: "Executive leadership focused on driving client outcomes and expanding Vantage Point's enterprise services reach across the United States." },
    { initials: "RW", name: "Rachael Well", title: "Vice President, Sales & Account Management", bio: "Brings 15+ years in enterprise human capital management with a focus on strategic partnerships, AI integrations, and revenue growth." },
  ];

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
        <div aria-hidden className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 36px)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-6 border border-white/10">
            Corporate Profile
          </div>
          <h1 className="font-[Manrope] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] mb-6">
            Your Vantage <span className="text-[#0B74B0]">Point</span>.
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed text-sm">
            Be it an integration, migration, or professional services project, let us show you why working with us will be to your <span className="text-[#0B74B0] underline decoration-4 underline-offset-8">adVantage</span>.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl bg-white border border-black/10 shadow-sm p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Who We Are</div>
                <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1] mb-6">
                  Strategic Consulting & <span className="text-[#0B74B0]">Solutions</span>
                </h2>
                <div className="space-y-5 text-[#0E2A38]/70 text-sm leading-relaxed">
                  <p>
                    Vantage Point Consulting (a GoHire Tech Company) is a leading strategic consulting and professional services company that provides enterprise IT solutions for clients as they seek to transform and execute strategies that drive exceptional outcomes.
                  </p>
                  <p>
                    We are recognized as a top player in global Professional Services, Oracle & Workday Implementations, Cloud Migration, and AI Integrations. Our consultants and architects work to match our clients' technology needs.
                  </p>
                </div>
                <ul className="mt-8 space-y-3">
                  {[
                    "Professional services, enterprise integrations, and cloud migration under one roof",
                    "Serving organizations across the United States",
                    "Deep expertise across Fintech, Healthcare, Legal, Insurance & more",
                    "Strategic, customizable and efficient approach",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-[#0E2A38]/70">
                      <CheckCircle size={15} className="text-[#0B74B0] flex-shrink-0 mt-0.5" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-[#EBF4F9] p-6 border border-[#0B74B0]/5">
                  <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Approach</div>
                  <p className="text-[#0E2A38]/70 text-sm leading-relaxed">
                    We listen to the strategic goals of our clients, so we can implement solutions efficiently and in a timely manner. Our approach emphasizes understanding business objectives, assessing technical requirements, and deploying enterprise platforms based on strong partnerships.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#EBF4F9] p-6 border border-[#0B74B0]/5">
                  <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Our Commitment</div>
                  <p className="text-[#0E2A38]/70 text-sm leading-relaxed">
                    With years of experience managing complex IT projects within Fintech, Healthcare, Legal, Insurance, and Media — we have the knowledge and the commitment to make sure we give you the "ad"Vantage you're looking for in your industry.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#0E2A38] p-6 text-white shadow-sm">
                  <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact Us</div>
                  <div className="text-sm font-medium space-y-2.5">
                    <div className="flex items-center gap-3">
                      <span className="text-[#0B74B0]">📞</span> 888-230-0250
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#0B74B0]">✉️</span> info@vpc-staffing.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Our Team</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              The People Behind Vantage Point
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="rounded-3xl bg-white border border-black/10 shadow-sm p-6 text-center">
                <div className="h-20 w-20 rounded-2xl bg-[#0E2A38] text-[#0B74B0] grid place-items-center text-2xl font-semibold mx-auto mb-6 shadow-inner">
                  {member.initials}
                </div>
                <div className="font-semibold text-[#0E2A38] text-lg mb-1.5">{member.name}</div>
                <div className="text-[#0B74B0] text-xs font-semibold mb-4 tracking-wide uppercase">{member.title}</div>
                <p className="text-[#0E2A38]/65 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl bg-white border border-black/10 shadow-sm p-8 lg:p-12">
            <div className="text-center mb-16">
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Industries</div>
              <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
                We've Helped Innovative <span className="text-[#0B74B0]">Companies</span>
              </h2>
              <p className="mt-4 text-[#0E2A38]/70 max-w-3xl mx-auto text-sm leading-relaxed">
                We provide our clients with services throughout the United States across a wide range of industries.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((ind) => (
                <div key={ind} className="bg-[#EBF4F9] rounded-xl px-5 py-2.5 text-sm font-medium text-[#0E2A38] border border-[#0B74B0]/10 shadow-sm cursor-default">
                  {ind}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENDORSEMENTS ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">Endorsements</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-3xl bg-[#EBF4F9] p-8 border border-[#0B74B0]/10 shadow-sm">
              <p className="text-[#0E2A38]/70 text-sm leading-relaxed mb-6 italic">
                "Outstanding work in providing AI, Workday, and ServiceNow solutions. The team's expertise and professionalism exceeded our expectations."
              </p>
              <div className="pt-6 border-t border-black/5">
                <div className="font-semibold text-[#0E2A38] text-base">Sr. Director</div>
                <div className="text-[#0B74B0] text-xs font-semibold mt-1 uppercase tracking-wide">Healthcare Insurance Company</div>
              </div>
            </div>
            <div className="rounded-3xl bg-[#EBF4F9] p-8 border border-[#0B74B0]/10 shadow-sm">
              <p className="text-[#0E2A38]/70 text-sm leading-relaxed mb-6 italic">
                "Anthony and his team consistently deliver exceptional enterprise solutions with a sense of urgency. Highly recommended for any complex integration."
              </p>
              <div className="pt-6 border-t border-black/5">
                <div className="font-semibold text-[#0E2A38] text-base">Partner</div>
                <div className="text-[#0B74B0] text-xs font-semibold mt-1 uppercase tracking-wide">Boston Consulting Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#0E2A38] text-white p-8 lg:p-12 text-center shadow-sm">
            <div aria-hidden className="absolute inset-0 opacity-[0.1] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 36px)" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-semibold tracking-tight text-3xl sm:text-4xl mb-4 leading-[1.1]">
                Ready to find your <span className="text-[#0B74B0]">adVantage</span>?
              </h3>
              <p className="text-white/70 mb-8 text-sm max-w-2xl mx-auto leading-relaxed">
                Our team is ready to help you find the right technology solutions to drive exceptional outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="inline-flex items-center h-11 px-6 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition">
                  Let's Talk
                </Link>
                <Link to="/services" className="inline-flex items-center gap-1.5 h-11 px-6 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition">
                  Our Services <ArrowUpRight size={14} />
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

export default About;
