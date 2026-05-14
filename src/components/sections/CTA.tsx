"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-brand-cyan/10 p-12 md:p-20 rounded-md border border-brand-cyan/20"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-light text-white mb-6 tracking-tight leading-tight">
            Pronto para elevar sua <span className="font-bold">marca</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Deixe as agências tradicionais no passado. Pare de queimar dinheiro com estratégias que não convertem e junte-se ao futuro do marketing digital.
          </p>
          
          <button className="group px-10 py-5 bg-brand-cyan text-brand-dark font-medium rounded-md hover:bg-cyan-400 transition-colors">
            <span className="flex items-center justify-center gap-3">
              Falar com especialistas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
