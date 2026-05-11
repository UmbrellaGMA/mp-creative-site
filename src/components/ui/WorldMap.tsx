"use client";

import { motion } from "framer-motion";

import Image from "next/image";

export function WorldMap() {
  // Coordinates based on viewBox 0 0 950 620
  const locations = {
    brasil: { x: 310, y: 410, label: "Brasil" },
    puntaCana: { x: 260, y: 280, label: "Punta Cana" },
    portugal: { x: 440, y: 190, label: "Portugal" },
  };

  // SVG curved paths connecting the points
  const pathBrasilToPuntaCana = `M ${locations.brasil.x} ${locations.brasil.y} Q ${locations.brasil.x - 60} ${
    (locations.brasil.y + locations.puntaCana.y) / 2
  } ${locations.puntaCana.x} ${locations.puntaCana.y}`;

  const pathBrasilToPortugal = `M ${locations.brasil.x} ${locations.brasil.y} Q ${locations.brasil.x + 120} ${
    (locations.brasil.y + locations.portugal.y) / 2
  } ${locations.portugal.x} ${locations.portugal.y}`;

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-md glass border border-white/5 overflow-hidden flex items-center justify-center bg-[#02050A]">
      {/* Background World Map Image */}
      <Image 
        src="/world-map.svg" 
        alt="World Map" 
        fill
        className="object-cover opacity-10 filter invert brightness-0 pointer-events-none scale-110" 
      />

      <svg className="w-full h-full absolute inset-0 scale-110" viewBox="0 0 950 620">
        {/* Lines */}
        <motion.path
          d={pathBrasilToPuntaCana}
          fill="none"
          stroke="url(#gradient-line)"
          strokeWidth="2"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.path
          d={pathBrasilToPortugal}
          fill="none"
          stroke="url(#gradient-line)"
          strokeWidth="2"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Animated Particles travelling along paths */}
        <motion.circle
          r="4"
          fill="#22d3ee"
          style={{ filter: "drop-shadow(0 0 8px #22d3ee)" }}
        >
          <animateMotion
            dur="3s"
            repeatCount="indefinite"
            path={pathBrasilToPuntaCana}
          />
        </motion.circle>

        <motion.circle
          r="4"
          fill="#22d3ee"
          style={{ filter: "drop-shadow(0 0 8px #22d3ee)" }}
        >
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
            path={pathBrasilToPortugal}
          />
        </motion.circle>

        {/* Location Dots & Labels */}
        {Object.values(locations).map((loc, i) => (
          <motion.g
            key={loc.label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.3 }}
          >
            {/* Pulsing ring */}
            <circle cx={loc.x} cy={loc.y} r="12" fill="#22d3ee" opacity="0.2">
              <animate
                attributeName="r"
                values="10;20;10"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.2;0;0.2"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Core dot */}
            <circle cx={loc.x} cy={loc.y} r="6" fill="#22d3ee" />
            <circle cx={loc.x} cy={loc.y} r="3" fill="#fff" />
            
            {/* Label */}
            <text
              x={loc.x + 15}
              y={loc.y + 5}
              fill="white"
              fontSize="14"
              fontWeight="bold"
              fontFamily="sans-serif"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.8))" }}
            >
              {loc.label}
            </text>
          </motion.g>
        ))}

        {/* SVG Gradients */}
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
