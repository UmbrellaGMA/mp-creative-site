"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function Methodology() {
  const { t } = useLanguage();

  const steps = [
    {
      num: "01",
      title: t.methodology.step1_title,
      desc: t.methodology.step1_desc,
    },
    {
      num: "02",
      title: t.methodology.step2_title,
      desc: t.methodology.step2_desc,
    },
    {
      num: "03",
      title: t.methodology.step3_title,
      desc: t.methodology.step3_desc,
    },
    {
      num: "04",
      title: t.methodology.step4_title,
      desc: t.methodology.step4_desc,
    },
  ];

  return (
    <section id="metodologia" className="relative py-32 bg-brand-dark overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">
            {t.methodology.title_start}<span className="font-bold text-white">{t.methodology.title_bold}</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            {t.methodology.subtitle}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Laser Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-white/5 hidden sm:block">
            <motion.div 
              className="absolute top-0 left-0 w-full h-32 bg-brand-cyan/50 blur-sm"
              animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-16">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col sm:flex-row items-center gap-8 md:gap-16 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-cyan z-10 hidden sm:block" />

                <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${idx % 2 !== 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <span className="text-5xl md:text-7xl font-heading font-black text-white/5 absolute top-0 -translate-y-1/2 -z-10">{step.num}</span>
                  <div className="bg-brand-gray/30 p-8 rounded-md border border-white/5 hover:border-brand-cyan/30 transition-colors relative overflow-hidden group">
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-4">
                      <span className="text-brand-cyan font-mono text-sm">{step.num}</span>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
