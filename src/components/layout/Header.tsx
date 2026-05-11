"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Cases", href: "#cases" },
  { name: "Metodologia", href: "#metodologia" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 group flex items-center">
          <Image 
            src="/logo-mp-creative-horizontal.svg" 
            alt="MP Creative Logo" 
            width={160} 
            height={40} 
            className="w-auto h-8 md:h-10 transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
            <span>PT</span>
          </button>
          
          <button className="relative overflow-hidden group px-6 py-2.5 rounded-full font-medium text-sm text-white border border-cyan-400/30 hover:border-cyan-400/80 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.1)] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] bg-cyan-900/20 backdrop-blur-sm">
            <span className="relative z-10">Falar com especialistas</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-cyan-400/20 to-cyan-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t border-white/5 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="h-px w-full bg-white/10" />
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-2 text-white">
                <Globe className="w-5 h-5" />
                <span>Português (PT)</span>
              </button>
              <button className="w-full text-center px-6 py-3 rounded-full font-medium text-white bg-cyan-500/20 border border-cyan-400/50 shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                Falar com especialistas
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
