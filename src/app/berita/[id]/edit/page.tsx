import React from 'react';
import { redirect, notFound } from 'next/navigation';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import EditNewsForm from '@/components/EditNewsForm';

export const metadata: Metadata = {
  title: 'Edit Berita',
  description: 'Perbarui konten berita PesMaQu Baitur Ridhwan',
};

export const dynamic = 'force-dynamic';

interface EditBeritaPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBeritaPage({ params }: EditBeritaPageProps) {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  const { id } = await params;
  const newsId = parseInt(id, 10);
  if (isNaN(newsId)) notFound();

  const news = await prisma.news.findUnique({
    where: { id: newsId },
  });

  if (!news) {
    notFound();
  }

  return (
    <div className="bg-slate-50 py-12 px-4 md:px-8 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <EditNewsForm
          initialData={{
            id: news.id,
            title: news.title,
            imageUrl: news.image_url || '',
            content: news.content,
          }}
        />
      </div>
    </div>
  );
}
