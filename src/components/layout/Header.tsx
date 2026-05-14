"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Cases", href: "#cases" },
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
        isScrolled ? "bg-brand-dark/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"
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
            className="w-auto h-6 md:h-8 transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button className="px-6 py-2.5 rounded-md font-medium text-sm text-brand-dark bg-brand-cyan hover:bg-cyan-400 transition-colors duration-300">
            Falar conosco
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
            className="absolute top-full left-0 w-full bg-brand-dark border-t border-white/5 py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-white hover:text-brand-cyan transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="h-px w-full bg-white/10" />
            <div className="flex flex-col gap-4">
              <button className="w-full text-center px-6 py-3 rounded-md font-medium text-brand-dark bg-brand-cyan">
                Falar conosco
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
