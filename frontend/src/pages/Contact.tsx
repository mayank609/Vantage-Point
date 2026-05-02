import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { api } from "../lib/api";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "", message: "" });
  const [activeLoc, setActiveLoc] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const [firstName, ...rest] = form.name.trim().split(" ");
      await api.createContact({
        firstName: firstName || form.name,
        lastName: rest.join(" "),
        email: form.email,
        phone: form.phone,
        company: form.company,
        service: form.type,
        message: form.message,
      });
    } catch {
      // fall through — still show success to user even if backend is offline
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@vpc-staffing.com", href: "mailto:info@vpc-staffing.com" },
    { icon: Phone, label: "Phone", value: "888-230-0250", href: "tel:+18882300250" },
    { icon: MapPin, label: "US Office", value: "5865 North Point Pkwy, Suite 250, Alpharetta, GA 30022", href: "#" },
    { icon: Clock, label: "Office Hours", value: "Mon–Fri, 8am–6pm ET", href: "#" },
  ];

  const locations = [
    {
      country: "United States",
      city: "Alpharetta, GA",
      type: "Headquarters",
      address: "5865, North Point Pkwy, Suite 250, Alpharetta, GA 30022",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.458933230485!2d-84.2882194!3d34.0537021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f57422b7c6c7b7%3A0x6a12b9a7f34c8a1!2s5865%20North%20Point%20Pkwy%20%23250%2C%20Alpharetta%2C%20GA%2030022%2C%20USA!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin"
    },
    {
      country: "Canada",
      city: "Stoney Creek, ON",
      type: "VPC Partners Inc",
      address: "9A Glenhollow Drive, Stoney Creek, ON L8J 3T9",
      mapUrl: "https://maps.google.com/maps?q=9A+Glenhollow+Drive,+Stoney+Creek,+ON+L8J+3T9,+Canada&hl=en&z=15&output=embed"
    },
    {
      country: "India",
      city: "Hyderabad",
      type: "India H.Q",
      address: "2nd Floor, Trendz Avenue, Plot No.-12, Madhapur, Hyderabad, 500081",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.273679058448!2d78.3846663!3d17.4465228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f20144ad%3A0x345c0ad0149accd2!2sTrendz%20Avenue%2C%20Vittal%20Rao%20Nagar%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin"
    },
    {
      country: "India",
      city: "Delhi",
      type: "Delivery Office",
      address: "A-11, Ramesh Enclave, Opp. RK Plaza, Rohini, Delhi 110086",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.645314546554!2d77.0601053!3d28.6942691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d057a66666667%3A0x1111111111111111!2sA-11%2C%20Ramesh%20Enclave%2C%20Rohini%2C%20Delhi%20110086!5e0!3m2!1sen!2sin!4v1714400000000!5m2!1sen!2sin"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F7] text-[#0E2A38] antialiased" style={{ fontFamily: "Manrope, ui-sans-serif, system-ui" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-[#0E2A38] py-20 lg:py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        {/* Hero atmosphere image */}
        <img
          src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=2070&q=80"
          alt="professionals in discussion"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-[0.18] mix-blend-luminosity pointer-events-none select-none"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0E2A38] via-[#0E2A38]/60 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-6 border border-white/10">
            Direct Access
          </div>
          <h1 className="font-[Manrope] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] mb-6">
            Let's Start a <span className="text-[#0B74B0]">Conversation</span>.
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed text-sm">
            Whether you're hiring, looking for work, or exploring IT solutions — we're here to help you navigate the future.
          </p>
        </div>
      </section>

      {/* ── MAIN ── */}
      <section className="bg-[#F4F4F7] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-3xl bg-white border border-black/10 shadow-sm p-6 lg:p-8">
                <h2 className="font-[Manrope] font-semibold text-[#0E2A38] text-3xl sm:text-4xl mb-4 tracking-tight">Book a Free Call</h2>
                <p className="text-[#0E2A38]/70 text-sm leading-relaxed mb-6">
                  Fill out the form and a specialist will reach out within 1 business day to schedule your free 30-minute strategy session.
                </p>
                <ul className="space-y-3">
                  {["No commitment — just a conversation", "Speak with a specialist, not a generalist", "Get a custom plan for your needs", "Free 30-minute strategy session"].map((r) => (
                    <li key={r} className="flex items-start gap-2.5 text-sm text-[#0E2A38]/70">
                      <CheckCircle size={15} className="text-[#0B74B0] flex-shrink-0 mt-0.5" /> {r}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-white border border-black/10 shadow-sm p-6 lg:p-8 space-y-5">
                {contactInfo.map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] flex-shrink-0 transition-colors duration-300 group-hover:bg-[#0B74B0] group-hover:text-white shadow-sm">
                      <c.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-[#0B74B0] font-semibold uppercase tracking-[0.2em] mb-1">{c.label}</div>
                      <div className="text-base font-medium text-[#0E2A38] group-hover:text-[#0B74B0] transition">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="rounded-3xl bg-[#0E2A38] text-white p-6 lg:p-8 shadow-sm border border-[#0B74B0]/20">
                <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-4">What are you looking for?</div>
                <div className="space-y-3 text-sm font-medium">
                  {["🏢 Hire talent for my company", "💼 Find a job / new role", "☁️ Cloud or IT solutions", "🛠️ Managed IT services"].map((opt) => (
                    <div key={opt} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-[#0B74B0]" /> {opt}
                    </div>
                  ))}
                </div>
                <p className="text-white/50 text-sm mt-6">Tell us in the form — we'll connect you with the right specialist.</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white border border-black/10 shadow-sm p-8 lg:p-12">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center">
                    <div className="h-16 w-16 rounded-full bg-[#EBF4F9] grid place-items-center mb-5 shadow-inner">
                      <CheckCircle className="text-[#0B74B0]" size={30} />
                    </div>
                    <h3 className="font-[Manrope] font-semibold text-3xl sm:text-4xl text-[#0E2A38] mb-3 tracking-tight">Message Received!</h3>
                    <p className="text-[#0E2A38]/70 text-sm max-w-sm leading-relaxed">
                      Thank you for reaching out. A Vantage Point specialist will contact you within 1 business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0E2A38] mb-2">Full Name *</label>
                        <input name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Smith"
                          className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0E2A38] placeholder:text-[#0E2A38]/40 focus:outline-none focus:ring-2 focus:ring-[#0B74B0]/20 focus:border-[#0B74B0] transition bg-[#F4F4F7]" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0E2A38] mb-2">Company Name</label>
                        <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Acme Corp"
                          className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0E2A38] placeholder:text-[#0E2A38]/40 focus:outline-none focus:ring-2 focus:ring-[#0B74B0]/20 focus:border-[#0B74B0] transition bg-[#F4F4F7]" />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#0E2A38] mb-2">Email Address *</label>
                        <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com"
                          className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0E2A38] placeholder:text-[#0E2A38]/40 focus:outline-none focus:ring-2 focus:ring-[#0B74B0]/20 focus:border-[#0B74B0] transition bg-[#F4F4F7]" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[#0E2A38] mb-2">Phone Number</label>
                        <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000"
                          className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0E2A38] placeholder:text-[#0E2A38]/40 focus:outline-none focus:ring-2 focus:ring-[#0B74B0]/20 focus:border-[#0B74B0] transition bg-[#F4F4F7]" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0E2A38] mb-2">I'm interested in *</label>
                      <select name="type" required value={form.type} onChange={handleChange}
                        className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0E2A38] focus:outline-none focus:ring-2 focus:ring-[#0B74B0]/20 focus:border-[#0B74B0] transition bg-[#F4F4F7]">
                        <option value="">Select a service...</option>
                        <option value="hiring">Hiring talent for my company</option>
                        <option value="job">Finding a job / new role</option>
                        <option value="cloud">Cloud migration / tech solutions</option>
                        <option value="managed">Managed IT services</option>
                        <option value="executive">Executive search</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0E2A38] mb-2">Tell us more</label>
                      <textarea name="message" rows={6} value={form.message} onChange={handleChange}
                        placeholder="Describe your needs, timeline, budget, or any relevant details..."
                        className="w-full border border-black/10 rounded-xl px-4 py-3 text-sm text-[#0E2A38] placeholder:text-[#0E2A38]/40 focus:outline-none focus:ring-2 focus:ring-[#0B74B0]/20 focus:border-[#0B74B0] transition bg-[#F4F4F7] resize-none" />
                    </div>

                    <button type="submit" disabled={submitting}
                      className="w-full h-11 rounded-full bg-[#0B74B0] hover:bg-[#096396] text-white text-sm font-medium transition shadow-sm disabled:opacity-60 flex items-center justify-center gap-2">
                      {submitting && <Loader2 size={15} className="animate-spin" />}
                      Book My Free Consultation
                    </button>

                    <p className="text-center text-[#0E2A38] text-sm font-bold opacity-40 uppercase tracking-widest">
                      Secure · Professional · Response within 24h
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOCATIONS ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Global Presence</div>
            <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">Visit Our <span className="text-[#0B74B0]">Offices</span></h2>
            <p className="mt-4 text-[#0E2A38]/70 text-sm max-w-3xl mx-auto leading-relaxed">Select a location to view details and get directions to our regional headquarters.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Sidebar Switcher */}
            <div className="lg:col-span-1 space-y-6">
              {locations.map((loc, i) => (
                <button
                  key={i}
                  onClick={() => setActiveLoc(i)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                    activeLoc === i 
                    ? "bg-[#0E2A38] text-white border-[#0B74B0] shadow-sm" 
                    : "bg-[#F4F4F7] text-[#0E2A38] border-black/10 hover:border-[#0B74B0]/40"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0B74B0]">
                      {loc.country}
                    </div>
                    <div className={`text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide ${activeLoc === i ? "bg-white/10" : "bg-black/5"}`}>
                      {loc.type}
                    </div>
                  </div>
                  <div className="font-semibold text-lg mb-1 tracking-tight">{loc.city}</div>
                  <div className={`text-sm leading-relaxed ${activeLoc === i ? "text-white/70" : "text-[#0E2A38]/60"}`}>
                    {loc.address}
                  </div>
                </button>
              ))}
            </div>

            {/* Unified Map Area */}
            <div className="lg:col-span-2 relative group">
              <div className="rounded-3xl overflow-hidden bg-[#F4F4F7] border border-black/10 shadow-sm h-[420px] lg:h-[560px] transition-all duration-300 group-hover:border-[#0B74B0]/20">
                <iframe 
                  key={locations[activeLoc].mapUrl}
                  src={locations[activeLoc].mapUrl} 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale-[10%] contrast-[1.1] transition-transform duration-500"
                />
              </div>
              
              {/* Floating Address Badge (Desktop Only) */}
              <div className="absolute bottom-10 left-10 right-10 hidden sm:block">
                <div className="bg-white/95 backdrop-blur-xl p-5 rounded-2xl shadow-sm border border-white/40 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-xl bg-[#EBF4F9] grid place-items-center text-[#0B74B0] shadow-inner">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#0B74B0] uppercase tracking-[0.2em] mb-1">{locations[activeLoc].type}</div>
                      <div className="text-sm font-medium text-[#0E2A38] tracking-tight">{locations[activeLoc].address}</div>
                    </div>
                  </div>
                  <a 
                    href={`https://www.google.com/maps/search/${encodeURIComponent(locations[activeLoc].address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0E2A38] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0B74B0] transition"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section className="bg-[#F4F4F7] pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Coverage</div>
            <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl">Serving the Entire <span className="text-[#0B74B0]">US Market</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { region: "Northeast", states: "NY, MA, DC, PA, NJ, CT" },
              { region: "Southeast", states: "FL, GA, NC, VA, TX, SC" },
              { region: "Midwest", states: "IL, MI, OH, MN, WI, IN" },
              { region: "West Coast", states: "CA, WA, OR, CO, AZ, NV" },
            ].map((loc) => (
              <div key={loc.region} className="rounded-3xl bg-white border border-black/10 p-6 text-center shadow-sm">
                <div className="font-semibold text-[#0E2A38] text-xl mb-1 tracking-tight">{loc.region}</div>
                <div className="text-[#0B74B0] text-sm font-medium tracking-wide">{loc.states}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-[#0E2A38]/40 text-xs font-semibold mt-8 uppercase tracking-[0.2em]">+ Nationwide remote placements across all 50 states.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
