"use client";

import { motion } from "framer-motion";

export function ServiceGraphic({ type }: { type: string }) {
  switch (type) {
    case "Tráfego Pago": return <PaidTrafficGraphic />;
    case "Social Media": return <SocialMediaGraphic />;
    case "Branding": return <BrandingGraphic />;
    case "Desenvolvimento Web": return <WebDevGraphic />;
    case "SEO Avançado": return <SEOGraphic />;
    case "Design": return <DesignGraphic />;
    case "Automação": return <AutomationGraphic />;
    case "Audiovisual": return <AudioVisualGraphic />;
    default: return <DefaultGraphic />;
  }
}

function PaidTrafficGraphic() {
  return (
    <div className="relative w-full h-full flex items-end justify-center gap-3 pb-8">
      {[40, 70, 100].map((height, i) => (
        <motion.div
          key={i}
          initial={{ height: 10, opacity: 0 }}
          animate={{ height, opacity: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.2 }}
          className="w-8 rounded-t-md bg-gradient-to-t from-cyan-900 to-cyan-400/80 border-t border-cyan-300"
        />
      ))}
      {/* Overlay curved line */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M 10 80 Q 30 70 50 40 T 90 20"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}

function SocialMediaGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-16 h-16 rounded-md border border-white/20 bg-white/5 flex items-center justify-center relative z-10 backdrop-blur-md">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
        </svg>
      </div>
      {/* Floating Hearts */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute text-cyan-400"
          initial={{ opacity: 0, y: 10, x: i === 2 ? -20 : 20, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], y: -40, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function BrandingGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1" className="w-full h-full">
          <motion.path
            d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
            fill="rgba(34, 211, 238, 0.1)"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </div>
  );
}

function WebDevGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <div className="w-full h-full border border-cyan-400/30 rounded-lg bg-[#02050A] flex flex-col overflow-hidden">
        <div className="h-4 border-b border-cyan-400/30 bg-white/5 flex items-center px-2 gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="h-2 bg-cyan-400/20 rounded-full"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
            className="h-2 bg-cyan-400/10 rounded-full"
          />
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
            className="h-2 bg-cyan-400/40 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

function SEOGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Search Bars */}
      <div className="w-3/4 flex flex-col gap-3">
        <div className="w-full h-6 border border-white/10 rounded bg-white/5" />
        <div className="w-2/3 h-2 bg-white/10 rounded" />
        <div className="w-1/2 h-2 bg-white/10 rounded" />
      </div>
      {/* Magnifying Glass */}
      <motion.div
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </motion.div>
    </div>
  );
}

function DesignGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <motion.path
          d="M 20 80 C 20 20, 80 20, 80 80"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Anchor Points */}
        <motion.circle cx="20" cy="80" r="3" fill="white" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.circle cx="80" cy="80" r="3" fill="white" animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
      </svg>
    </div>
  );
}

function AutomationGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Connecting Lines */}
        <path d="M 30 50 L 70 30" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        <path d="M 30 50 L 70 70" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
        
        {/* Particle flowing */}
        <motion.circle r="3" fill="#22d3ee">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 30 50 L 70 30" />
        </motion.circle>
        <motion.circle r="3" fill="#22d3ee">
          <animateMotion dur="2s" repeatCount="indefinite" path="M 30 50 L 70 70" begin="1s" />
        </motion.circle>

        {/* Nodes */}
        <circle cx="30" cy="50" r="8" fill="#02050A" stroke="#22d3ee" strokeWidth="2" />
        <circle cx="70" cy="30" r="6" fill="#02050A" stroke="white" strokeWidth="2" />
        <circle cx="70" cy="70" r="6" fill="#02050A" stroke="white" strokeWidth="2" />
      </svg>
    </div>
  );
}

function AudioVisualGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-20 h-14 border-2 border-cyan-400/30 rounded-lg flex items-center justify-center relative overflow-hidden bg-[#02050A]">
        {/* Film Strip Holes */}
        <div className="absolute top-1 left-0 right-0 flex justify-between px-1">
          {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-sm" />)}
        </div>
        <div className="absolute bottom-1 left-0 right-0 flex justify-between px-1">
          {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-1.5 bg-white/20 rounded-sm" />)}
        </div>
        {/* Play Button */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#22d3ee">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

function DefaultGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 rounded-full border border-cyan-400/30 flex items-center justify-center" />
    </div>
  );
}
