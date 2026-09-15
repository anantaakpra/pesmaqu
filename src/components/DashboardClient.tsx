'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Newspaper,
  Users,
  CheckCircle2,
  Clock,
  Plus,
  Edit2,
  Trash2,
  LogOut,
  ExternalLink,
  MessageCircle,
  FileText,
  AlertCircle,
  Check,
  X,
  RotateCcw,
} from 'lucide-react';
import { formatDate, getWhatsAppUrl } from '@/lib/utils';

interface DashboardClientProps {
  initialNews: any[];
  initialRegistrations: any[];
  stats: {
    totalNews: number;
    totalRegistrants: number;
    accepted: number;
    pending: number;
  };
}

export default function DashboardClient({
  initialNews,
  initialRegistrations,
  stats: initialStats,
}: DashboardClientProps) {
  const router = useRouter();
  const [newsList, setNewsList] = useState(initialNews);
  const [registrations, setRegistrations] = useState(initialRegistrations);
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

  // Update status PPDB handler
  const handleUpdateStatus = async (id: number, newStatus: string) => {
    setLoadingAction(`status-${id}`);
    try {
      const res = await fetch(`/api/ppdb/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error('Gagal memperbarui status');

      // Update local state
      setRegistrations((prev) =>
        prev.map((reg) => (reg.id === id ? { ...reg, status: newStatus } : reg))
      );

      // Recalculate stats
      const updatedRegs = registrations.map((reg) =>
        reg.id === id ? { ...reg, status: newStatus } : reg
      );
      const acceptedCount = updatedRegs.filter((r) => r.status === 'Diterima').length;
      const pendingCount = updatedRegs.filter((r) => r.status === 'Menunggu Seleksi').length;

      setStats((prev) => ({
        ...prev,
        accepted: acceptedCount,
        pending: pendingCount,
      }));

      setMessage(`Status pendaftar berhasil diubah menjadi "${newStatus}"`);
      setTimeout(() => setMessage(null), 3000);
    } catch (err: any) {
      alert(err.message || 'Gagal memperbarui status');
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
            Kelola publikasi artikel berita dan seleksi calon santri baru secara terpadu.
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

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Total Pendaftar */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex items-center space-x-4">
          <div className="p-4 rounded-2xl bg-indigo-50 text-indigo-600 flex-shrink-0">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Pendaftar</p>
            <h4 className="text-2xl font-black text-slate-900 mt-1">{stats.totalRegistrants}</h4>
          </div>
        </div>

        {/* Diterima */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex items-center space-x-4">
          <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 flex-shrink-0">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Diterima</p>
            <h4 className="text-2xl font-black text-slate-900 mt-1">{stats.accepted}</h4>
          </div>
        </div>

        {/* Menunggu Seleksi */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 flex items-center space-x-4">
          <div className="p-4 rounded-2xl bg-amber-50 text-[#bf9000] flex-shrink-0">
            <Clock className="w-7 h-7" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Menunggu Seleksi</p>
            <h4 className="text-2xl font-black text-slate-900 mt-1">{stats.pending}</h4>
          </div>
        </div>
      </div>

      {/* Section 1: Manajemen Berita */}
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

      {/* Section 2: Data Pendaftar PPDB Online */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Data Pendaftar PPDB Online</h2>
          <p className="text-xs text-slate-500">Seleksi berkas pendaftaran calon santri</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-100 uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-4 px-6">Nama Calon Siswa</th>
                  <th className="py-4 px-6">Kontak WhatsApp</th>
                  <th className="py-4 px-6">Asal Kampus / Sekolah</th>
                  <th className="py-4 px-6">Jurusan</th>
                  <th className="py-4 px-6 text-center">Dokumen CV</th>
                  <th className="py-4 px-6 text-center">Status</th>
                  <th className="py-4 px-6 text-center">Aksi Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {registrations.length > 0 ? (
                  registrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-slate-50/70 transition">
                      <td className="py-4 px-6 font-bold text-slate-900">{reg.nama_lengkap}</td>
                      <td className="py-4 px-6">
                        <a
                          href={getWhatsAppUrl(
                            reg.nomor_wa,
                            `Assalamu'alaikum ${reg.nama_lengkap}, terkait pendaftaran Anda di PesMaQu Baitur Ridhwan Malang.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-800 font-semibold text-xs"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>{reg.nomor_wa}</span>
                        </a>
                      </td>
                      <td className="py-4 px-6 text-slate-700">{reg.asal_instansi}</td>
                      <td className="py-4 px-6 text-slate-600">{reg.jurusan}</td>
                      <td className="py-4 px-6 text-center">
                        {reg.cv_file ? (
                          <a
                            href={reg.cv_file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-lg text-xs font-bold border border-rose-200 transition"
                          >
                            <FileText className="w-3 h-3" />
                            <span>PDF</span>
                          </a>
                        ) : (
                          <span className="text-xs text-gray-400">-</span>
                        )}
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                            reg.status === 'Diterima'
                              ? 'bg-emerald-100 text-emerald-800'
                              : reg.status === 'Ditolak'
                              ? 'bg-rose-100 text-rose-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {reg.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <div className="flex justify-center items-center gap-1.5">
                          <button
                            onClick={() => handleUpdateStatus(reg.id, 'Diterima')}
                            disabled={loadingAction === `status-${reg.id}`}
                            title="Terima Calon Santri"
                            className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1"
                          >
                            <Check className="w-3 h-3" /> Terima
                          </button>
                          <button
                            onClick={() => handleUpdateStatus(reg.id, 'Ditolak')}
                            disabled={loadingAction === `status-${reg.id}`}
                            title="Tolak Calon Santri"
                            className="px-2.5 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-bold transition flex items-center gap-1"
                          >
                            <X className="w-3 h-3" /> Tolak
                          </button>
                          <button
                            onClick={() => handleUpdateStatus(reg.id, 'Menunggu Seleksi')}
                            disabled={loadingAction === `status-${reg.id}`}
                            title="Reset Status ke Menunggu"
                            className="p-1 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-lg text-xs transition"
                          >
                            <RotateCcw className="w-3 h-3" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-400">
                      Belum ada data calon santri yang mendaftar.
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
