"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t.testimonials.t1_name,
      role: t.testimonials.t1_role,
      content: t.testimonials.t1_content,
    },
    {
      id: 2,
      name: t.testimonials.t2_name,
      role: t.testimonials.t2_role,
      content: t.testimonials.t2_content,
    },
    {
      id: 3,
      name: t.testimonials.t3_name,
      role: t.testimonials.t3_role,
      content: t.testimonials.t3_content,
    },
  ];

  return (
    <section className="py-32 bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">{t.testimonials.label}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">
            {t.testimonials.title_start}<span className="font-bold text-white">{t.testimonials.title_bold}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, idx) => (
            <motion.div
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-brand-gray/30 p-8 rounded-md border border-white/5 relative flex flex-col"
            >
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-cyan text-brand-cyan" />
                ))}
              </div>
              
              <p className="text-gray-300 font-light leading-relaxed mb-8 flex-1">
                &quot;{testi.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-cyan flex items-center justify-center">
                  <span className="text-brand-dark font-bold">{testi.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testi.name}</h4>
                  <p className="text-gray-500 text-sm tracking-wide uppercase">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
