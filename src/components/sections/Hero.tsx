"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          {/* Coloque o seu vídeo na pasta public com o nome bg-video.mp4 */}
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/60 to-brand-dark" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 flex flex-col items-center max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-light tracking-tight text-white mb-6 leading-tight">
            Transformamos marcas em <span className="font-bold">referências</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light">
            Estratégias de marketing, branding e performance para empresas que querem crescer de verdade. Sem fórmulas mágicas, apenas resultados escaláveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group relative px-8 py-4 bg-brand-cyan text-brand-dark font-medium rounded-md overflow-hidden w-full sm:w-auto hover:bg-cyan-400 transition-colors">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Agendar Reunião
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="px-8 py-4 text-white font-medium rounded-md border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all w-full sm:w-auto">
              Ver Projetos
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
