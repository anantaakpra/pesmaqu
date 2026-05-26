@extends('layouts.frontend')

@section('title', 'Data Pendaftar PPDB')

@section('content')
<div class="bg-gray-50 py-16 px-4 md:px-8 min-h-screen">
    <div class="max-w-7xl mx-auto">
        
        <div class="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
                <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Data Calon Santri</h1>
                <p class="text-slate-500 mt-2">Daftar mahasiswa yang telah mendaftar melalui formulir PPDB online.</p>
            </div>
            <div class="bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-sm">
                <span class="text-sm text-gray-500 font-medium">Total Pendaftar:</span>
                <span class="text-xl font-bold text-[#bf9000] ml-2">{{ $pendaftar->count() }} Orang</span>
            </div>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div class="overflow-x-auto">
                <table class="w-full text-left text-sm text-slate-600">
                    <thead class="bg-slate-50 text-slate-700 font-bold border-b border-slate-200 uppercase text-xs tracking-wider">
                        <tr>
                            <th class="px-6 py-4">No</th>
                            <th class="px-6 py-4">Nama Lengkap</th>
                            <th class="px-6 py-4">Nomor WA</th>
                            <th class="px-6 py-4">Instansi / Kampus</th>
                            <th class="px-6 py-4">Jurusan</th>
                            <th class="px-6 py-4 text-center">Dokumen CV</th>
                            <th class="px-6 py-4">Waktu Daftar</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        @forelse($pendaftar as $index => $item)
                        <tr class="hover:bg-slate-50 transition duration-150">
                            <td class="px-6 py-4 font-medium text-slate-900">{{ $index + 1 }}</td>
                            <td class="px-6 py-4 font-bold text-slate-800">{{ $item->nama_lengkap }}</td>
                            <td class="px-6 py-4">
                                <a href="https://wa.me/{{ preg_replace('/^0/', '62', $item->nomor_wa) }}" target="_blank" class="text-green-600 hover:text-green-700 hover:underline flex items-center gap-1 font-medium">
                                    💬 {{ $item->nomor_wa }}
                                </a>
                            </td>
                            <td class="px-6 py-4">{{ $item->asal_instansi }}</td>
                            <td class="px-6 py-4">{{ $item->jurusan }}</td>
                            <td class="px-6 py-4 text-center">
                                <a href="{{ asset('storage/' . $item->cv_file) }}" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 rounded-lg text-xs font-bold transition">
                                    📄 Lihat PDF
                                </a>
                            </td>
                            <td class="px-6 py-4 text-xs text-slate-400">
                                {{ \Carbon\Carbon::parse($item->created_at)->translatedFormat('d M Y - H:i') }}
                            </td>
                        </tr>
                        @empty
                        <tr>
                            <td colspan="7" class="px-6 py-12 text-center text-slate-500 font-medium">
                                Belum ada data pendaftar yang masuk.
                            </td>
                        </tr>
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>
@endsection