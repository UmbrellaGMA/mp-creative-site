"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Globe, MessageCircle, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#02050A] pt-24 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <Image 
                src="/logo-mp-creative-horizontal.svg" 
                alt="MP Creative Logo" 
                width={160} 
                height={40} 
                className="w-auto h-8 opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              Transformamos marcas em referências digitais com estratégias de alta performance e design autoral.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-medium mb-6">Navegação</h4>
            <ul className="space-y-4">
              {['Sobre nós', 'Nossos Serviços', 'Casos de Sucesso', 'Metodologia', 'Contato'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6">Especialidades</h4>
            <ul className="space-y-4">
              {['Tráfego Pago', 'Branding & Design', 'Desenvolvimento Web', 'Automação de Vendas', 'SEO Avançado'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-6">Fale Conosco</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <p className="text-white mb-1">E-mail</p>
                <a href="mailto:hello@mpcreative.com" className="hover:text-cyan-400 transition-colors">hello@mpcreative.com</a>
              </li>
              <li>
                <p className="text-white mb-1">Telefone</p>
                <a href="tel:+551199999999" className="hover:text-cyan-400 transition-colors">+55 11 9999-9999</a>
              </li>
              <li>
                <p className="text-white mb-1">Localização</p>
                <p>São Paulo, SP - Brasil</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MP Creative. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
