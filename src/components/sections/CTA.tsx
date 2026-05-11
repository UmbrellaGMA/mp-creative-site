"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#040B16]">
      {/* Immersive Black Hole / Neon Core background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-full max-w-[800px] aspect-square bg-cyan-500/20 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-[#040B16] rounded-full z-0" /> {/* Dark core */}
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-md border border-cyan-400/20 shadow-[0_0_50px_rgba(0,240,255,0.1)]"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 tracking-tight">
            Pronto para elevar sua <span className="text-gradient">marca</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Deixe as agências tradicionais no passado. Pare de queimar dinheiro com estratégias que não convertem e junte-se ao futuro do marketing digital.
          </p>
          
          <button className="group relative px-10 py-5 bg-white text-[#040B16] font-bold text-lg rounded-full overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(0,240,255,0.6)] hover:text-white transition-all duration-500 scale-100 hover:scale-105">
            <div className="absolute inset-0 bg-cyan-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <span className="relative z-10 flex items-center justify-center gap-3">
              Falar com especialistas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
