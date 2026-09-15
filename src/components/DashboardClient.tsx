'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Newspaper,
  Plus,
  Edit2,
  Trash2,
  LogOut,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface DashboardClientProps {
  initialNews: any[];
  stats: {
    totalNews: number;
  };
}

export default function DashboardClient({
  initialNews,
  stats: initialStats,
}: DashboardClientProps) {
  const router = useRouter();
  const [newsList, setNewsList] = useState(initialNews);
  const [stats, setStats] = useState(initialStats);
  const [loadingAction, setLoadingAction] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
      router.refresh();
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  // Delete news handler
  const handleDeleteNews = async (id: number, title: string) => {
    if (!confirm(`Yakin ingin menghapus berita "${title}"?`)) return;

    setLoadingAction(`delete-${id}`);
    try {
      const res = await fetch(`/api/news/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Gagal menghapus berita');

      setNewsList((prev) => prev.filter((item) => item.id !== id));
      setStats((prev) => ({ ...prev, totalNews: prev.totalNews - 1 }));
      setMessage('Berita berhasil dihapus');
      setTimeout(() => setMessage(null), 3000);
    } catch (err: any) {
      alert(err.message || 'Gagal menghapus berita');
    } finally {
      setLoadingAction(null);
    }
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Top Banner with Logout */}
      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Dashboard Admin PesMaQu
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Kelola publikasi artikel berita pesantren secara terpadu.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            target="_blank"
            className="px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Lihat Website</span>
          </Link>

          <button
            onClick={handleLogout}
            className="px-4 py-2.5 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold transition flex items-center gap-1.5 border border-red-200"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Keluar (Logout)</span>
          </button>
        </div>
      </div>

      {/* Success Notification Alert */}
      {message && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs md:text-sm font-semibold flex items-center gap-2 animate-fade-in shadow-xs">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span>{message}</span>
        </div>
      )}

      {/* Stat Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Berita */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex items-center space-x-4">
          <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 flex-shrink-0">
            <Newspaper className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Berita</p>
            <h4 className="text-2xl font-black text-slate-900 mt-1">{stats.totalNews}</h4>
          </div>
        </div>
      </div>

      {/* Section: Manajemen Berita */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Manajemen Berita &amp; Artikel</h2>
            <p className="text-xs text-slate-500">Kelola informasi dan publikasi pesantren</p>
          </div>
          <Link
            href="/berita/tambah"
            className="bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-2.5 px-5 rounded-2xl shadow-sm hover:shadow-md transition text-xs md:text-sm flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Berita Baru</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-100 uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-6">Judul Berita</th>
                  <th className="py-4 px-6">Tanggal Rilis</th>
                  <th className="py-4 px-6 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {newsList.length > 0 ? (
                  newsList.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/70 transition">
                      <td className="py-4 px-6 font-semibold text-slate-900">
                        <Link
                          href={`/baca/${item.id}`}
                          target="_blank"
                          className="hover:text-[#bf9000] transition flex items-center gap-2 group"
                        >
                          <span>{item.title}</span>
                          <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#bf9000]" />
                        </Link>
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-400 font-medium">
                        {formatDate(item.created_at)}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Link
                            href={`/berita/${item.id}/edit`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-xs font-bold transition"
                          >
                            <Edit2 className="w-3 h-3" />
                            <span>Edit</span>
                          </Link>
                          <button
                            onClick={() => handleDeleteNews(item.id, item.title)}
                            disabled={loadingAction === `delete-${item.id}`}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs font-bold transition disabled:opacity-50"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Hapus</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={3} className="py-12 text-center text-slate-400">
                      Belum ada berita yang dibuat.
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
