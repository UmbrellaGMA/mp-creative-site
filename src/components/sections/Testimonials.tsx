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
    <section className="py-32 bg-brand-dark border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <p className="text-sm tracking-widest uppercase text-gray-400 mb-4">DEPOIMENTOS</p>
          <h2 className="text-4xl md:text-5xl font-heading font-light text-white mb-6">
            Validação <span className="font-bold text-white">Absoluta</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
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
