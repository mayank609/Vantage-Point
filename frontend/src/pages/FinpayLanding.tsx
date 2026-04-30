import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Repeat,
  Building2,
  ShieldCheck,
  Plane,
  Wallet,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react"


/* ------------------------------------------------------------------ */
/*                         MOTION VARIANTS                              */
/* ------------------------------------------------------------------ */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

/* ------------------------------------------------------------------ */
/*                         BRAND SVG LOGOS                              */
/* ------------------------------------------------------------------ */
const KlarnaLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg role="img" aria-label="Klarna" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M4.592 2v20H0V2h4.592zm11.46 0c0 4.194-1.583 8.105-4.415 11.068l-.278.283L17.702 22h-5.668l-6.893-9.4 1.779-1.332c2.858-2.14 4.535-5.378 4.637-8.924L11.562 2h4.49zM21.5 17a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"/>
  </svg>
);

const CoinbaseLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg role="img" aria-label="Coinbase" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M4.844 11.053c-.872 0-1.553.662-1.553 1.548s.664 1.542 1.553 1.542c.889 0 1.564-.667 1.564-1.547 0-.875-.664-1.543-1.564-1.543zm.006 2.452c-.497 0-.86-.386-.86-.904 0-.523.357-.909.854-.909.502 0 .866.392.866.91 0 .517-.364.903-.86.903zm1.749-1.778h.433v2.36h.693V11.11H6.599zm-5.052-.035c.364 0 .653.224.762.558h.734c-.133-.713-.722-1.197-1.49-1.197-.872 0-1.553.662-1.553 1.548 0 .887.664 1.543 1.553 1.543.75 0 1.351-.484 1.484-1.203h-.728a.78.78 0 01-.756.564c-.502 0-.855-.386-.855-.904 0-.523.347-.909.85-.909zm18.215.622l-.508-.075c-.242-.035-.415-.115-.415-.305 0-.207.225-.31.53-.31.336 0 .55.143.595.379h.67c-.075-.599-.537-.95-1.247-.95-.733 0-1.218.375-1.218.904 0 .506.317.8.958.892l.508.075c.249.034.387.132.387.316 0 .236-.242.334-.577.334-.41 0-.641-.167-.676-.42h-.681c.064.581.52.99 1.35.99.757 0 1.26-.346 1.26-.938 0-.53-.364-.806-.936-.892zM7.378 9.885a.429.429 0 00-.444.437c0 .254.19.438.444.438a.429.429 0 00.445-.438.429.429 0 00-.445-.437zm10.167 2.245c0-.645-.392-1.076-1.224-1.076-.785 0-1.224.397-1.31 1.007h.687c.035-.236.22-.432.612-.432.352 0 .525.155.525.345 0 .248-.317.311-.71.351-.531.058-1.19.242-1.19.933 0 .535.4.88 1.034.88.497 0 .809-.207.965-.535.023.293.242.483.548.483h.404v-.616h-.34v-1.34zm-.68.748c0 .397-.347.69-.769.69-.26 0-.48-.11-.48-.34 0-.293.353-.373.676-.408.312-.028.485-.097.572-.23zm-3.679-1.825c-.386 0-.71.162-.94.432V9.856h-.693v4.23h.68v-.391c.232.282.56.449.953.449.832 0 1.461-.656 1.461-1.543 0-.886-.64-1.548-1.46-1.548zm-.103 2.452c-.497 0-.86-.386-.86-.904 0-.517.369-.909.865-.909.503 0 .855.386.855.91 0 .517-.364.903-.86.903zm-3.187-2.452c-.45 0-.745.184-.919.443v-.385H8.29v2.975h.693v-1.617c0-.455.289-.777.716-.777.398 0 .647.282.647.69v1.704h.692v-1.755c0-.748-.386-1.278-1.142-1.278zM24 12.503c0-.851-.624-1.45-1.46-1.45-.89 0-1.542.668-1.542 1.548 0 .927.698 1.543 1.553 1.543.722 0 1.287-.426 1.432-1.03h-.722c-.104.264-.358.414-.699.414-.445 0-.78-.276-.854-.76H24v-.264zm-2.252-.23c.11-.414.422-.615.78-.615.392 0 .693.224.762.615Z"/>
  </svg>
);

const InstacartLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg role="img" aria-label="Instacart" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M15.629 9.619c1.421 1.429 2.58 3.766 1.917 5.152-1.778 3.715-15.04 10.226-16.169 9.1C.252 22.746 6.768 9.476 10.481 7.697c1.388-.66 3.724.51 5.152 1.92l-.005.014v-.012zm7.028-1.566c-.231-.855-.821-1.717-1.7-1.82-1.61-.186-4.151 2.663-3.971 3.339.181.69 3.766 1.875 5.1.915.691-.494.781-1.56.556-2.414l.015-.02zM17.666.158c1.198.324 2.407 1.148 2.551 2.382.261 2.259-3.732 5.819-4.68 5.564-.948-.251-2.618-5.284-1.269-7.162.695-.972 2.201-1.106 3.399-.788v.004h-.001z"/>
  </svg>
);

/* ------------------------------------------------------------------ */
/*                              NAVBAR                                  */
/* ------------------------------------------------------------------ */
const Navbar: React.FC = () => {
  return (
    <header
      data-testid="finpay-navbar"
      className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F4F4F7]/80 border-b border-black/5"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          data-testid="brand-logo"
          className="flex items-center gap-2 font-semibold text-[#0E2A38] tracking-tight"
        >
          <span className="grid place-items-center h-7 w-7 rounded-md bg-[#0E2A38] text-[#0B74B0] text-xs font-bold">
            F
          </span>
          <span className="text-lg">Finpay</span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm text-[#0E2A38]/80">
          {["Products", "Customers", "Pricing", "Learn"].map((item) => (
            <a
              key={item}
              href="#"
              data-testid={`nav-${item.toLowerCase()}`}
              className="hover:text-[#0E2A38] transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="nav-login-btn"
            className="hidden sm:inline-flex h-9 items-center rounded-full px-4 text-sm text-[#0E2A38] hover:bg-black/5 transition"
          >
            Login
          </button>
          <button
            data-testid="nav-signup-btn"
            className="inline-flex h-9 items-center rounded-full px-4 bg-[#0B74B0] text-white text-sm font-medium hover:bg-[#096396] transition shadow-sm"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

/* ------------------------------------------------------------------ */
/*                         HERO + PAYMENT CARD                         */
/* ------------------------------------------------------------------ */
const PaymentMockup: React.FC = () => {
  return (
    <div
      data-testid="hero-payment-mockup"
      className="relative w-full max-w-md mx-auto"
    >
      {/* Floating credit card */}
      <div className="absolute -top-6 -right-2 sm:-right-6 z-10 w-56 h-32 rounded-2xl bg-gradient-to-br from-[#0B74B0] to-[#0F6E6E] text-white p-4 shadow-xl rotate-[-6deg]">
        <div className="flex justify-between items-start text-[10px] opacity-80">
          <span>Credit Card</span>
          <span className="font-mono">234 •••• ••••</span>
        </div>
        <div className="mt-12 flex justify-between items-end">
          <span className="italic font-bold tracking-wider">VISA</span>
          <span className="text-xs opacity-80">))) </span>
        </div>
      </div>

      {/* Main pay card */}
      <div className="relative rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(14,42,56,0.25)] p-5 border border-black/5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#EBF4F9] grid place-items-center text-[#0B74B0] font-bold">
            D
          </div>
          <div>
            <div className="font-semibold text-[#0E2A38] text-sm">
              Diaz Hisao
            </div>
            <div className="text-xs text-[#0E2A38]/50">@diazhisao</div>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-xs text-[#0E2A38]/50">Receive</div>
          <div className="text-3xl font-semibold text-[#0E2A38] tracking-tight">
            $1,876,580
          </div>
          <div className="text-xs text-[#0E2A38]/40 mt-1">April 21, 2025</div>
        </div>

        <div className="mt-5 space-y-2">
          <label className="flex items-center justify-between rounded-xl border border-[#0B74B0]/40 bg-[#EBF4F9]/40 p-3 cursor-pointer">
            <span className="flex items-center gap-2 text-sm text-[#0E2A38]">
              <span className="h-7 w-7 rounded-md bg-white grid place-items-center text-[#0B74B0]">
                <Wallet size={14} />
              </span>
              Credit Card
            </span>
            <span className="h-4 w-4 rounded-full border-2 border-[#0B74B0] grid place-items-center">
              <span className="h-2 w-2 rounded-full bg-[#0B74B0]" />
            </span>
          </label>
          <label className="flex items-center justify-between rounded-xl border border-black/10 p-3 cursor-pointer">
            <span className="flex items-center gap-2 text-sm text-[#0E2A38]/70">
              <span className="h-7 w-7 rounded-md bg-[#F4F4F7] grid place-items-center">
                <Building2 size={14} />
              </span>
              Bank Account
            </span>
            <span className="h-4 w-4 rounded-full border-2 border-black/15" />
          </label>
        </div>

        <button
          data-testid="mockup-pay-btn"
          className="mt-5 w-full h-11 rounded-xl bg-[#0E2A38] text-white text-sm font-medium hover:bg-[#0a1f29] transition"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section
      data-testid="hero-section"
      className="relative overflow-hidden bg-[#F4F4F7]"
    >
      {/* faint diagonal lines */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(14,42,56,0.55) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />
           <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h1
            variants={fadeUp}
            data-testid="hero-title"
            className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05]"
          >
            Get paid early
            <br />
            save automatically
            <br />
            all your pay.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-[#0E2A38]/65 max-w-md text-base leading-relaxed"
          >
            Supports small businesses with simple invoicing, powerful
            integrations, and cash-flow management tools.
          </motion.p>

          <motion.form
            variants={fadeUp}
            onSubmit={(e) => e.preventDefault()}
            data-testid="hero-cta-form"
            className="mt-8 flex w-full max-w-md items-center rounded-full bg-white border border-black/10 p-1 shadow-sm"
          >
            <input
              data-testid="hero-email-input"
              type="email"
              placeholder="Your business email"
              className="flex-1 bg-transparent px-4 py-2.5 text-sm text-[#0E2A38] placeholder:text-[#0E2A38]/40 focus:outline-none"
            />
            <button
              data-testid="hero-get-started-btn"
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white px-5 py-2.5 text-sm font-medium transition"
            >
              Get Started <ArrowUpRight size={16} />
            </button>
          </motion.form>

          <motion.div
            variants={fadeUp}
            data-testid="hero-logos"
            className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5"
          >
            <KlarnaLogo className="h-7 w-auto" />
            <CoinbaseLogo className="h-7 w-auto" />
            <InstacartLogo className="h-7 w-auto" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <PaymentMockup />
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*                       EXPERIENCE THAT GROWS                         */
/* ------------------------------------------------------------------ */
const ExperienceSection: React.FC = () => {
  const features = [
    {
      icon: Repeat,
      title: "Free transfers",
      desc: "Create a financial experience easy and automate payroll workflows by scheduling recurring payments.",
    },
    {
      icon: Building2,
      title: "Multiple account",
      desc: "Run your operations with cash from your account and generate yield on funds between your account.",
    },
    {
      icon: ShieldCheck,
      title: "Unmatched security",
      desc: "Securely manage your finances with organisation-wide MFA, card locking, and account-level controls.",
    },
  ];

  return (
    <section
      data-testid="experience-section"
      className="bg-[#F4F4F7] pb-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl bg-white border border-black/5 shadow-sm p-8 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">
                Pursue Payment
              </div>
              <h2 className="mt-4 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1]">
                Experience that grows
                <br />
                with your scale.
              </h2>
            </div>
            <p className="text-[#0E2A38]/60 text-base leading-relaxed lg:max-w-md lg:pt-8">
              Design a financial operating system that works for your business
              and streamline cash-flow management.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 lg:gap-12">
            {features.map((f) => (
              <div
                key={f.title}
                data-testid={`feature-${f.title.toLowerCase().replace(/\s/g, "-")}`}
                className="group"
              >
                <div className="h-11 w-11 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] mb-5 transition-transform group-hover:-translate-y-1">
                  <f.icon size={20} />
                </div>
                <h3 className="font-semibold text-[#0E2A38] text-lg">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-[#0E2A38]/60 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*                        WHY THEY PREFER FINPAY                       */
/* ------------------------------------------------------------------ */
const ChartLine: React.FC = () => (
  <svg
    viewBox="0 0 400 120"
    className="w-full h-32"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0B74B0" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#0B74B0" stopOpacity="0" />
      </linearGradient>
    </defs>
    <path
      d="M0,90 C40,85 80,80 120,72 C160,64 200,55 240,42 C280,28 320,22 400,10 L400,120 L0,120 Z"
      fill="url(#grad)"
    />
    <path
      d="M0,90 C40,85 80,80 120,72 C160,64 200,55 240,42 C280,28 320,22 400,10"
      fill="none"
      stroke="#0B74B0"
      strokeWidth="2"
    />
  </svg>
);

const WhyFinpay: React.FC = () => {
  return (
    <section
      data-testid="why-finpay-section"
      className="bg-[#F4F4F7] pb-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-12">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">
            With Us
          </div>
          <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
            Why they prefer Finpay
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* 3k+ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            data-testid="stat-3kplus-card"
            className="rounded-3xl bg-[#EBF4F9] p-8 lg:p-10 min-h-[220px] flex flex-col justify-between"
          >
            <div className="text-6xl lg:text-7xl font-semibold text-[#0B74B0] tracking-tight">
              3k+
            </div>
            <div className="mt-6 text-[#0E2A38] text-base font-medium leading-snug max-w-xs">
              Businesses already running on Finpay
            </div>
          </motion.div>

          {/* Instant Withdraw */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-testid="instant-withdraw-card"
            className="rounded-3xl bg-[#EBF4F9] p-8 lg:p-10 min-h-[220px] flex flex-col justify-between"
          >
            <div className="text-[#0E2A38] text-xl lg:text-2xl font-semibold leading-snug max-w-sm">
              Instant Withdraw your funds
              <br />
              at any time
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-[#0B74B0] grid place-items-center text-white">
                <Plane size={20} />
              </div>
              <div className="flex-1 h-px bg-[#0E2A38]/15 relative">
                <ArrowRight
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0E2A38]/30"
                  size={14}
                />
              </div>
              <div className="h-12 w-12 rounded-full bg-[#0E2A38] grid place-items-center text-white">
                <Building2 size={18} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* No asset volatility */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid="no-volatility-card"
          className="mt-6 rounded-3xl bg-[#EBF4F9] p-8 lg:p-10 grid lg:grid-cols-3 gap-8 items-center"
        >
          <div className="lg:col-span-1">
            <h3 className="text-2xl lg:text-3xl font-semibold text-[#0E2A38] tracking-tight">
              No asset volatility
            </h3>
            <p className="mt-3 text-sm text-[#0E2A38]/60 leading-relaxed max-w-xs">
              Generate returns on your cash reserves without making any
              investments.
            </p>
          </div>
          <div className="lg:col-span-2 rounded-2xl bg-white p-5">
            <div className="flex items-center justify-between text-xs text-[#0E2A38]/50">
              <span>Summary</span>
              <span className="rounded-md bg-[#F4F4F7] px-2 py-1">6 Months ▾</span>
            </div>
            <div className="mt-1 text-2xl font-semibold text-[#0E2A38]">
              $1,876,580
            </div>
            <div className="mt-3">
              <ChartLine />
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-[#0E2A38]/40">
              {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*                       MAXIMIZE RETURNS (DARK)                       */
/* ------------------------------------------------------------------ */
const MaximizeReturns: React.FC = () => {
  const steps = [
    {
      n: "1",
      title: "Open your account",
      desc: "Sign up for free and set up your account from the dashboard.",
    },
    {
      n: "2",
      title: "Transfer your money",
      desc: "Move money from your other account fast and start earning today.",
    },
    {
      n: "3",
      title: "Watch your balance grow",
      desc: "Account is insured and remains shielded from market volatility.",
    },
  ];
  return (
    <section
      data-testid="maximize-returns-section"
      className="bg-[#0E2A38] text-white relative overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">
          Step
        </div>
        <h2 className="mt-3 font-[Manrope] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] max-w-3xl">
          Maximize your returns with a
          <br />
          Reserve account that generates.
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.n}
              data-testid={`step-${s.n}`}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] transition"
            >
              <div className="text-5xl font-semibold text-white/15 leading-none">
                {s.n}
              </div>
              <div className="mt-4 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*                         INNOVATIVE COMPANIES                        */
/* ------------------------------------------------------------------ */
const InnovativeCompanies: React.FC = () => {
  const stats = [
    { v: "24%", label: "Revenue business" },
    { v: "180K", label: "In annual revenue" },
    { v: "10+", label: "Months of runway" },
  ];
  return (
    <section
      data-testid="innovative-section"
      className="bg-[#F4F4F7] pt-24 pb-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
        <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">
          Our Mission
        </div>
        <h2 className="mt-3 font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
          We've helped
          <br />
          innovative companies
        </h2>
        <p className="mt-5 text-[#0E2A38]/55 text-sm max-w-xl mx-auto">
          Hundreds of retailers and across all industries have made a big
          improvement with us.
        </p>

        <div className="mt-14 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              data-testid={`stat-${s.v}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl font-semibold text-[#0E2A38] tracking-tight">
                {s.v}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-[#0E2A38]/55">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*                            PRICING PLANS                            */
/* ------------------------------------------------------------------ */
const Pricing: React.FC = () => {
  return (
    <section data-testid="pricing-section" className="bg-[#F4F4F7] pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
          Choose Plan
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <a
            href="#"
            data-testid="plan-plus"
            className="group relative overflow-hidden rounded-3xl bg-[#EBF4F9] p-8 lg:p-10 min-h-[180px] flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="text-2xl lg:text-3xl font-semibold text-[#0E2A38]">
              Plus
            </div>
            <div className="flex items-end justify-between">
              <div className="text-base text-[#0E2A38]/70">£2.99/month</div>
              <ArrowUpRight
                className="text-[#0E2A38]/60 group-hover:text-[#0E2A38] group-hover:-translate-y-1 group-hover:translate-x-1 transition"
                size={22}
              />
            </div>
          </a>

          <a
            href="#"
            data-testid="plan-premium"
            className="group relative overflow-hidden rounded-3xl bg-[#0B74B0] p-8 lg:p-10 min-h-[180px] flex flex-col justify-between text-white hover:shadow-xl transition"
          >
            {/* decorative diagonals */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
            />
            <div className="relative text-2xl lg:text-3xl font-semibold">
              Premium
            </div>
            <div className="relative flex items-end justify-between">
              <div className="text-base text-white/85">£6.99/month</div>
              <ArrowUpRight
                className="text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition"
                size={22}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*                              CTA BANNER                              */
/* ------------------------------------------------------------------ */
const CtaBanner: React.FC = () => {
  return (
    <section data-testid="cta-banner" className="bg-[#F4F4F7] pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#0E2A38] text-white p-8 lg:p-12">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase">
                Try It Now
              </div>
              <h3 className="mt-3 font-[Manrope] font-semibold tracking-tight text-3xl sm:text-4xl leading-tight">
                Ready to level up your
                <br />
                payment process?
              </h3>
              <p className="mt-4 text-white/55 text-sm max-w-md">
                Supports small businesses with simple invoicing, powerful
                integrations, and cash-flow management tools.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <button
                data-testid="cta-get-started-now-btn"
                className="inline-flex items-center h-11 px-6 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition"
              >
                Get Started Now
              </button>
              <button
                data-testid="cta-learn-more-btn"
                className="inline-flex items-center gap-1.5 h-11 px-6 rounded-full border border-white/25 text-white text-sm font-medium hover:bg-white/5 transition"
              >
                Learn More <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/*                                FOOTER                                */
/* ------------------------------------------------------------------ */
const Footer: React.FC = () => {
  const cols = [
    {
      title: "Solutions",
      items: ["Small Business", "Freelancers", "Customers", "Teams"],
    },
    {
      title: "Company",
      items: ["About Us", "Career", "Contact"],
    },
    {
      title: "Learn",
      items: ["Blog", "Stories", "Guides", "Templates"],
    },
  ];
  return (
    <footer data-testid="footer" className="bg-[#F4F4F7] border-t border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <a className="flex items-center gap-2 font-semibold text-[#0E2A38]">
            <span className="grid place-items-center h-7 w-7 rounded-md bg-[#0E2A38] text-[#0B74B0] text-xs font-bold">
              F
            </span>
            <span className="text-lg">Finpay</span>
          </a>
        </div>

        {cols.map((c) => (
          <div key={c.title}>
            <div className="font-semibold text-[#0E2A38] text-sm mb-4">
              {c.title}
            </div>
            <ul className="space-y-2.5 text-sm text-[#0E2A38]/60">
              {c.items.map((it) => (
                <li key={it}>
                  <a href="#" className="hover:text-[#0E2A38] transition">
                    {it}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="font-semibold text-[#0E2A38] text-sm mb-4">
            Follow Us On
          </div>
          <div className="flex items-center gap-3">
            {[
              { Icon: Twitter, label: "twitter" },
              { Icon: Linkedin, label: "linkedin" },
              { Icon: Facebook, label: "facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                data-testid={`social-${label}`}
                aria-label={label}
                className="h-9 w-9 grid place-items-center rounded-full bg-white border border-black/10 text-[#0E2A38] hover:bg-[#0E2A38] hover:text-white transition"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-center text-xs text-[#0E2A38]/45">
          © Finpay 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

/* ------------------------------------------------------------------ */
/*                                PAGE                                  */
/* ------------------------------------------------------------------ */
const FinpayLanding: React.FC = () => {
  return (
    <div
      data-testid="finpay-landing"
      className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased"
      style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}
    >
      <Navbar />
      <Hero />
      <ExperienceSection />
      <WhyFinpay />
      <MaximizeReturns />
      <InnovativeCompanies />
      <Pricing />
      <CtaBanner />
      <Footer />
    </div>
  );
};

export default FinpayLanding;
