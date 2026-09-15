import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BookOpen, BookMarked, Home, Sparkles, MapPin, Check, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Program Akademik',
  description:
    "Integrasi Kurikulum Tahfidz Al-Qur'an Bersanad dan Dirosah Islamiyah Kitab Kuning dengan Fasilitas Beasiswa Penuh 100% PesMaQu Malang.",
};

export default function ProgramAkademikPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div
        className="relative min-h-[35vh] flex items-center bg-slate-900 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left text-white py-16">
          <div className="text-xs md:text-sm font-bold mb-3 tracking-wide flex items-center gap-2">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Beranda
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#bf9000]">Program Akademik</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Program Akademik</h1>
          <div className="w-20 h-1.5 bg-[#bf9000] rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-slate-50 py-16 px-4 md:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header text */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Integrasi Kurikulum Terpadu
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              PesMaQu Baitur Ridhwan secara khusus mengintegrasikan dua pilar utama pendidikan keislaman:
              Program Menghafal Al-Qur&apos;an dan Pendalaman Kitab-Kitab Klasik Islam.
            </p>
          </div>

          {/* 2 Core Programs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Tahfidz */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-[#bf9000] mb-2">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Tahfidz Al-Qur&apos;an
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Program komprehensif yang dirancang terukur guna memandu mahasiswa dalam proses
                  menghafal, menjaga hafalan (<em>Muroja&apos;ah</em>), serta pembetulan bacaan secara ketat.
                </p>
                <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-100/80 text-xs md:text-sm text-slate-700 font-medium leading-relaxed mt-4">
                  ✨ <strong className="text-slate-900">Keunggulan Utama:</strong> Adanya program{' '}
                  <em>Talaqqi Al-Fatihah Bersanad</em>, di mana sanad bacaan tersambung sahih dan mutawatir
                  langsung hingga ke pangkuan Rasulullah ﷺ.
                </div>
              </div>
            </div>

            {/* Dirosah Islamiyah */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-[#bf9000] mb-2">
                  <BookMarked className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Dirosah Islamiyah</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  Kajian mendalam ilmu-ilmu keislaman klasik (Kitab Kuning) dan modern guna membekali
                  intelektual mahasiswa agar memiliki wawasan keagamaan yang kokoh, lurus, dan kontekstual.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="px-3.5 py-2.5 bg-slate-50 rounded-xl text-xs md:text-sm font-semibold text-slate-700 border border-slate-100 flex items-center gap-2">
                    <span>📖</span> Fiqih &amp; Ushul Fiqih
                  </div>
                  <div className="px-3.5 py-2.5 bg-slate-50 rounded-xl text-xs md:text-sm font-semibold text-slate-700 border border-slate-100 flex items-center gap-2">
                    <span>📚</span> Tafsir &amp; Hadits
                  </div>
                  <div className="px-3.5 py-2.5 bg-slate-50 rounded-xl text-xs md:text-sm font-semibold text-slate-700 border border-slate-100 flex items-center gap-2">
                    <span>💎</span> Tasawuf &amp; Tajwid
                  </div>
                  <div className="px-3.5 py-2.5 bg-slate-50 rounded-xl text-xs md:text-sm font-semibold text-slate-700 border border-slate-100 flex items-center gap-2">
                    <span>🗣️</span> Nahwu &amp; Sharaf
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit Beasiswa Banner */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 md:p-12 rounded-3xl shadow-lg text-white w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center w-full">
              <div className="lg:col-span-3 space-y-6">
                <span className="text-[#bf9000] text-xs font-bold uppercase tracking-widest block">
                  Benefit Khusus Santri
                </span>
                <h3 className="text-2xl md:text-4xl font-black tracking-tight">
                  Fasilitas Penunjang &amp; Beasiswa Penuh
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  PesMaQu berkomitmen meringankan beban akomodasi mahasiswa berprestasi selama masa studi
                  mereka di Malang melalui program beasiswa penuh.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                  <div className="space-y-1.5">
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="text-xl">🏠</span> Asrama &amp; Makan Gratis
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Tersedia kuota khusus Beasiswa Santri Baru yang mencakup gratis fasilitas tempat
                      tinggal dan konsumsi harian penuh bagi santri yang lolos seleksi.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-white font-bold text-base flex items-center gap-2">
                      <span className="text-xl">🕌</span> Pusat Kegiatan Masjid
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      Seluruh poros kegiatan peribadahan, sholat berjamaah lima waktu, pengkajian kitab,
                      hingga sholat tarawih berpusat khidmat di Masjid Baitur Ridhwan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-2 gap-4 w-full">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition duration-300 shadow-sm">
                  <span className="text-3xl mb-3 block">🎁</span>
                  <div>
                    <span className="block text-white font-bold text-sm tracking-tight">Beasiswa 100%</span>
                    <span className="text-[11px] text-slate-400 leading-none">Bagi Santri Lolos Seleksi</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition duration-300 shadow-sm">
                  <span className="text-3xl mb-3 block">🍱</span>
                  <div>
                    <span className="block text-white font-bold text-sm tracking-tight">Konsumsi Gratis</span>
                    <span className="text-[11px] text-slate-400 leading-none">Fasilitas Makan Harian</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition duration-300 shadow-sm">
                  <span className="text-3xl mb-3 block">✨</span>
                  <div>
                    <span className="block text-white font-bold text-sm tracking-tight">Talaqqi Sanad</span>
                    <span className="text-[11px] text-slate-400 leading-none">Tersambung ke Rasulullah ﷺ</span>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition duration-300 shadow-sm">
                  <span className="text-3xl mb-3 block">📍</span>
                  <div>
                    <span className="block text-white font-bold text-sm tracking-tight">Kawasan Strategis</span>
                    <span className="text-[11px] text-slate-400 leading-none">Dekat UMM, UIN, UNISMA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
