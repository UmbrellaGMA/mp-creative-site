"use client";

import { motion } from "framer-motion";

export function Instagram() {
  return (
    <section className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-2">@mpcreativeoficial</p>
          <h2 className="text-2xl md:text-3xl font-heading text-white">Siga nosso dia a dia no Instagram</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="aspect-square bg-brand-gray/30 rounded-md flex items-center justify-center border border-white/5 overflow-hidden"
            >
               <span className="text-xs text-gray-500 uppercase tracking-widest">POST {item}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 px-8 py-3 rounded-md font-medium text-sm text-brand-dark bg-brand-cyan hover:bg-cyan-400 transition-colors"
        >
          @mpcreativeoficial
        </motion.button>

      </div>
    </section>
  );
}
