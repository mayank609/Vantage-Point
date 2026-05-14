import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cloud, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { fadeUp, stagger, viewportOnce } from "../lib/motion";

const CoreServices: React.FC = () => {
  const services = [
    {
      title: "Professional Services",
      description: "Expert consulting and implementation for enterprise platforms, driving transformation and efficiency.",
      icon: Settings,
      technologies: ["Consulting", "Implementation", "Managed Services"],
      to: "/services",
      accentColor: "from-[#0B74B0]/15 to-[#0B74B0]/5",
    },
    {
      title: "Oracle Solutions",
      description: "Comprehensive Oracle Cloud integration, optimization, and support to streamline your operations.",
      icon: Cloud,
      technologies: ["Oracle Cloud", "Integration", "Optimization"],
      to: "/services",
      accentColor: "from-[#75479C]/15 to-[#75479C]/5",
    },
    {
      title: "Workday HCM",
      description: "Unlock the full potential of Workday with our dedicated Human Capital Management consulting and support.",
      icon: Users,
      technologies: ["HCM", "Consulting", "Support"],
      to: "/services",
      accentColor: "from-[#0B74B0]/15 to-[#75479C]/5",
    },
    {
      title: "AI Integration",
      description: "Adopt artificial intelligence to automate processes, gain actionable insights, and stay ahead of the curve.",
      icon: Brain,
      technologies: ["AI", "Automation", "Machine Learning"],
      to: "/services",
      accentColor: "from-[#75479C]/15 to-[#0B74B0]/5",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-[#F4F4F7] via-white to-[#EBF4F9]/50 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0B74B0]/[0.05] rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#75479C]/[0.05] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-[#0B74B0]/[0.04] rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" variants={fadeUp} viewport={viewportOnce}
          className="text-center max-w-4xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/60 backdrop-blur-sm border border-[#0B74B0]/20 rounded-full mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0B74B0] animate-pulse" />
            <span className="text-[#0B74B0] font-semibold text-xs tracking-[0.2em] uppercase">Our Expertise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0E2A38] mb-4 leading-[1.1] tracking-tight font-[Manrope]">
            Our Core <span className="text-gradient-animated">Technology Services</span>
          </h2>
          <p className="text-sm text-[#0E2A38]/60 leading-relaxed">
            From strengthening your digital presence to automating your workflow, we offer technology services for end-to-end digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden" whileInView="show" variants={stagger(0.06, 0.14)} viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeUp}
            >
              <Link to={service.to} className="relative group h-full block">
                {/* Glow layer */}
                <div className="absolute -inset-3 bg-gradient-to-br from-[#0B74B0]/15 to-[#75479C]/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 group-hover:scale-110" />
                {/* Decorative layers */}
                <div className="absolute inset-0 bg-[#0B74B0]/[0.04] rounded-3xl translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4 -z-10" />
                <div className="absolute inset-0 bg-[#75479C]/[0.04] rounded-3xl -translate-x-3 -translate-y-3 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4 -z-10" />

                <TiltCard className="h-full">
                  <div className="hover-float-card relative p-6 lg:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/60 shadow-sm h-full flex flex-col justify-between">
                    {/* Number watermark */}
                    <div
                      aria-hidden
                      className="absolute top-4 right-6 text-[#0E2A38]/[0.03] font-black text-[80px] leading-none tracking-tighter select-none pointer-events-none"
                    >
                      0{index + 1}
                    </div>
                    {/* Corner gradient */}
                    <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${service.accentColor} rounded-bl-full`} />

                    <div className="space-y-5 relative z-10">
                      {/* Index label */}
                      <div className="text-[#0B74B0]/50 text-[10px] font-bold tracking-[0.25em] uppercase">0{index + 1}</div>

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B74B0]/12 to-[#75479C]/12 border border-[#0B74B0]/10 flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        <service.icon className="w-7 h-7 text-[#0B74B0]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-semibold text-[#0E2A38] group-hover:text-[#0B74B0] transition-colors font-[Manrope] tracking-tight">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#0E2A38]/60 leading-relaxed text-sm">{service.description}</p>

                      {/* Tags */}
                      <div className="space-y-3 pt-2">
                        <p className="text-[10px] font-bold text-[#0B74B0] uppercase tracking-[0.2em]">Key Focus Areas</p>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 text-xs font-semibold bg-white shadow-sm rounded-xl border border-black/[0.08] text-[#0E2A38] hover:-translate-y-0.5 hover:border-[#0B74B0]/30 hover:text-[#0B74B0] transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 pt-5 border-t border-black/[0.06] relative z-10 flex justify-end">
                      <div className="inline-flex items-center gap-2 text-[#0B74B0] font-semibold text-sm group-hover:gap-3 transition-all">
                        Discovery Session
                        <div className="p-2 bg-[#0B74B0]/10 rounded-xl group-hover:bg-[#0B74B0]/20 transition-colors shadow-sm">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreServices;
