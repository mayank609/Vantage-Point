import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Cloud, Settings, CheckCircle, ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Services: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const mainServices = [
    {
      icon: Users,
      title: "Professional Services",
      tagline: "Enterprise Implementation & Consulting",
      desc: "We provide expert consulting and delivery for major enterprise platforms. Our specialized architects ensure your integrations are seamless, scalable, and aligned with business goals.",
      subs: [
        { name: "Oracle Solutions", desc: "Comprehensive Oracle Cloud integration, ERP optimization, and ongoing support." },
        { name: "Workday HCM", desc: "Unlock the full potential of Workday with our dedicated Human Capital Management consulting." },
        { name: "ServiceNow", desc: "Streamline enterprise workflows, IT service management, and customer service." },
        { name: "Salesforce", desc: "CRM customization, integration, and platform scaling for growing teams." },
        { name: "Enterprise Architecture", desc: "System design, technology roadmaps, and legacy modernization." },
        { name: "Change Management", desc: "User adoption strategies, training, and smooth transition planning." },
      ],
      process: ["Discovery & strategic alignment", "Architecture & platform design", "Phased implementation & testing", "Go-live & user adoption", "Post-deployment optimization"],
    },
    {
      icon: Cloud,
      title: "Tech Solutions",
      tagline: "Modernize your infrastructure, faster",
      desc: "From cloud migration to AI-powered automation, we design and implement technology solutions that reduce costs, increase efficiency, and position your business for scale.",
      subs: [
        { name: "Cloud Migration", desc: "AWS, Azure, GCP, and hybrid cloud planning, migration, and optimization." },
        { name: "AI & Automation", desc: "Workflow automation, machine learning models, and intelligent process optimization." },
        { name: "Data Engineering", desc: "Data pipelines, warehousing, BI dashboards, and advanced analytics." },
        { name: "Digital Transformation", desc: "Legacy modernization, system integration, and digital strategy roadmaps." },
      ],
      process: ["Infrastructure audit & gap analysis", "Technology readiness assessment", "Strategic roadmap & timeline", "Phased execution & deployment", "Continuous improvement cycle"],
    },
    {
      icon: Settings,
      title: "Managed Services",
      tagline: "Your IT operations, fully managed",
      desc: "Offload your enterprise IT operations to our certified team. We manage your infrastructure, keep systems secure, and ensure maximum uptime — all at a predictable cost.",
      subs: [
        { name: "Platform Support", desc: "Ongoing administration for Workday, Oracle, and other key applications." },
        { name: "Cybersecurity", desc: "Threat monitoring, incident response, vulnerability management, compliance." },
        { name: "Network Systems", desc: "WAN/LAN design, monitoring, performance optimization, helpdesk." },
        { name: "Compliance & Governance", desc: "HIPAA, SOC 2, PCI DSS, and NIST framework alignment." },
      ],
      process: ["Environment onboarding & audit", "Monitoring setup & SLA definition", "Proactive management begins", "Monthly reporting & reviews", "Continuous optimization"],
    },
  ];

  const faqs = [
    { q: "What enterprise platforms do you specialize in?", a: "We have deep expertise in implementing and supporting Oracle, Workday HCM, ServiceNow, Salesforce, and major cloud platforms (AWS, Azure, GCP)." },
    { q: "How do you approach a cloud migration project?", a: "We begin with a comprehensive infrastructure audit and readiness assessment, followed by a detailed roadmap to ensure a secure, phased, and zero-downtime migration." },
    { q: "What industries do you specialize in?", a: "We have extensive experience delivering technology solutions for Healthcare, Financial Services (Fintech), Legal, Insurance, and Government sectors." },
    { q: "How is managed services pricing structured?", a: "Managed services are priced on a flat monthly retainer based on the size of your environment and scope of services. No surprise bills." },
    { q: "Do you offer post-implementation support?", a: "Yes. We offer comprehensive Managed Services to ensure your Oracle, Workday, or custom AI solutions continue to operate optimally after deployment." },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#F4F4F7]">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(115deg, #0E2A38 0 1px, transparent 1px 36px)" }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 text-center">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">What We Offer</div>
          <h1 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05]">
            End-to-End Professional &
            <br />
            Technology Services
          </h1>
          <p className="mt-6 text-[#0E2A38]/60 max-w-xl mx-auto text-sm leading-relaxed">
            From implementing Oracle and Workday to managing your cloud infrastructure — one firm, one point of contact, measurable results.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-6 py-2.5 text-sm font-medium transition shadow-sm"
          >
            Book a Free Consultation <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── MAIN SERVICES ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-8">
          {mainServices.map((svc) => (
            <div key={svc.title} className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
                <div>
                  <div className="h-11 w-11 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] mb-5">
                    <svc.icon size={20} />
                  </div>
                  <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-2">{svc.tagline}</div>
                  <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-2xl lg:text-3xl mb-4">{svc.title}</h2>
                  <p className="text-[#0E2A38]/60 text-sm leading-relaxed mb-7">{svc.desc}</p>

                  <div className="text-[#0E2A38] font-semibold text-sm mb-3">How It Works</div>
                  <ol className="space-y-2.5">
                    {svc.process.map((step, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-[#0E2A38]/70">
                        <span className="h-6 w-6 rounded-full bg-[#EBF4F9] text-[#0B74B0] grid place-items-center font-bold text-xs flex-shrink-0">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 content-start">
                  {svc.subs.map((sub) => (
                    <div key={sub.name} className="rounded-2xl bg-[#EBF4F9] p-4">
                      <div className="flex items-start gap-2 mb-1.5">
                        <CheckCircle size={13} className="text-[#0B74B0] flex-shrink-0 mt-0.5" />
                        <span className="font-semibold text-[#0E2A38] text-sm">{sub.name}</span>
                      </div>
                      <p className="text-[#0E2A38]/55 text-xs leading-relaxed pl-5">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center mb-10">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">FAQ</div>
            <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl">Common Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl bg-white border border-black/5 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#0E2A38] text-sm hover:bg-black/[0.02] transition"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  {openFaq === i
                    ? <ChevronUp size={16} className="text-[#0E2A38]/40 flex-shrink-0" />
                    : <ChevronDown size={16} className="text-[#0E2A38]/40 flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-[#0E2A38]/60 leading-relaxed border-t border-black/5 pt-3">
                    {faq.a}
                  </div>
                )}
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
              <h3 className="font-[Manrope] font-semibold text-3xl sm:text-4xl mb-4">Ready to Get Started?</h3>
              <p className="text-white/50 mb-8 text-sm max-w-md mx-auto">Book a free 30-minute consultation — no commitment, no pressure, just a conversation about your needs.</p>
              <Link to="/contact" className="inline-flex items-center h-11 px-6 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition">
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
