import React from 'react';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';
import DashboardClient from '@/components/DashboardClient';

export const metadata: Metadata = {
  title: 'Dashboard Admin',
  description: 'Panel kontrol administrasi PesMaQu Baitur Ridhwan Malang',
};

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) {
    redirect('/login');
  }

  let news: any[] = [];
  let totalNews = 0;

  try {
    const fetchedNews = await prisma.news.findMany({ orderBy: { created_at: 'desc' } });
    news = fetchedNews;
    totalNews = news.length;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <DashboardClient
        initialNews={news}
        stats={{
          totalNews,
        }}
      />
    </div>
  );
}
