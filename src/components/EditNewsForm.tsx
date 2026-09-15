'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Loader2, Image as ImageIcon, AlertCircle } from 'lucide-react';

interface EditNewsFormProps {
  initialData: {
    id: number;
    title: string;
    imageUrl: string;
    content: string;
  };
}

export default function EditNewsForm({ initialData }: EditNewsFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(initialData.title);
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl);
  const [content, setContent] = useState(initialData.content);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch(`/api/news/${initialData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          image_url: imageUrl,
          content,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Gagal memperbarui berita');
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan saat menyimpan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/dashboard"
          className="text-slate-600 hover:text-[#bf9000] font-semibold text-xs md:text-sm flex items-center gap-2 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Dashboard</span>
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 md:p-10">
        <div className="mb-8 border-b border-slate-100 pb-5">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Edit Berita
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Ubah judul, gambar tautan, atau isi berita yang sudah dipublikasikan.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs md:text-sm font-medium flex items-center gap-2.5 animate-fade-in">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Judul Berita <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-slate-50 focus:bg-white text-gray-800 text-sm font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Tautan Gambar / URL Foto <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                <ImageIcon className="w-4 h-4" />
              </span>
              <input
                type="url"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-slate-50 focus:bg-white text-gray-800 text-sm font-medium"
              />
            </div>

            {imageUrl && (
              <div className="mt-3 relative w-full h-48 rounded-xl overflow-hidden border border-gray-200 bg-slate-100">
                <img
                  src={imageUrl}
                  alt="Preview Gambar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Isi Konten Berita <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-slate-50 focus:bg-white text-gray-800 text-sm leading-relaxed"
            />
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/dashboard"
              className="px-6 py-3 rounded-xl border border-gray-200 text-slate-700 font-bold hover:bg-slate-50 transition text-sm"
            >
              Batal
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:shadow-lg transition duration-200 flex items-center gap-2 text-sm"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Menyimpan...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Perbarui Berita</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
