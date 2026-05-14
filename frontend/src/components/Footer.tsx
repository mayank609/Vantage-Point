import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Youtube, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E2A38] text-white relative overflow-hidden">
      {/* Gradient accent line at top */}
      <div className="h-[3px] bg-gradient-to-r from-[#0B74B0] via-[#75479C] to-[#0B74B0]" />

      {/* Ambient orbs */}
      <div aria-hidden className="absolute top-0 left-0 w-96 h-96 bg-[#0B74B0]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div aria-hidden className="absolute bottom-0 right-0 w-72 h-72 bg-[#75479C]/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3" />
      {/* Subtle grid */}
      <div aria-hidden className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-5">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <img src="/logo.png" alt="Vantage Point Logo" className="h-10 w-auto sm:h-12 brightness-0 invert" />
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-7">
            VPC is an An Orpine Company. Leading strategic consulting and solutions company providing professional services, enterprise integrations, and cloud migration.
          </p>
          <div className="space-y-3 text-sm text-white/60">
            <a href="tel:8882300250" className="flex items-center gap-2.5 hover:text-[#0B74B0] transition-colors group">
              <Phone size={13} strokeWidth={2.5} className="text-[#0B74B0] shrink-0" /> 888-230-0250
            </a>
            <a href="mailto:info@vpc-staffing.com" className="flex items-center gap-2.5 hover:text-[#0B74B0] transition-colors">
              <Mail size={13} strokeWidth={2.5} className="text-[#0B74B0] shrink-0" /> info@vpc-staffing.com
            </a>
            <div className="flex items-start gap-2.5">
              <MapPin size={13} strokeWidth={2.5} className="text-[#0B74B0] mt-0.5 shrink-0" />
              <span>5865 North Point Pkwy, Suite 250,<br />Alpharetta, GA 30022</span>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/vantage-point-inc-/" },
              { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCBGykOAFsBAb2uGda_MfGhw" },
              { Icon: Twitter, label: "Twitter / X", href: "https://x.com/vpc_staffing" },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-10 w-10 grid place-items-center rounded-xl bg-white/[0.07] border border-white/[0.10] text-white/60 hover:bg-[#0B74B0] hover:text-white hover:border-[#0B74B0] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Icon size={16} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="lg:col-span-1">
          <div className="font-bold text-[#0B74B0] text-[10px] uppercase tracking-[0.25em] mb-6">Solutions</div>
          <ul className="space-y-3 text-sm text-white/55">
            {[
              { label: "For Companies", to: "/companies" },
              { label: "For Candidates", to: "/candidates" },
              { label: "Legal Staffing", to: "/legal-staffing" },
              { label: "Cloud Migration", to: "/cloud-migration" },
              { label: "Managed Services", to: "/managed-services" },
              { label: "Professional Services", to: "/services" },
              { label: "Oracle Solutions", to: "/services" },
              { label: "Workday HCM", to: "/services" },
              { label: "AI Integration", to: "/services" },
            ].map((it) => (
              <li key={it.label}>
                <Link to={it.to} className="hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#0B74B0] transition-all duration-300 inline-block" />
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company & Industries */}
        <div className="lg:col-span-1 space-y-12">
          <div>
            <div className="font-bold text-[#0B74B0] text-[10px] uppercase tracking-[0.25em] mb-6">Company</div>
            <ul className="space-y-3 text-sm text-white/55">
              {[
                { label: "About Us", to: "/about" },
                { label: "Careers", to: "/careers" },
                { label: "Message from CEO", to: "/ceo-message" },
                { label: "Get in Touch", to: "/contact" },
              ].map((it) => (
                <li key={it.label}>
                  <Link to={it.to} className="hover:text-white transition-colors duration-200 flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#0B74B0] transition-all duration-300 inline-block" />
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold text-[#0B74B0] text-[10px] uppercase tracking-[0.25em] mb-6">Industries</div>
            <ul className="space-y-3 text-sm text-white/55">
              {["Fintech", "Healthcare", "Legal", "Insurance", "Government", "Media"].map((it) => (
                <li key={it}>
                  <span className="hover:text-white transition-colors duration-200 cursor-default flex items-center gap-1.5 group">
                    <span className="w-0 group-hover:w-3 h-[1px] bg-[#75479C] transition-all duration-300 inline-block" />
                    {it}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact/CTA Column (Optional or keep simple) */}
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.07]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Vantage Point Consulting. VPC is an An Orpine Company. All Rights Reserved.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-[#0B74B0] text-xs font-semibold hover:text-white transition-colors"
          >
            Let's work together <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
