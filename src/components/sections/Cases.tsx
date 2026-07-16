"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";

export function Cases() {
  const { t } = useLanguage();

  const videos = [
    {
      id: 1,
      title: t.cases.video1_title,
      category: t.cases.video1_category,
      videoSrc: "/Hyrox lisboa.MOV", 
    },
    {
      id: 2,
      title: t.cases.video2_title,
      category: t.cases.video2_category,
      videoSrc: "/Pizza.MOV",
    },
    {
      id: 3,
      title: t.cases.video3_title,
      category: t.cases.video3_category,
      videoSrc: "/obra.MOV",
    },
  ];

  return (
    <section id="cases" className="py-32 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-2">{t.cases.label}</p>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">
            {t.cases.title_start}<span className="font-bold text-white">{t.cases.title_bold}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">
            {t.cases.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl mx-auto">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col gap-6"
            >
              {/* Contêiner do vídeo vertical (9:16 aspect ratio) */}
              <div className="relative w-full aspect-[9/16] rounded-md overflow-hidden bg-brand-gray/30 border border-white/5 group">
                <video
                  src={video.videoSrc}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>

              {/* Informações abaixo do vídeo */}
              <div className="text-center px-2">
                <p className="text-brand-cyan text-xs font-bold mb-2 tracking-widest uppercase">{video.category}</p>
                <h3 className="text-xl font-heading text-white">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
