import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Trophy, Calendar, Globe, Award, Star, Users } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CeoMessage: React.FC = () => {
  const awards = [
    { title: "Top IT Services 2024", org: "Clutch Enterprise", icon: Trophy, desc: "Recognized as a leading provider of enterprise IT and cloud solutions." },
    { title: "Excellence in AI", org: "TechInnovate Awards", icon: Award, desc: "Awarded for groundbreaking implementations in AI and machine learning." },
    { title: "Best Workplace 2023", org: "CareerHub", icon: Star, desc: "Voted as a top workplace for innovation and professional growth." },
  ];

  const events = [
    { year: "2024", title: "Oracle CloudWorld", location: "Las Vegas, NV", type: "Speaker & Platinum Partner" },
    { year: "2024", title: "Workday Rising", location: "Orlando, FL", type: "Enterprise Integration Showcase" },
    { year: "2023", title: "Gartner IT Symposium", location: "Barcelona, Spain", type: "Digital Transformation Panel" },
    { year: "2023", title: "Global AI Summit", location: "Hyderabad, India", type: "Keynote on Enterprise AI" },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0E2A38] py-28 lg:py-36">
        <div aria-hidden className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 36px)" }} />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-[#0B74B0] text-[10px] font-bold tracking-[0.2em] uppercase mb-6 border border-white/10">
            Leadership Perspective
          </div>
          <h1 className="font-[Manrope] font-bold tracking-tight text-5xl sm:text-6xl lg:text-[72px] leading-[1] mb-8">
            A Word from Our <span className="text-[#0B74B0]">Leadership</span>
          </h1>
          <p className="mt-6 text-white/50 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed font-medium">
            Our commitment to clients, candidates, and the market — shared directly from Vantage Point's leadership team.
          </p>
        </div>
      </section>

      {/* ── MESSAGE ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-14">
            <div className="grid lg:grid-cols-3 gap-12 items-start">

              {/* Author Card */}
              <div className="lg:col-span-1">
                <div className="rounded-2xl bg-[#EBF4F9] p-7 text-center overflow-hidden border border-black/5 shadow-sm">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0B74B0]/20 to-transparent rounded-full blur-xl opacity-50" />
                    <div className="h-24 w-24 rounded-full overflow-hidden mx-auto border-2 border-white shadow-md relative">
                      <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                        alt="Krish Subbiah" 
                        className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                  <div className="font-bold text-[#0E2A38] text-xl">Krish Subbiah</div>
                  <div className="text-[#0B74B0] text-xs font-bold mt-1 mb-4 tracking-wider uppercase">CEO and Partner</div>
                  <p className="text-[#0E2A38]/70 text-sm leading-relaxed font-medium">
                    Leads Vantage Point Consulting's vision and strategic direction as CEO and Partner, driving growth across staffing, cloud, and IT solutions.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#0E2A38] p-6 mt-4 text-white shadow-lg">
                  <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Get in Touch</div>
                  <div className="text-sm text-white/70 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[#0B74B0]">📞</span> 888-230-0250
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#0B74B0]">✉️</span> info@vpc-staffing.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Body */}
              <div className="lg:col-span-2">
                <div className="text-[#0B74B0] text-xs font-bold tracking-[0.2em] uppercase mb-4">Q2 Market Update</div>
                <h2 className="font-[Manrope] text-[#0E2A38] font-bold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] mb-10">
                  Confident in the Strength of the Labor Market
                </h2>

                <div className="space-y-6 text-[#0E2A38] text-lg sm:text-xl font-medium leading-[1.6]">
                  <p className="relative">
                    As we head into Q2, Vantage Point Consulting continues to support our clients and applicants with both hiring and career needs. Although facing market headwinds, we are confident the labor market is still strong and there are many exciting opportunities for both employers and professionals.
                  </p>
                  <p>
                    We have seen continued demand across our core practice areas — <span className="text-[#0B74B0] font-semibold">Information Technology, Finance & Accounting, Legal, and Engineering</span> — as organizations continue to invest in transformative technologies and the human capital required to drive them.
                  </p>
                  <p>
                    At Vantage Point, our approach has always been relationship-first. We invest time in understanding the distinctive requirements of our clients and the career aspirations of our candidates. This commitment to genuine partnership is what differentiates us and drives exceptional outcomes on both sides of every engagement.
                  </p>
                  <p>
                    As we continue to grow — in <span className="font-semibold">Cloud Migration, Managed Services, Legal Staffing, and Executive Search</span> — we remain anchored in our core values: honesty, ethics, and integrity. We reject generic approaches in favor of customized solutions that make a lasting difference.
                  </p>
                  <p className="text-[#0E2A38]/60 italic border-t border-black/5 pt-6">
                    We are grateful for the continued trust of our clients, candidates, and partners. We look forward to helping you navigate this market and seize the opportunities ahead.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-black/5 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden border border-[#0B74B0]/20">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0E2A38] text-lg">Krish Subbiah</div>
                    <div className="text-[#0B74B0] text-sm font-semibold">CEO and Partner, Vantage Point Consulting</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS GALLERY ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-[#0B74B0] text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Journey</div>
            <h2 className="font-[Manrope] text-[#0E2A38] font-bold tracking-tighter text-4xl sm:text-5xl lg:text-6xl">Moments of Excellence</h2>
            <p className="mt-6 text-[#0E2A38]/60 max-w-3xl mx-auto text-xl font-medium">
              A glimpse into our milestones, global presence, and the recognition that drives us forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8 auto-rows-[250px]">
            {/* Tile 1: Large Keynote */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[32px] bg-[#0E2A38] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1475721027187-4024733924f3?q=80&w=2070&auto=format&fit=crop" 
                alt="Keynote" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E2A38] via-[#0E2A38]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#0B74B0] text-white text-[10px] font-bold uppercase tracking-widest">Event</span>
                  <span className="text-white/80 text-sm font-bold">2024</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">Global AI Summit Keynote</h3>
                <p className="text-white/80 text-base font-medium leading-relaxed max-w-sm">
                  Sharing our vision on Enterprise AI integration with industry leaders in Hyderabad, India.
                </p>
              </div>
            </div>

            {/* Tile 2: Award Trophy */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-[32px] bg-[#75479C] shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2076&auto=format&fit=crop" 
                alt="Award" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#75479C] to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-5 shadow-inner">
                  <Trophy size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Top IT Services 2024</h3>
                <div className="text-white/90 text-xs font-bold uppercase tracking-[0.2em] mt-1">Clutch Enterprise</div>
              </div>
            </div>

            {/* Tile 3: Conference */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[32px] bg-[#0B74B0] shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" 
                alt="Conference" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B74B0] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <div className="text-white/90 text-xs font-bold uppercase tracking-[0.3em] mb-3">Oracle CloudWorld</div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Platinum Partner Excellence</h3>
                <p className="text-white/90 text-lg font-medium leading-relaxed">Recognized for our deep expertise in complex cloud migrations.</p>
              </div>
            </div>

            {/* Tile 4: Small Stat */}
            <div className="md:col-span-2 md:row-span-1 bg-[#EBF4F9] rounded-[32px] p-10 flex flex-col justify-center border border-[#0B74B0]/10 shadow-sm">
              <div className="text-6xl font-bold text-[#0B74B0] mb-2 tracking-tighter">50+</div>
              <div className="text-[#0E2A38]/50 text-sm font-bold uppercase tracking-widest">Speaking Engagements Globally</div>
            </div>

            {/* Tile 5: Panel Discussion */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-[32px] bg-slate-900 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop" 
                alt="Panel" 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-y-0 left-0 w-2 bg-[#75479C]" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white tracking-tight">Gartner Symposium</h3>
                <p className="text-white/80 text-sm font-bold mt-1">Digital Transformation Panel, Barcelona</p>
              </div>
            </div>

            {/* Tile 6: Team/Workplace */}
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-[32px] bg-emerald-900 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 p-8 flex items-center gap-6">
                <div className="h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0 border border-white/10">
                  <Star size={32} className="fill-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Best Workplace</h3>
                  <p className="text-white/80 text-sm font-bold">Voted Top Workplace 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#F4F4F7] pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="relative overflow-hidden rounded-[40px] bg-[#0E2A38] text-white p-12 lg:p-20 text-center shadow-2xl">
            <div aria-hidden className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(115deg, #ffffff 0 1px, transparent 1px 36px)" }} />
            <div className="relative">
              <h3 className="font-[Manrope] font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 tracking-tight">Ready to Work Together?</h3>
              <p className="text-white/60 mb-10 text-lg sm:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                Whether you're hiring, seeking a new role, or exploring IT solutions — our team is here to help you navigate the future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center h-14 px-10 rounded-2xl bg-[#0B74B0] hover:bg-[#096396] text-white text-base font-bold transition-all duration-300 shadow-lg hover:shadow-[#0B74B0]/40 hover:-translate-y-0.5">
                  Let's Talk
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 h-14 px-10 rounded-2xl border-2 border-white/20 text-white text-base font-bold hover:bg-white/5 transition-all duration-300">
                  About Us <ArrowUpRight size={20} />
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

export default CeoMessage;
