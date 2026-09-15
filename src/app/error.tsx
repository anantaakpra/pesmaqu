'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error caught by error boundary:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 rounded-2xl bg-amber-100 text-[#bf9000] flex items-center justify-center mb-6">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Terjadi Sedikit Kendala</h2>
      <p className="text-slate-500 max-w-md mb-8 text-sm">
        Sistem sedang memproses data. Silakan coba muat ulang halaman ini.
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold rounded-full shadow transition text-sm"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Coba Lagi</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-full transition text-sm"
        >
          <Home className="w-4 h-4" />
          <span>Beranda</span>
        </Link>
      </div>
    </div>
  );
}
