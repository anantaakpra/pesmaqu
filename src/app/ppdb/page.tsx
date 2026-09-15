'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { UploadCloud, CheckCircle2, AlertCircle, FileText, Loader2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PPDBPage() {
  const [formData, setFormData] = useState({
    nama_lengkap: '',
    nomor_wa: '',
    asal_instansi: '',
    jurusan: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== 'application/pdf') {
        setErrorMessage('File harus berformat PDF');
        setFile(null);
        setFileName('');
        return;
      }
      if (selectedFile.size > 2 * 1024 * 1024) {
        setErrorMessage('Ukuran file maksimal 2MB');
        setFile(null);
        setFileName('');
        return;
      }
      setErrorMessage('');
      setFile(selectedFile);
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!file) {
      setErrorMessage('Dokumen CV (PDF) wajib diunggah');
      return;
    }

    setLoading(true);
    try {
      const data = new FormData();
      data.append('nama_lengkap', formData.nama_lengkap);
      data.append('nomor_wa', formData.nomor_wa);
      data.append('asal_instansi', formData.asal_instansi);
      data.append('jurusan', formData.jurusan);
      data.append('cv_file', file);

      const res = await fetch('/api/ppdb', {
        method: 'POST',
        body: data,
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || 'Terjadi kesalahan saat mengirim pendaftaran');
      }

      setSuccessMessage(json.message || 'Pendaftaran berhasil dikirim! Kami akan segera menghubungi Anda.');
      setFormData({
        nama_lengkap: '',
        nomor_wa: '',
        asal_instansi: '',
        jurusan: '',
      });
      setFile(null);
      setFileName('');
    } catch (err: any) {
      setErrorMessage(err.message || 'Gagal mengirim pendaftaran');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 py-16 px-4 md:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-[#bf9000] text-xs font-bold uppercase tracking-widest block mb-2">
            Penerimaan Santri Baru
          </span>
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
            Formulir Pendaftaran PPDB Online
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
            Silakan lengkapi data diri Anda di bawah ini dengan benar untuk mengikuti seleksi Beasiswa Santri Baru PesMaQu Malang.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
          {/* Success Alert */}
          {successMessage && (
            <div className="mb-6 p-5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-sm font-semibold flex items-center gap-3 animate-fade-in shadow-sm">
              <div className="bg-emerald-200/60 p-2 rounded-xl flex-shrink-0 text-emerald-700">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <p className="font-bold text-emerald-900">Alhamdulillah!</p>
                <p className="text-xs md:text-sm text-emerald-700">{successMessage}</p>
              </div>
            </div>
          )}

          {/* Error Alert */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-sm font-medium flex items-center gap-3 animate-fade-in">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="nama_lengkap"
                required
                value={formData.nama_lengkap}
                onChange={handleInputChange}
                placeholder="Contoh: Muhammad Farhan"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-slate-50 focus:bg-white text-gray-800 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Nomor WhatsApp Aktif <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="nomor_wa"
                required
                value={formData.nomor_wa}
                onChange={handleInputChange}
                placeholder="Contoh: 081234567890"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-slate-50 focus:bg-white text-gray-800 text-sm"
              />
              <span className="text-[11px] text-gray-400 mt-1 block">
                Pastikan nomor terhubung langsung dengan WhatsApp untuk konfirmasi seleksi.
              </span>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Asal Instansi / Perguruan Tinggi <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="asal_instansi"
                required
                value={formData.asal_instansi}
                onChange={handleInputChange}
                placeholder="Contoh: UIN Maulana Malik Ibrahim Malang / UMM"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-slate-50 focus:bg-white text-gray-800 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Jurusan / Program Studi <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="jurusan"
                required
                value={formData.jurusan}
                onChange={handleInputChange}
                placeholder="Contoh: Teknik Informatika / Pendidikan Agama Islam"
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-slate-50 focus:bg-white text-gray-800 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Unggah CV (Curriculum Vitae) <span className="text-red-500">*</span>
              </label>
              <div className="relative flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-gray-300 hover:border-[#bf9000] rounded-2xl cursor-pointer bg-slate-50 hover:bg-amber-50/30 transition duration-200 group">
                  <div className="flex flex-col items-center justify-center px-4 text-center">
                    {fileName ? (
                      <>
                        <FileText className="w-10 h-10 text-[#bf9000] mb-2" />
                        <p className="text-sm font-bold text-[#bf9000] truncate max-w-xs">{fileName}</p>
                        <p className="text-xs text-emerald-600 font-semibold mt-1">Dokumen PDF Terlampir ✓</p>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-10 h-10 text-gray-400 group-hover:text-[#bf9000] transition mb-2" />
                        <p className="text-sm font-semibold text-gray-600 group-hover:text-slate-800">
                          Klik untuk memilih file CV
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Format dokumen: PDF (Maks. 2MB)</p>
                      </>
                    )}
                  </div>
                  <input
                    type="file"
                    name="cv_file"
                    accept=".pdf,application/pdf"
                    required
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#bf9000] hover:bg-[#a37a00] disabled:bg-gray-400 text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center gap-2 text-base"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sedang Mengirim Data...</span>
                  </>
                ) : (
                  <>
                    <span>Kirim Pendaftaran</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center text-xs text-slate-500">
            <Link href="/data-pendaftar" className="text-[#bf9000] hover:underline font-semibold">
              Lihat Daftar Calon Santri Terdaftar &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
