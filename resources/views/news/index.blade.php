@extends('layouts.frontend')

@section('title', 'Semua Berita')

@section('content')
<div class="bg-gray-50 py-16 px-4 md:px-8 min-h-screen">
    <div class="max-w-7xl mx-auto">
        
        <div class="text-center mb-16">
            <span class="text-[#bf9000] font-bold text-xs uppercase tracking-[0.2em] block mb-3">Arsip Informasi</span>
            <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Semua Berita & Kegiatan</h1>
            <p class="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-medium">
                Kumpulan dokumentasi, berita terkini, dan pengumuman resmi seputar Pondok Pesantren Mahasiswa Al-Qur'an (PesMaQu)
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
            @forelse($news as $item)
            <div class="bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
                
                <div class="relative overflow-hidden h-52">
                    <img src="{{ str_starts_with($item->image_url, 'http') ? $item->image_url : asset('storage/' . $item->image_url) }}" alt="Gambar Berita" class="w-full h-full object-cover pointer-events-none" />
                </div>
                
                <div class="p-6 flex flex-col flex-grow">
                    <div class="flex items-center gap-2 text-slate-400 text-xs font-semibold mb-4">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        <span>{{ \Carbon\Carbon::parse($item->created_at)->translatedFormat('d M Y') }}</span>
                    </div>
                    
                    <h3 class="text-xl font-bold mb-2 text-slate-800 tracking-tight leading-snug">{{ $item->title }}</h3>
                    
                    <p class="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-6">{{ $item->content }}</p>

                    <div class="mt-auto pt-2">
                        <a href="/baca/{{ $item->id }}" class="text-[#bf9000] font-bold text-sm hover:text-[#a37a00] transition flex items-center gap-1.5 group">
                            Baca Selengkapnya 
                            <span class="transform group-hover:translate-x-1 transition duration-200 text-lg leading-none">→</span>
                        </a>
                    </div>
                </div>
            </div>
            @empty
            <div class="col-span-full text-center py-12">
                <p class="text-gray-400 text-lg font-medium">Belum ada berita yang diterbitkan.</p>
            </div>
            @endforelse
        </div>

        <div class="mt-12 flex justify-center">
            {{ $news->links() }}
        </div>

    </div>
</div>
@endsection