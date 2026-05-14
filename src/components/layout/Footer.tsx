"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand-dark pt-32 pb-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col">
        
        {/* Top Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-8">
          <div className="flex gap-8 text-sm tracking-widest uppercase text-gray-400">
             <Link href="#" className="hover:text-brand-cyan transition-colors">Instagram</Link>
             <Link href="#" className="hover:text-brand-cyan transition-colors">Behance</Link>
             <Link href="#" className="hover:text-brand-cyan transition-colors">LinkedIn</Link>
          </div>
          <div className="text-sm tracking-widest uppercase text-gray-400">
             São Paulo — SP
          </div>
        </div>

        {/* Large Typography */}
        <div className="mb-24 flex flex-col">
          <h2 className="text-[12vw] leading-[0.8] font-heading font-bold text-white uppercase tracking-tighter">
            OBRIGADO!
          </h2>
          <h2 className="text-[8vw] leading-[0.8] font-heading font-light text-gray-400 uppercase tracking-tighter ml-1 md:ml-4">
            THANKS!
          </h2>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
            <Image 
              src="/logo-mp-creative-horizontal.svg" 
              alt="MP Creative Logo" 
              width={160} 
              height={40} 
              className="w-auto h-6"
            />
          </Link>
          <div className="text-xs text-gray-500 tracking-wider uppercase">
            © {new Date().getFullYear()} MP Creative. Todos os direitos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
}
