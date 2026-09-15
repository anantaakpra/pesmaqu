'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, GraduationCap, LogIn } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Program Akademik', href: '/program-akademik' },
    { name: 'Berita', href: '/berita' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all">
      <div className="container mx-auto px-4 h-20 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-lg">
            <Image
              src="/images/logo.jpg"
              alt="Logo PesMaQu"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="font-black text-xl tracking-wider text-slate-900 leading-none group-hover:text-[#bf9000] transition">
              PESMAQU
            </span>
            <span className="text-[10px] text-[#bf9000] font-bold tracking-widest uppercase mt-1.5 leading-none">
              Pesantren Mahasiswa Al-Qur&apos;an
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-600 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-2 text-sm transition-all duration-200 border-b-2 ${
                isActive(link.href)
                  ? 'text-[#bf9000] border-[#bf9000] font-bold'
                  : 'border-transparent hover:text-[#bf9000] hover:border-[#bf9000]/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdZuoppDYTXkAi6raO6RN_IUypJ_-0SIjAQuRqigUDDo41r-A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-2.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-sm transform hover:-translate-y-0.5"
          >
            <GraduationCap className="w-4 h-4" />
            PPDB Online
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-600 hover:text-[#bf9000] rounded-lg focus:outline-none transition"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl px-6 py-5 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-2 text-base font-medium transition ${
                isActive(link.href) ? 'text-[#bf9000] font-bold' : 'text-gray-700 hover:text-[#bf9000]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZuoppDYTXkAi6raO6RN_IUypJ_-0SIjAQuRqigUDDo41r-A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-3 px-6 rounded-full text-center shadow-md transition flex items-center justify-center gap-2 text-sm"
            >
              <GraduationCap className="w-4 h-4" />
              PPDB Online
            </a>
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-xs text-gray-400 text-center hover:text-[#bf9000] transition py-1 flex items-center justify-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              Akses Login Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
