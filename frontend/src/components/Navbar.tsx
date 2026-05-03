import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLenis } from "lenis/react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const rawProgress = useMotionValue(0);
  const scaleX = useSpring(rawProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useLenis(({ scroll, limit }) => {
    rawProgress.set(limit > 0 ? scroll / limit : 0);
    setScrolled(scroll > 24);
  });

  const solutionLinks = [
    { label: "For Companies", to: "/companies" },
    { label: "For Candidates", to: "/candidates" },
    { label: "Legal Staffing", to: "/legal-staffing" },
    { label: "Cloud Migration", to: "/cloud-migration" },
    { label: "Managed Services", to: "/managed-services" },
    { label: "Finpay Solutions", to: "/finpay" },
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
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/55 backdrop-blur-xl supports-[backdrop-filter]:bg-white/45 border-b border-white/40 shadow-[0_10px_30px_-16px_rgba(14,42,56,0.45)]"
          : "bg-white/30 backdrop-blur-xl supports-[backdrop-filter]:bg-white/20 border-b border-white/35 shadow-[0_8px_26px_-18px_rgba(14,42,56,0.35)]"
      }`}
    >
      {/* Reading progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0B74B0] to-[#75479C] origin-left"
        style={{ scaleX }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Vantage Point Logo" className="h-12 w-auto sm:h-16" />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm text-[#0E2A38] font-bold">
          {/* Solutions dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              className={`flex items-center gap-1 hover:text-[#0B74B0] transition-colors duration-200 ${
                solutionLinks.some((l) => l.to === pathname) ? "text-[#0B74B0]" : ""
              }`}
            >
              Solutions{" "}
              <ChevronDown
                size={14}
                strokeWidth={2.5}
                className={`transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
              />
            </button>

            <motion.div
              initial={false}
              animate={solutionsOpen ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: -6, pointerEvents: "none" }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute top-full left-0 pt-3 w-64"
            >
              <div className="bg-white rounded-2xl border border-black/[0.08] shadow-xl py-2 overflow-hidden">
                {solutionLinks.map((l, i) => (
                  <Link
                    key={l.label}
                    to={l.to}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#0E2A38] font-bold hover:bg-[#EBF4F9] hover:text-[#0B74B0] transition-colors"
                  >
                    <span className="text-[#0B74B0]/40 text-[10px] font-black tabular-nums">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </span>
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>

          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`hover:text-[#0B74B0] transition-colors duration-200 ${pathname === l.to ? "text-[#0B74B0]" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>


        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="btn-shine inline-flex h-9 items-center rounded-full px-6 bg-[#0B74B0] text-white text-sm font-bold hover:bg-[#096396] transition shadow-md shadow-[#0B74B0]/20"
          >
            Let's Talk
          </Link>
          <button
            className="md:hidden p-1.5 text-[#0E2A38]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-t border-black/[0.08] px-6 py-6 space-y-2 shadow-xl"
        >
          <div className="text-[10px] font-black text-[#0B74B0] uppercase tracking-[0.25em] mb-4">Solutions</div>
          {solutionLinks.map((l, i) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 py-2.5 text-base text-[#0E2A38] font-semibold pl-3 border-l-2 border-transparent hover:border-[#0B74B0] hover:text-[#0B74B0] transition-all"
            >
              <span className="text-[#0B74B0]/40 text-xs font-black tabular-nums">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </span>
              {l.label}
            </Link>
          ))}

          <div className="border-t border-black/[0.08] pt-4 mt-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="block py-3 text-base text-[#0E2A38] font-semibold hover:text-[#0B74B0] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="pt-5">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-shine block w-full text-center h-12 leading-[48px] rounded-2xl bg-[#0B74B0] text-white text-base font-bold shadow-lg shadow-[#0B74B0]/25"
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
