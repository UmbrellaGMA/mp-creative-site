"use client";

import { motion } from "framer-motion";

const videos = [
  {
    id: 1,
    title: "Caso de Sucesso: TechNova",
    category: "Performance",
    // Para colocar o seu vídeo, troque "VIDEO_ID_1" pelo ID real do YouTube
    // Exemplo: se o link for youtube.com/shorts/abc123xyz, o ID é "abc123xyz"
    videoId: "VIDEO_ID_1", 
  },
  {
    id: 2,
    title: "Bastidores: Lumina",
    category: "Rebranding",
    videoId: "VIDEO_ID_2",
  },
  {
    id: 3,
    title: "Estratégia de Escala: Vektor",
    category: "Growth",
    videoId: "VIDEO_ID_3",
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-32 bg-brand-dark border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-2">RESULTADOS</p>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">
            Nossos <span className="font-bold text-white">cases de sucesso</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg font-light">
            Não colecionamos clientes, colecionamos cases de sucesso absolutos. Assista como transformamos marcas comuns em líderes de mercado.
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
                
                {video.videoId.startsWith("VIDEO_ID") ? (
                  // Placeholder para quando o ID do vídeo ainda não foi colocado
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-brand-dark">
                    <span className="text-brand-cyan text-sm font-medium mb-2 uppercase tracking-widest">{video.category}</span>
                    <p className="text-gray-500 text-sm">Insira o ID do YouTube no código para visualizar</p>
                  </div>
                ) : (
                  // Iframe real do YouTube Shorts
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1&controls=1`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
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
