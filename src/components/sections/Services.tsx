"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { ServiceGraphic } from "@/components/ui/ServiceGraphics";

const services = [
  {
    title: "Tráfego Pago",
    description: "Gestão avançada de anúncios para escalar suas vendas com ROI previsível.",
  },
  {
    title: "Social Media",
    description: "Posicionamento estratégico e criação de conteúdo que gera desejo.",
  },
  {
    title: "Design",
    description: "Visuais de alto impacto que comunicam valor instantaneamente.",
  },
  {
    title: "Audiovisual",
    description: "Vídeos institucionais e comerciais com qualidade de cinema.",
  },
  {
    title: "Branding",
    description: "Construção de marcas magnéticas, premium e inesquecíveis.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export function Services() {
  return (
    <section id="servicos" className="py-32 bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">ESPECIALIDADES</p>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">
              Nosso arsenal de <span className="font-bold text-white">crescimento</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Soluções integradas desenhadas meticulosamente para dominar o mercado, não apenas para competir nele.
            </p>
          </div>
          <button className="px-8 py-3 rounded-md text-brand-dark bg-brand-cyan font-medium hover:bg-cyan-400 transition-colors whitespace-nowrap">
            Ver todas as soluções
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={cn(
                "group relative p-6 md:p-8 rounded-md bg-brand-gray/30 border border-white/5 transition-all duration-300 flex flex-col",
                "hover:-translate-y-2 hover:border-brand-cyan/30",
                "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-md"
              )}
            >
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Animated Graphic Block */}
                <div className="w-full h-32 md:h-40 rounded-md bg-brand-dark border border-white/5 mb-6 overflow-hidden relative group-hover:border-brand-cyan/30 transition-all duration-300">
                  <ServiceGraphic type={service.title} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
