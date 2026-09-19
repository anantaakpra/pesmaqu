'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, Mail, Loader2, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Login gagal. Periksa email dan password.');
      }

      router.push('/dashboard');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 bg-slate-50">
      <div className="max-w-md w-full">
        {/* Top Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 rounded-2xl bg-white shadow-sm border border-gray-100 mb-4">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.jpg"
                alt="Logo PesMaQu"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Login Administrator</h1>
          <p className="text-xs text-slate-500 mt-1">
            Masuk ke panel manajemen sistem PesMaQu Baitur Ridhwan
          </p>
        </div>

        {/* Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs md:text-sm font-medium flex items-center gap-2.5 animate-fade-in">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Email Administrator
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <Mail className="w-4 h-4" />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="masukkan email administrator"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-slate-50 focus:bg-white text-gray-800 text-sm font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Kata Sandi (Password)
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
                  <Lock className="w-4 h-4" />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-slate-50 focus:bg-white text-gray-800 text-sm font-medium"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#bf9000] hover:bg-[#a37a00] disabled:bg-gray-400 text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center gap-2 text-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Memverifikasi...</span>
                  </>
                ) : (
                  <>
                    <span>Masuk ke Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-slate-100 text-center">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition">
              &larr; Kembali ke Beranda Publik
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
