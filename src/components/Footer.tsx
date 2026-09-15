import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Instagram, Youtube, Lock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t-4 border-[#bf9000]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1 */}
          <div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-wider">
              <span className="text-[#bf9000]">PESMAQU</span>
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-300">
              Membangun Generasi Unggul &amp; Berakhlak melalui pendidikan tinggi dan pemahaman Al-Qur&apos;an.
            </p>
            <p className="text-xs text-gray-400 flex items-start gap-2 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#bf9000] flex-shrink-0 mt-0.5" />
              <span>Eduhill Residence 1, Klandungan, Landungsari, Kec. Dau, Kab. Malang.</span>
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-wide">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/6285649704794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-[#bf9000] transition duration-200 group"
                >
                  <span className="p-1.5 rounded-full bg-slate-800 text-[#bf9000] group-hover:bg-[#bf9000] group-hover:text-white transition">
                    <Phone className="w-3.5 h-3.5" />
                  </span>
                  <span>WhatsApp: +62 856-4970-4794</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:pesmaqubaiturridhwan@gmail.com"
                  className="flex items-center gap-2.5 text-gray-300 hover:text-[#bf9000] transition duration-200 group"
                >
                  <span className="p-1.5 rounded-full bg-slate-800 text-[#bf9000] group-hover:bg-[#bf9000] group-hover:text-white transition">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span>pesmaqubaiturridhwan@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 tracking-wide">Media Sosial</h3>
            <p className="text-sm text-gray-400 mb-4">
              Ikuti kegiatan keseharian santri kami melalui platform berikut:
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/pesmaqubaiturridhwan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#bf9000] transition duration-300 shadow-sm"
                aria-label="Instagram PesMaQu"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@baiturridwantv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#bf9000] transition duration-300 shadow-sm"
                aria-label="YouTube Baitur Ridhwan"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 text-center text-xs text-gray-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {currentYear} PesMaQu Baitur Ridhwan. All rights reserved.</span>
          <Link
            href="/login"
            className="text-gray-400 hover:text-[#bf9000] transition flex items-center gap-1.5 py-1 px-3 rounded-lg hover:bg-slate-800/50"
          >
            <Lock className="w-3 h-3 text-[#bf9000]" />
            <span>Akses Login Admin</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
