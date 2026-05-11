"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Lightweight particle background using framer-motion
function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] mix-blend-screen animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-screen animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#040B16]">
      <ParticleBackground />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center max-w-7xl mx-auto">
          
          {/* Text Content (Left Side) */}
          <div className="flex flex-col items-start text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-cyan mb-8 border border-cyan-400/20"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm font-medium text-cyan-100 tracking-wide uppercase">O futuro do digital</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-heading font-bold text-white tracking-tighter leading-[1.1] mb-8"
            >
              Transformamos <br className="hidden md:block" /> marcas em <span className="text-gradient">referências</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mb-12 leading-relaxed"
            >
              Estratégias de marketing, branding e performance para empresas que querem crescer de verdade. Sem fórmulas mágicas, apenas resultados escaláveis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <button className="group relative px-8 py-4 bg-white text-[#040B16] font-semibold rounded-full overflow-hidden w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Agendar Reunião
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 text-white font-medium rounded-full glass hover:bg-white/5 border border-white/10 transition-all w-full sm:w-auto">
                Ver Projetos
              </button>
            </motion.div>
          </div>

          {/* Large Vertical Logo (Right Side) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex justify-center lg:justify-end items-center order-1 lg:order-2 w-full"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[450px]">
              {/* Glow effect behind the logo */}
              <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full" />
              <Image 
                src="/logo-mp-creative-vertical.svg" 
                alt="MP Creative Vertical Logo" 
                width={500} 
                height={600} 
                className="w-full h-auto object-contain relative z-10 drop-shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Fade out to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#040B16] to-transparent pointer-events-none" />
    </section>
  );
}
