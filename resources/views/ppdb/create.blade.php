@extends('layouts.frontend')

@section('title', 'PPDB Online')

@section('content')
<div class="bg-gray-50 py-16 px-4 md:px-8 min-h-screen">
    <div class="max-w-3xl mx-auto">
        
        <div class="text-center mb-10">
            <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Pendaftaran Santri Baru</h1>
            <p class="text-slate-500 text-sm md:text-base">Silakan lengkapi data diri Anda di bawah ini dengan benar.</p>
        </div>

        <div class="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            
            @if ($errors->any())
                <div class="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
                    <ul class="list-disc pl-5">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="/ppdb" method="POST" enctype="multipart/form-data" class="space-y-6">
                @csrf

                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                    <input type="text" name="nama_lengkap" required value="{{ old('nama_lengkap') }}"
                           class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-gray-50 focus:bg-white text-gray-800">
                </div>

                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2">Nomor WhatsApp</label>
                    <input type="text" name="nomor_wa" required value="{{ old('nomor_wa') }}" placeholder="Contoh: 081234567890"
                           class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-gray-50 focus:bg-white text-gray-800">
                </div>

                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2">Asal Instansi / Kampus</label>
                    <input type="text" name="asal_instansi" required value="{{ old('asal_instansi') }}" placeholder="contoh: UIN Malang"
                           class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-gray-50 focus:bg-white text-gray-800">
                </div>

                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2">Jurusan / Program Studi</label>
                    <input type="text" name="jurusan" required value="{{ old('jurusan') }}" placeholder="Contoh: Teknik Informatika"
                           class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 outline-none transition bg-gray-50 focus:bg-white text-gray-800">
                </div>

                <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2">Unggah CV (Curriculum Vitae)</label>
                    <div class="relative flex items-center justify-center w-full">
                        <label class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6 text-gray-500">
                                <svg class="w-8 h-8 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p class="text-sm font-medium">Klik untuk mengunggah CV</p>
                                <p class="text-xs mt-1">Format: PDF (Maks. 2MB)</p>
                            </div>
                            <input type="file" name="cv_file" accept=".pdf" required class="hidden" />
                        </label>
                    </div>
                </div>

                <div class="pt-4">
                    <button type="submit" class="w-full bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition duration-300">
                        Kirim Pendaftaran
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
@endsection