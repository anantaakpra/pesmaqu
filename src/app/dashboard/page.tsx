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
  let registrations: any[] = [];
  let totalNews = 0;
  let totalRegistrants = 0;
  let accepted = 0;
  let pending = 0;

  try {
    const [fetchedNews, fetchedRegistrations] = await Promise.all([
      prisma.news.findMany({ orderBy: { created_at: 'desc' } }),
      prisma.registration.findMany({ orderBy: { created_at: 'desc' } }),
    ]);

    news = fetchedNews;
    registrations = fetchedRegistrations;

    totalNews = news.length;
    totalRegistrants = registrations.length;
    accepted = registrations.filter((r) => r.status === 'Diterima').length;
    pending = registrations.filter((r) => r.status === 'Menunggu Seleksi').length;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <DashboardClient
        initialNews={news}
        initialRegistrations={registrations}
        stats={{
          totalNews,
          totalRegistrants,
          accepted,
          pending,
        }}
      />
    </div>
  );
}
