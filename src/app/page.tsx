import React from 'react';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import NewsSlider, { NewsItem } from '@/components/NewsSlider';
import { BookOpen, Sparkles, Award, ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const revalidate = 60; // Revalidate at most every 60 seconds

async function getLatestNews(): Promise<NewsItem[]> {
  try {
    const news = await prisma.news.findMany({
      orderBy: { created_at: 'desc' },
      take: 6,
    });
    return news as unknown as NewsItem[];
  } catch (error) {
    console.error('Error loading latest news for homepage:', error);
    return [];
  }
}

export default async function HomePage() {
  const news = await getLatestNews();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        <div
          id="hero-bg"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 transform scale-105 transition duration-1000"
          style={{
            backgroundImage: `url('/bg%20awal.png')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/50" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#bf9000]/20 border border-[#bf9000]/40 text-[#fef08a] text-xs md:text-sm font-semibold mb-6 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-[#bf9000]" />
            <span>Pesantren Mahasiswa Berbasis Al-Qur&apos;an &amp; Kitab Klasik</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            Pondok Pesantren Mahasiswa <br className="hidden sm:inline" />
            <span className="text-[#bf9000] drop-shadow-sm">Al-Qur&apos;an (PesMaQu)</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-10 font-normal">
            PesMaQu Baitur Ridhwan hadir untuk mahasiswa di Malang. Menggabungkan program{' '}
            <strong className="text-white font-semibold">Tahfidz Bersanad</strong>, kajian Islam klasik/modern, dan{' '}
            <strong className="text-[#fef08a] font-semibold">Beasiswa Pendidikan Penuh</strong> di bawah asuhan{' '}
            <strong className="text-white font-semibold">Gus Muqorrobin El-Haruny</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/program-akademik"
              className="w-full sm:w-auto bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-2 text-base transform hover:-translate-y-0.5"
            >
              <span>Jelajahi Program Kami</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZuoppDYTXkAi6raO6RN_IUypJ_-0SIjAQuRqigUDDo41r-A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full border border-white/30 backdrop-blur-sm transition duration-300 flex items-center justify-center gap-2 text-base"
            >
              <Award className="w-5 h-5 text-[#bf9000]" />
              <span>Daftar PPDB Online</span>
            </a>
          </div>
        </div>
      </section>

      {/* Keunggulan Utama 3 Cards */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#bf9000]/40 transition duration-300 shadow-sm hover:shadow-md flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-amber-100/80 text-[#bf9000] flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Talaqqi Sanad Al-Qur&apos;an</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Bimbingan menghafal Al-Qur&apos;an dengan metode Talaqqi dan sanad bacaan yang tersambung shahih hingga ke Rasulullah ﷺ.
              </p>
              <div className="mt-auto text-xs font-semibold text-[#bf9000] flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Bimbingan Intensif Santri
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#bf9000]/40 transition duration-300 shadow-sm hover:shadow-md flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-amber-100/80 text-[#bf9000] flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Kajian Kitab Kuning Klasik</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Pendalaman Fiqih, Tafsir, Hadits, Tasawuf, dan Nahwu Sharaf berpaham Ahlussunnah wal Jama&apos;ah (Aswaja) yang moderat.
              </p>
              <div className="mt-auto text-xs font-semibold text-[#bf9000] flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Dirosah Islamiyah Terstruktur
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#bf9000]/40 transition duration-300 shadow-sm hover:shadow-md flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-amber-100/80 text-[#bf9000] flex items-center justify-center mb-6">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Beasiswa 100% Penuh</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Fasilitas tempat tinggal di asrama representatif dan konsumsi makan harian gratis bagi mahasiswa yang lolos seleksi.
              </p>
              <div className="mt-auto text-xs font-semibold text-[#bf9000] flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Khusus Mahasiswa di Malang
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Slider Section */}
      <section id="berita" className="py-20 px-4 md:px-8 bg-slate-50 scroll-mt-20 w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <h4 className="text-[#bf9000] font-bold text-xs md:text-sm uppercase tracking-widest mb-2">
              Berita Terbaru
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Informasi &amp; Kegiatan Terkini
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
              Dapatkan informasi terbaru seputar kegiatan, prestasi, kajian, dan program PesMaQu
            </p>
          </div>

          <NewsSlider news={news} />

          <div className="flex justify-center mt-10">
            <Link
              href="/berita"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-[#bf9000] text-[#bf9000] font-bold rounded-full hover:bg-[#bf9000] hover:text-white transition duration-300 shadow-sm group"
            >
              <span>Lihat Semua Berita</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section (PPDB) */}
      <section className="py-24 px-4 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Image dipindahkan dari Hero */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-slate-950/70" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span className="text-[#bf9000] font-bold text-xs uppercase tracking-widest block mb-3">
            Penerimaan Santri Baru (PPDB)
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
            Siap Menjadi Mahasiswa Berkarakter Qur&apos;ani?
          </h2>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Bergabunglah bersama keluarga besar PesMaQu Baitur Ridhwan Malang. Pendaftaran dibuka secara online untuk mahasiswa aktif putra.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdZuoppDYTXkAi6raO6RN_IUypJ_-0SIjAQuRqigUDDo41r-A/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center gap-2"
            >
              <Award className="w-5 h-5" />
              <span>Daftar Sekarang</span>
            </a>
            <Link
              href="/tentang-kami"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-slate-200 font-bold py-4 px-8 rounded-full border border-white/20 backdrop-blur-sm transition duration-300 flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5 text-[#bf9000]" />
              <span>Lokasi &amp; Kontak</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
