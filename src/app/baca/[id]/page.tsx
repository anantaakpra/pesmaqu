import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, Calendar, Share2 } from 'lucide-react';

interface NewsDetailProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NewsDetailProps): Promise<Metadata> {
  const { id } = await params;
  const newsId = parseInt(id, 10);
  if (isNaN(newsId)) return { title: 'Berita Tidak Ditemukan' };

  try {
    const news = await prisma.news.findUnique({ where: { id: newsId } });
    if (!news) return { title: 'Berita Tidak Ditemukan' };
    return {
      title: news.title,
      description: news.content.slice(0, 160),
    };
  } catch {
    return { title: 'Detail Berita' };
  }
}

export default async function NewsDetailPage({ params }: NewsDetailProps) {
  const { id } = await params;
  const newsId = parseInt(id, 10);
  if (isNaN(newsId)) notFound();

  let news = null;
  try {
    news = await prisma.news.findUnique({
      where: { id: newsId },
    });
  } catch (error) {
    console.error('Error fetching news detail:', error);
  }

  if (!news) {
    notFound();
  }

  return (
    <div className="bg-slate-50 py-12 md:py-16 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/berita"
            className="text-slate-600 hover:text-[#bf9000] font-semibold text-sm inline-flex items-center gap-2 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Berita</span>
          </Link>
        </div>

        {/* Card */}
        <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          {news.image_url && (
            <div className="relative w-full h-[300px] sm:h-[450px] bg-slate-100">
              <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 sm:p-10 md:p-12">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Calendar className="w-4 h-4 text-[#bf9000]" />
              <span>{formatDate(news.created_at)}</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight">
              {news.title}
            </h1>

            <div className="prose prose-slate max-w-none text-slate-700 text-base md:text-lg leading-relaxed whitespace-pre-line font-normal">
              {news.content}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
              <Link
                href="/berita"
                className="text-sm font-bold text-[#bf9000] hover:underline flex items-center gap-1"
              >
                &larr; Lihat Berita Lainnya
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
