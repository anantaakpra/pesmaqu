import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { formatDateTime, getWhatsAppUrl } from '@/lib/utils';
import { Users, FileText, MessageCircle, ArrowLeft, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Data Pendaftar PPDB',
  description: 'Daftar calon santri yang telah mendaftar PPDB Online PesMaQu Baitur Ridhwan Malang.',
};

export const dynamic = 'force-dynamic';

export default async function DataPendaftarPage() {
  let pendaftar: any[] = [];
  try {
    pendaftar = await prisma.registration.findMany({
      orderBy: { created_at: 'desc' },
    });
  } catch (error) {
    console.error('Error loading pendaftar:', error);
  }

  return (
    <div className="bg-slate-50 py-16 px-4 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-2">
              <Link href="/" className="hover:text-[#bf9000]">Beranda</Link>
              <span>/</span>
              <span className="text-[#bf9000]">Data Pendaftar</span>
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Data Calon Santri</h1>
            <p className="text-slate-500 mt-1 text-sm">
              Daftar mahasiswa yang telah mendaftar melalui formulir PPDB online PesMaQu.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-white px-5 py-3 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-3">
              <Users className="w-5 h-5 text-[#bf9000]" />
              <div>
                <span className="text-xs text-gray-400 block font-medium">Total Pendaftar</span>
                <span className="text-lg font-bold text-slate-900">{pendaftar.length} Orang</span>
              </div>
            </div>

            <Link
              href="/ppdb"
              className="bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-3 px-5 rounded-2xl shadow-sm hover:shadow-md transition text-sm flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Daftar Baru</span>
            </Link>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50/80 text-slate-700 font-bold border-b border-slate-100 uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="px-6 py-4">No</th>
                  <th className="px-6 py-4">Nama Lengkap</th>
                  <th className="px-6 py-4">Kontak WhatsApp</th>
                  <th className="px-6 py-4">Instansi / Kampus</th>
                  <th className="px-6 py-4">Jurusan</th>
                  <th className="px-6 py-4 text-center">Dokumen CV</th>
                  <th className="px-6 py-4">Waktu Daftar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {pendaftar.length > 0 ? (
                  pendaftar.map((item, index) => (
                    <tr key={item.id} className="hover:bg-slate-50/70 transition duration-150">
                      <td className="px-6 py-4 font-semibold text-slate-400">{index + 1}</td>
                      <td className="px-6 py-4 font-bold text-slate-900">{item.nama_lengkap}</td>
                      <td className="px-6 py-4">
                        <a
                          href={getWhatsAppUrl(item.nomor_wa, `Halo ${item.nama_lengkap}, kami dari Pengurus PesMaQu Baitur Ridhwan Malang.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-semibold text-xs transition"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{item.nomor_wa}</span>
                        </a>
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-700">{item.asal_instansi}</td>
                      <td className="px-6 py-4 text-slate-600">{item.jurusan}</td>
                      <td className="px-6 py-4 text-center">
                        {item.cv_file ? (
                          <a
                            href={item.cv_file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 rounded-lg text-xs font-bold transition shadow-2xs"
                          >
                            <FileText className="w-3.5 h-3.5" />
                            <span>Lihat PDF</span>
                          </a>
                        ) : (
                          <span className="text-xs text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-xs text-slate-400 font-medium">
                        {formatDateTime(item.created_at)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-16 text-center text-slate-400 font-medium">
                      <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-base text-slate-600 font-semibold">Belum Ada Data Pendaftar</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Pendaftar yang mengisi formulir PPDB online akan otomatis tampil di tabel ini.
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
