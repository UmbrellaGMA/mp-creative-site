"use client";

import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/WorldMap";

export function About() {
  return (
    <section id="sobre" className="relative py-32 bg-[#02050A] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Asymmetric Typography */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
            
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-8"
            >
              Não somos uma agência comum.<br />
              Somos parceiros estratégicos de marcas que querem <span className="text-cyan-400 italic">dominar o digital</span>.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6 text-gray-400 text-lg leading-relaxed"
            >
              <p>
                Quebramos o padrão superficial do mercado unindo design de alto impacto, inteligência e performance para posicionar sua empresa acima da concorrência.
              </p>
              <p>
                Nosso foco é único: transformar atenção em autoridade, e autoridade em resultado escalável.
              </p>
              <p>
                Com atuação em 3 países, conectamos marcas a estratégias globais de crescimento.
              </p>
              <p className="text-white font-medium text-xl mt-8">
                Não criamos apenas presença digital.<br />
                Construímos marcas feitas para liderar mercados.
              </p>
            </motion.div>
          </div>

          {/* Right: World Map connecting locations */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full"
            >
              <WorldMap />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
