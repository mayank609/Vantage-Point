import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  const serviceLinks = [
    { label: "Professional Services", to: "/services" },
    { label: "Oracle Solutions", to: "/services" },
    { label: "Workday HCM", to: "/services" },
    { label: "AI Integration", to: "/services" },
  ];

  const links = [
    { label: "About Us", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Message from CEO", to: "/ceo-message" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F4F4F7]/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Vantage Point Logo" className="h-12 w-auto sm:h-16" />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-base text-[#0E2A38] font-bold">
          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className={`flex items-center gap-1 hover:text-[#0B74B0] transition-colors ${serviceLinks.some(l => l.to === pathname) ? "text-[#0B74B0]" : ""}`}>
              Services <ChevronDown size={14} strokeWidth={3} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-2 w-56">
                <div className="bg-white rounded-xl border border-black/10 shadow-xl py-2 overflow-hidden">
                  {serviceLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block px-4 py-2.5 text-sm text-[#0E2A38] font-bold hover:bg-[#EBF4F9] hover:text-[#0B74B0] transition-colors"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#0B74B0] transition-colors ${pathname === l.to ? "text-[#0B74B0]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex h-10 items-center rounded-full px-5 text-sm text-[#0E2A38] font-bold hover:bg-black/5 transition"
          >
            Get in Touch
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-10 items-center rounded-full px-6 bg-[#0B74B0] text-white text-sm font-bold hover:bg-[#096396] transition shadow-md"
          >
            Let's Talk
          </Link>
          <button className="md:hidden p-1.5 text-[#0E2A38]" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={24} strokeWidth={2.5} /> : <Menu size={24} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#F4F4F7] border-t border-black/10 px-6 py-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="text-[10px] font-black text-[#0B74B0] uppercase tracking-[0.2em] mb-4">Services</div>
          {serviceLinks.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-2.5 text-lg text-[#0E2A38] font-bold pl-3 border-l-2 border-transparent hover:border-[#0B74B0] hover:text-[#0B74B0]">
              {l.label}
            </Link>
          ))}
          <div className="border-t border-black/10 pt-4 mt-4">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block py-3 text-lg text-[#0E2A38] font-bold hover:text-[#0B74B0]">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="pt-6">
            <Link to="/contact" onClick={() => setOpen(false)} className="block w-full text-center h-12 leading-[48px] rounded-2xl bg-[#0B74B0] text-white text-lg font-bold shadow-lg shadow-[#0B74B0]/20">
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
