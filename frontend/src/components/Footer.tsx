import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F4F7] border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Vantage Point Logo" className="h-10 w-auto sm:h-12" />
          </Link>
          <p className="mt-6 text-base text-[#0E2A38] font-bold leading-relaxed max-w-sm">
            A GoHire Tech Company. Leading strategic consulting and solutions company providing professional services, enterprise integrations, and cloud migration.
          </p>
          <div className="mt-6 space-y-3.5 text-base text-[#0E2A38] font-bold">
            <a href="tel:8882300250" className="flex items-center gap-2 hover:text-[#0B74B0] transition">
              <Phone size={14} strokeWidth={2.5} className="text-[#0B74B0]" /> 888-230-0250
            </a>
            <a href="mailto:info@vpc-staffing.com" className="flex items-center gap-2 hover:text-[#0B74B0] transition">
              <Mail size={14} strokeWidth={2.5} className="text-[#0B74B0]" /> info@vpc-staffing.com
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={14} strokeWidth={2.5} className="text-[#0B74B0] mt-1 flex-shrink-0" />
              <span>5865 North Point Pkwy, Suite 250, Alpharetta, GA 30022</span>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4">
            {[
              { Icon: Linkedin, label: "linkedin", href: "https://www.linkedin.com/company/vantage-point-inc-/" },
              { Icon: Youtube, label: "youtube", href: "https://www.youtube.com/channel/UCBGykOAFsBAb2uGda_MfGhw" },
              { Icon: Twitter, label: "twitter", href: "https://x.com/vpc_staffing" }
            ].map(({ Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-11 w-11 grid place-items-center rounded-2xl bg-white border-2 border-black/5 text-[#0E2A38] hover:bg-[#0E2A38] hover:text-white transition shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <Icon size={18} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-black text-[#0B74B0] text-xs uppercase tracking-[0.2em] mb-6">Services</div>
          <ul className="space-y-3 text-base text-[#0E2A38] font-bold">
            {[
              { label: "Professional Services", to: "/services" },
              { label: "Oracle Solutions", to: "/services" },
              { label: "Workday HCM", to: "/services" },
              { label: "AI Integration", to: "/services" },
            ].map((it) => (
              <li key={it.label}><Link to={it.to} className="hover:text-[#0B74B0] transition">{it.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-black text-[#0B74B0] text-xs uppercase tracking-[0.2em] mb-6">Company</div>
          <ul className="space-y-3 text-base text-[#0E2A38] font-bold">
            {[
              { label: "About Us", to: "/about" },
              { label: "Careers", to: "/careers" },
              { label: "Message from CEO", to: "/ceo-message" },
              { label: "Get in Touch", to: "/contact" },
            ].map((it) => (
              <li key={it.label}><Link to={it.to} className="hover:text-[#0B74B0] transition">{it.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-black text-[#0B74B0] text-xs uppercase tracking-[0.2em] mb-6">Industries</div>
          <ul className="space-y-3 text-base text-[#0E2A38] font-bold">
            {["Fintech", "Healthcare", "Legal", "Insurance", "Government", "Media"].map((it) => (
              <li key={it}><span className="hover:text-[#0B74B0] transition cursor-default">{it}</span></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-8 text-center text-sm text-[#0E2A38] font-bold opacity-60">
          © {new Date().getFullYear()} Vantage Point Consulting. A GoHire Tech Company. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
