"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ricardo Silva",
    role: "CEO, TechNova",
    content: "O nível de profissionalismo e visão estratégica da MP Creative é absurdo. Eles não apenas refizeram nosso branding, mas reestruturaram nosso funil de vendas, gerando um aumento de 240% em 3 meses.",
  },
  {
    id: 2,
    name: "Amanda Costa",
    role: "Diretora de Marketing, Lumina",
    content: "Já passamos por várias agências que prometiam muito e entregavam o básico. A MP tem uma engenharia de tráfego que finalmente nos trouxe previsibilidade de receita.",
  },
  {
    id: 3,
    name: "Carlos Mendes",
    role: "Founder, Vektor",
    content: "Design brutalmente elegante aliado a uma performance impecável. Eles entenderam a alma do nosso negócio e traduziram isso em uma plataforma que converte clientes todos os dias.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 bg-[#02050A] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Validação <span className="text-cyan-400">Absoluta</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            O que dizem os líderes que confiaram a expansão de suas marcas ao nosso ecossistema.
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
              className="glass p-8 rounded-md border border-white/5 relative group"
            >
              {/* Decorative quote mark */}
              <span className="text-8xl font-serif text-white/5 absolute top-4 left-6 leading-none pointer-events-none">&quot;</span>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10 italic">
                &quot;{testi.content}&quot;
              </p>
              
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-900 to-[#040B16] border border-cyan-400/20 flex items-center justify-center">
                  <span className="text-white font-bold">{testi.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white font-bold">{testi.name}</h4>
                  <p className="text-cyan-400 text-sm">{testi.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
