import React from "react";
import { 
  CreditCard, 
  Activity, 
  Scale, 
  Shield, 
  Play, 
  Dna, 
  Landmark, 
  Factory, 
  Wifi,
  ArrowRight
} from "lucide-react";
import TiltCard from "./TiltCard";

const IndustrySection: React.FC = () => {
  const industries = [
    {
      name: "Fintech",
      desc: "Innovative financial technology solutions for the modern banking and payment landscape.",
      icon: CreditCard,
      color: "from-blue-500/10 to-cyan-500/10"
    },
    {
      name: "Healthcare",
      desc: "Digital transformation for healthcare providers, enhancing patient care and operational efficiency.",
      icon: Activity,
      color: "from-emerald-500/10 to-teal-500/10"
    },
    {
      name: "Legal",
      desc: "Secure and efficient technology solutions tailored for the demanding needs of the legal industry.",
      icon: Scale,
      color: "from-slate-500/10 to-gray-500/10"
    },
    {
      name: "Insurance",
      desc: "Modernizing insurance processes with AI and data-driven insights for better risk management.",
      icon: Shield,
      color: "from-orange-500/10 to-red-500/10"
    },
    {
      name: "Media & Ent.",
      desc: "Scaling digital content delivery and managing complex media workflows with cutting-edge tech.",
      icon: Play,
      color: "from-purple-500/10 to-pink-500/10"
    },
    {
      name: "Life Sciences",
      desc: "Accelerating research and development with data-intensive computing and secure cloud platforms.",
      icon: Dna,
      color: "from-indigo-500/10 to-blue-500/10"
    },
    {
      name: "Government",
      desc: "Empowering public sector digital transformation with secure and compliant enterprise solutions.",
      icon: Landmark,
      color: "from-amber-500/10 to-orange-500/10"
    },
    {
      name: "Manufacturing",
      desc: "Optimizing supply chains and production with smart factory solutions and IoT integrations.",
      icon: Factory,
      color: "from-zinc-500/10 to-stone-500/10"
    },
    {
      name: "Telecom",
      desc: "Driving next-generation connectivity and managing complex network infrastructures.",
      icon: Wifi,
      color: "from-sky-500/10 to-indigo-500/10"
    }
  ];

  return (
    <section className="py-24 bg-[#F4F4F7]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-14">
          <div className="text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase mb-3">Industries We Serve</div>
          <h2 className="font-[Manrope] text-[#0E2A38] font-semibold tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Sector <span className="text-[#0B74B0]">Specialization</span>
          </h2>
          <p className="mt-4 text-sm text-[#0E2A38]/70 max-w-3xl mx-auto leading-relaxed">
            We deliver tailored enterprise solutions across a diverse range of sectors, helping businesses navigate their unique digital challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industries.map((ind, index) => (
            <TiltCard key={ind.name} className="h-full">
              <div className="group relative h-full bg-white rounded-3xl p-6 border border-black/10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#0B74B0]/30 overflow-hidden">
                {/* Background Decor */}
                <div className={`absolute -right-8 -top-8 w-48 h-48 bg-gradient-to-br ${ind.color} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 opacity-50`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ind.color} flex items-center justify-center text-[#0B74B0] mb-5 group-hover:scale-105 transition-transform duration-300 shadow-inner`}>
                    <ind.icon size={22} />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-semibold text-[#0E2A38] mb-3 font-[Manrope] tracking-tight">
                    {ind.name}
                  </h3>
                  
                  <p className="text-[#0E2A38]/70 text-sm leading-relaxed mb-5 flex-grow">
                    {ind.desc}
                  </p>
                  
                  <div className="flex items-center gap-2 text-[#0B74B0] text-xs font-semibold tracking-[0.2em] uppercase group-hover:gap-3 transition-all">
                    Explore Expertise <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
