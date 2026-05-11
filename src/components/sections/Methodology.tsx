"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Planejar",
    desc: "Análise profunda de dados, concorrentes e oportunidades ocultas no seu mercado.",
  },
  {
    num: "02",
    title: "Criar",
    desc: "Desenvolvimento de branding magnético, copy persuasiva e design de alta conversão.",
  },
  {
    num: "03",
    title: "Escalar",
    desc: "Injeção de tráfego ultra-segmentado e automação de vendas em escala.",
  },
  {
    num: "04",
    title: "Otimizar",
    desc: "Ajuste fino contínuo baseado em dados reais (Growth Hacking) para maximizar o ROI.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="relative py-32 bg-[#040B16]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            O Sistema <span className="text-cyan-400 text-gradient">MP Creative</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Nossa metodologia proprietária que transforma investimentos em faturamento previsível através de 4 estágios cirúrgicos.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Laser Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-white/10 hidden sm:block">
            <motion.div 
              className="absolute top-0 left-0 w-full h-32 bg-cyan-400 shadow-[0_0_20px_#00F0FF]"
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
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#00F0FF] z-10 hidden sm:block" />

                <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 ${idx % 2 !== 0 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                  <span className="text-5xl md:text-7xl font-heading font-black text-white/5 absolute top-0 -translate-y-1/2 -z-10">{step.num}</span>
                  <div className="glass p-8 rounded-md border border-white/5 hover:border-cyan-400/30 transition-colors relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-4">
                      <span className="text-cyan-400 font-mono text-sm">{step.num}</span>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
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
