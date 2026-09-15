import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { Calendar, Search, ArrowRight, Newspaper, X } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Berita & Informasi',
  description: 'Daftar berita, pengumuman, dan artikel terbaru dari PesMaQu Baitur Ridhwan Malang.',
};

export const dynamic = 'force-dynamic';

interface BeritaPageProps {
  searchParams: Promise<{
    search?: string;
    filter?: string;
    page?: string;
  }>;
}

export default async function BeritaPage({ searchParams }: BeritaPageProps) {
  const resolvedParams = await searchParams;
  const search = resolvedParams.search || '';
  const filter = resolvedParams.filter || 'terbaru';
  const page = parseInt(resolvedParams.page || '1', 10);
  const limit = 9;
  const skip = (page - 1) * limit;

  const where: any = {};
  if (search) {
    where.OR = [
      { title: { contains: search, mode: 'insensitive' } },
      { content: { contains: search, mode: 'insensitive' } },
    ];
  }

  const orderBy: any = {
    created_at: filter === 'terlama' ? 'asc' : 'desc',
  };

  let total = 0;
  let newsList: any[] = [];

  try {
    [total, newsList] = await Promise.all([
      prisma.news.count({ where }),
      prisma.news.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
    ]);
  } catch (error) {
    console.error('Error fetching news list:', error);
  }

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div
        className="relative min-h-[35vh] flex items-center bg-slate-900 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left text-white py-16">
          <div className="text-xs md:text-sm font-bold mb-3 tracking-wide flex items-center gap-2">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Beranda
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#bf9000]">Berita</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Berita &amp; Informasi</h1>
          <div className="w-20 h-1.5 bg-[#bf9000] rounded-full" />
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-slate-50 py-12 px-4 md:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Search & Filter Bar */}
          <div className="mb-10 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 max-w-4xl">
            <form action="/berita" method="GET" className="flex flex-col md:flex-row gap-4 w-full">
              <div className="flex-grow relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  <Search className="w-5 h-5" />
                </span>
                <input
                  type="text"
                  name="search"
                  defaultValue={search}
                  placeholder="Cari judul atau isi berita di sini..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 transition outline-none bg-slate-50 focus:bg-white text-gray-800 font-medium text-sm"
                />
              </div>

              <div className="md:w-56 flex-shrink-0">
                <select
                  name="filter"
                  defaultValue={filter}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 transition outline-none bg-slate-50 focus:bg-white text-gray-700 font-semibold cursor-pointer text-sm"
                >
                  <option value="terbaru">Urutkan: Terbaru</option>
                  <option value="terlama">Urutkan: Terlama</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-3 px-6 rounded-xl shadow-md transition text-sm flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Cari</span>
              </button>
            </form>
          </div>

          {/* Active Search Filter Badge */}
          {search && (
            <div className="mb-8 text-sm text-gray-600 font-medium bg-white py-2.5 px-4 rounded-xl border border-gray-200 inline-flex items-center gap-2 shadow-sm">
              <span>
                Menampilkan hasil untuk: <strong className="text-slate-900">&ldquo;{search}&rdquo;</strong>
              </span>
              <Link
                href="/berita"
                className="text-red-500 hover:text-red-700 font-bold ml-2 flex items-center gap-1 text-xs"
              >
                <X className="w-3.5 h-3.5" /> Clear Filter
              </Link>
            </div>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
            {newsList.length > 0 ? (
              newsList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 group"
                >
                  <div className="relative overflow-hidden h-52 bg-slate-100">
                    {item.image_url ? (
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500 pointer-events-none"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Newspaper className="w-10 h-10" />
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-4">
                      <Calendar className="w-3.5 h-3.5 text-[#bf9000]" />
                      <span>{formatDate(item.created_at)}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-slate-900 tracking-tight leading-snug group-hover:text-[#bf9000] transition">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">
                      {item.content}
                    </p>

                    <div className="mt-auto pt-2">
                      <Link
                        href={`/baca/${item.id}`}
                        className="text-[#bf9000] font-bold text-sm hover:text-[#a37a00] transition flex items-center gap-1.5 group/link"
                      >
                        <span>Baca Selengkapnya</span>
                        <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 shadow-sm">
                <Newspaper className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">Pencarian Tidak Ditemukan</h3>
                <p className="text-gray-500 text-sm text-center max-w-sm mb-6">
                  Tidak ada berita atau pengumuman yang sesuai dengan kata kunci tersebut. Coba cari dengan topik lain.
                </p>
                <Link
                  href="/berita"
                  className="bg-slate-100 hover:bg-slate-200 text-gray-700 font-bold py-2.5 px-6 rounded-full transition text-sm"
                >
                  Kembali ke Semua Berita
                </Link>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              {page > 1 && (
                <Link
                  href={`/berita?page=${page - 1}&search=${encodeURIComponent(search)}&filter=${filter}`}
                  className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-semibold hover:bg-slate-50 text-gray-700"
                >
                  &larr; Sebelumnya
                </Link>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/berita?page=${p}&search=${encodeURIComponent(search)}&filter=${filter}`}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition ${
                    p === page
                      ? 'bg-[#bf9000] text-white shadow-md'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-slate-50'
                  }`}
                >
                  {p}
                </Link>
              ))}

              {page < totalPages && (
                <Link
                  href={`/berita?page=${page + 1}&search=${encodeURIComponent(search)}&filter=${filter}`}
                  className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-semibold hover:bg-slate-50 text-gray-700"
                >
                  Selanjutnya &rarr;
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
