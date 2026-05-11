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
    title: "Branding",
    description: "Construção de marcas magnéticas, premium e inesquecíveis.",
  },
  {
    title: "Desenvolvimento Web",
    description: "Sites e sistemas web com performance extrema e design autoral.",
  },
  {
    title: "SEO Avançado",
    description: "Domine as primeiras posições do Google de forma orgânica e duradoura.",
  },
  {
    title: "Design Criativo",
    description: "Visuais de alto impacto que comunicam valor instantaneamente.",
  },
  {
    title: "Automação",
    description: "Processos automatizados para que sua equipe foque apenas no estratégico.",
  },
  {
    title: "Audiovisual",
    description: "Vídeos institucionais e comerciais com qualidade de cinema.",
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
    <section id="servicos" className="relative py-32 bg-[#040B16] overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Nosso arsenal de <span className="text-gradient">crescimento</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Soluções integradas desenhadas meticulosamente para dominar o mercado, não apenas para competir nele.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full text-white font-medium border border-cyan-400/30 hover:border-cyan-400/80 transition-colors whitespace-nowrap">
            Ver todas as soluções
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={cn(
                "group relative p-6 md:p-8 rounded-md glass border border-white/5 transition-all duration-500 flex flex-col",
                "hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_10px_40px_-10px_rgba(0,240,255,0.15)]"
              )}
            >
              {/* Internal Hologram Glow */}
              <div className="absolute inset-0 rounded-md bg-gradient-to-b from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                {/* Animated Graphic Block */}
                <div className="w-full h-32 md:h-40 rounded-md bg-[#02050A]/50 border border-white/5 mb-6 overflow-hidden relative group-hover:border-cyan-400/30 transition-all duration-500">
                  <ServiceGraphic type={service.title} />
                </div>
                
                {/* Text Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">
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
