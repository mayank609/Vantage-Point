import React from "react";
import {
  CreditCard, Activity, Scale, Shield, Play, Dna,
  Landmark, Factory, Wifi, ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const IndustrySection: React.FC = () => {
  const industries = [
    {
      name: "Fintech",
      desc: "Innovative financial technology solutions for the modern banking and payment landscape.",
      icon: CreditCard,
      color: "from-blue-500/10 to-cyan-500/10",
      dot: "bg-blue-400",
    },
    {
      name: "Healthcare",
      desc: "Digital transformation for healthcare providers, enhancing patient care and operational efficiency.",
      icon: Activity,
      color: "from-emerald-500/10 to-teal-500/10",
      dot: "bg-emerald-400",
    },
    {
      name: "Legal",
      desc: "Secure and efficient technology solutions tailored for the demanding needs of the legal industry.",
      icon: Scale,
      color: "from-slate-500/10 to-gray-500/10",
      dot: "bg-slate-400",
    },
    {
      name: "Insurance",
      desc: "Modernizing insurance processes with AI and data-driven insights for better risk management.",
      icon: Shield,
      color: "from-orange-500/10 to-red-500/10",
      dot: "bg-orange-400",
    },
    {
      name: "Media & Ent.",
      desc: "Scaling digital content delivery and managing complex media workflows with cutting-edge tech.",
      icon: Play,
      color: "from-purple-500/10 to-pink-500/10",
      dot: "bg-purple-400",
    },
    {
      name: "Life Sciences",
      desc: "Accelerating research and development with data-intensive computing and secure cloud platforms.",
      icon: Dna,
      color: "from-indigo-500/10 to-blue-500/10",
      dot: "bg-indigo-400",
    },
    {
      name: "Government",
      desc: "Empowering public sector digital transformation with secure and compliant enterprise solutions.",
      icon: Landmark,
      color: "from-amber-500/10 to-orange-500/10",
      dot: "bg-amber-400",
    },
    {
      name: "Manufacturing",
      desc: "Optimizing supply chains and production with smart factory solutions and IoT integrations.",
      icon: Factory,
      color: "from-zinc-500/10 to-stone-500/10",
      dot: "bg-zinc-400",
    },
    {
      name: "Telecom",
      desc: "Driving next-generation connectivity and managing complex network infrastructures.",
      icon: Wifi,
      color: "from-sky-500/10 to-indigo-500/10",
      dot: "bg-sky-400",
    },
  ];

  return (
    <section className="py-24 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Industries We Serve</div>
          <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Sector <span className="text-gradient-animated">Specialization</span>
          </h2>
          <p className="mt-4 text-sm text-[#0E2A38]/60 max-w-3xl mx-auto leading-relaxed">
            We deliver tailored enterprise solutions across a diverse range of sectors, helping businesses navigate their unique digital challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className="hover-float-card group relative h-full bg-white rounded-3xl p-6 border border-black/[0.08] shadow-sm transition-all duration-300 hover:border-[#0B74B0]/25">
                  {/* BG decor */}
                  <div className={`absolute -right-8 -top-8 w-48 h-48 bg-gradient-to-br ${ind.color} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 opacity-60`} />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-13 h-13 w-[52px] h-[52px] rounded-2xl bg-gradient-to-br ${ind.color} border border-black/5 flex items-center justify-center text-[#0B74B0] group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                        <ind.icon size={22} />
                      </div>
                      <div className={`w-2 h-2 rounded-full ${ind.dot} opacity-50 mt-1`} />
                    </div>

                    <h3 className="text-xl lg:text-2xl font-semibold text-[#0E2A38] mb-2.5 font-[Manrope] tracking-tight">
                      {ind.name}
                    </h3>

                    <p className="text-[#0E2A38]/60 text-sm leading-relaxed mb-5 flex-grow">
                      {ind.desc}
                    </p>

                    <div className="flex items-center gap-2 text-[#0B74B0] text-xs font-semibold tracking-[0.15em] uppercase group-hover:gap-3 transition-all duration-300">
                      Explore Expertise <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
