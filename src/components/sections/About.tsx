"use client";

import { motion } from "framer-motion";
import { Target, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { id: 1, value: t.about.stat1_value, label: t.about.stat1_label, icon: TrendingUp },
    { id: 2, value: t.about.stat2_value, label: t.about.stat2_label, icon: Users },
    { id: 3, value: t.about.stat3_value, label: t.about.stat3_label, icon: Target },
  ];

  return (
    <section id="sobre" className="py-32 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6 leading-tight">
                {t.about.title_start}<br/> <span className="font-bold text-white">{t.about.title_bold}</span>
              </h2>
              <div className="w-12 h-1 bg-brand-cyan mb-8" />
              <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
                {t.about.description}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-md bg-brand-gray/30 border border-white/5 flex flex-col items-center text-center"
                >
                  <stat.icon className="w-6 h-6 text-brand-cyan mb-4" />
                  <div className="text-3xl font-heading font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xs tracking-wider uppercase text-gray-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-md bg-brand-gray/20 rounded-full border border-white/5 flex items-center justify-center p-12">
               <div className="absolute inset-0 border border-white/5 rounded-full scale-110" />
               <div className="absolute inset-0 border border-white/5 rounded-full scale-125 opacity-50" />
               <Image
                 src="/logo-mp-creative-vertical.svg"
                 alt="MP Creative Ecosystem"
                 width={300}
                 height={300}
                 className="w-full h-full object-contain relative z-10 opacity-80"
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
