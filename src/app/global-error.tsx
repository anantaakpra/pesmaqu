'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 text-slate-900 font-sans">
        <div className="max-w-md text-center bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-2xl font-bold mb-2">Terjadi Kesalahan Sistem</h2>
          <p className="text-sm text-slate-500 mb-6">
            Aplikasi mengalami kendala sementara saat memuat halaman.
          </p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 bg-[#bf9000] text-white font-bold rounded-full hover:bg-[#a37a00] transition text-sm"
          >
            Muat Ulang
          </button>
        </div>
      </body>
    </html>
  );
}
