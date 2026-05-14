"use client";

import { motion } from "framer-motion";

export function Team() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-2">A MENTE POR TRÁS</p>
          <h2 className="text-3xl md:text-5xl font-heading font-light text-white">Liderança <span className="font-bold">Estratégica</span></h2>
        </div>

        <div className="w-full max-w-2xl mx-auto">
          
          {/* CEO Member */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-brand-gray/40 rounded-md p-8 border border-white/5 flex flex-col md:flex-row gap-8 items-center md:items-start"
          >
            <div className="w-48 h-48 bg-brand-dark rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center border border-white/10 relative">
               {/* Coloque a foto dele na pasta public com o nome kleber.jpg */}
               <img src="/kleber.jpeg" alt="Kleber Prado Rocha" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="flex flex-col text-center md:text-left pt-2">
              <h3 className="text-2xl font-bold text-white mb-1">Kleber Prado Rocha</h3>
              <p className="text-brand-cyan text-sm font-medium mb-6 uppercase tracking-wider">CEO</p>
              <p className="text-gray-300 leading-relaxed">
                Especialista em branding estratégico e performance de alta conversão. À frente da MP Creative, foca em construir e escalar negócios no ecossistema digital com foco absoluto em resultados e posicionamento premium.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
