import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Building2, ShieldCheck, MapPin, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    "Mengenal lebih dekat Pondok Pesantren Mahasiswa Al-Qur'an (PesMaQu) Baitur Ridhwan Malang di bawah asuhan Gus Muqorrobin El-Haruny.",
};

export default function TentangKamiPage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div
        className="relative min-h-[35vh] flex items-center bg-slate-900 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left text-white py-16">
          <div className="text-xs md:text-sm font-bold mb-3 tracking-wide flex items-center gap-2">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Beranda
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#bf9000]">Tentang Kami</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Tentang Kami</h1>
          <div className="w-20 h-1.5 bg-[#bf9000] rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-slate-50 py-16 px-4 md:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Mengenal PesMaQu */}
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
              <div className="flex items-center gap-3 text-[#bf9000]">
                <Building2 className="w-7 h-7" />
                <h2 className="text-2xl font-bold text-slate-900">Mengenal PesMaQu</h2>
              </div>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                <strong className="text-slate-800">
                  Pondok Pesantren Mahasiswa Al-Qur&apos;an (PesMaQu) Baitur Ridhwan Malang
                </strong>{' '}
                adalah lembaga pendidikan Islam non-formal khusus mahasiswa laki-laki yang
                memadukan tradisi kepesantrenan dengan tuntutan akademik perguruan tinggi.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Pesantren yang dipimpin oleh <strong className="text-slate-800">Gus Muqorrobin El-Haruny</strong> ini
                dirancang sebagai ekosistem edukatif yang bersih dan kondusif bagi mahasiswa di kawasan Malang
                Barat untuk menyeimbangkan pencapaian dunia perkuliahan dan pendalaman spiritual keislaman.
              </p>

              <div className="p-6 bg-amber-50/70 border-l-4 border-[#bf9000] rounded-r-2xl mt-6">
                <p className="text-sm italic text-slate-700 font-medium leading-relaxed">
                  &ldquo;Didesain sebagai wadah dinamis untuk melahirkan sarjana muslim yang profesional,
                  berkarakter disiplin tinggi, memiliki kedalaman ilmu syariat, serta berkhidmah tulus kepada guru
                  dan masyarakat.&rdquo;
                </p>
                <span className="block text-xs font-bold text-[#bf9000] mt-3">
                  — Pengasuh, Gus Muqorrobin El-Haruny
                </span>
              </div>
            </div>

            {/* Karakteristik Santri */}
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-8 rounded-3xl shadow-md text-white space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-[#bf9000] flex items-center gap-2">
                <ShieldCheck className="w-6 h-6" />
                <span>Karakteristik Santri</span>
              </h3>
              <ul className="space-y-5 text-sm text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#bf9000] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5 font-semibold">
                      Ideologi Moderat (Aswaja)
                    </strong>
                    Wajib berpaham moderat sesuai prinsip Ahlussunnah wal Jama&apos;ah dan berkomitmen tinggi
                    menghargai keberagaman.
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#bf9000] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5 font-semibold">Target Santri</strong>
                    Dikhususkan bagi mahasiswa aktif laki-laki (putra) perguruan tinggi di Malang.
                  </div>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#bf9000] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5 font-semibold">
                      Komitmen Tinggi &amp; Khidmah
                    </strong>
                    Memiliki tingkat kedisiplinan tinggi, serta siap untuk taat dan berkhidmah kepada guru serta
                    pesantren.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Lokasi & Peta */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#bf9000]">
                  <MapPin className="w-6 h-6" />
                  <h3 className="text-2xl font-bold text-slate-900">Lokasi &amp; Akses Strategis</h3>
                </div>
                <p className="text-slate-700 leading-relaxed text-base">
                  PesMaQu terletak di{' '}
                  <strong className="text-slate-900">
                    Perumahan Eduhill Residence 1, Klandungan, Landungsari, Kec. Dau, Kab. Malang
                  </strong>
                  .
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Lokasi kami berada tepat di perbatasan strategis antara Kota Malang dan Kabupaten Malang
                  (kawasan Malang Barat), memberikan kemudahan akses mobilitas yang luar biasa dekat bagi santri
                  yang menempuh perkuliahan di kampus-kampus besar seperti{' '}
                  <strong className="text-slate-700">UMM, UIN Maliki Malang, dan UNISMA</strong>.
                </p>
              </div>
              <div className="w-full h-64 md:h-80 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <iframe
                  src="https://maps.google.com/maps?q=Eduhill%20Residence%201,%20Landungsari,%20Dau,%20Malang&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi PesMaQu Malang"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
