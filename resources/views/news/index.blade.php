@extends('layouts.frontend')

@section('title', 'Berita')

@section('content')
<div class="bg-white py-12 px-4 md:px-8 border-b border-gray-100">
    <div class="max-w-7xl mx-auto">
        
        <div class="mb-10">
            <div class="text-sm font-bold mb-3 tracking-wide">
                <a href="/" class="text-[#bf9000] hover:underline">Beranda</a> 
                <span class="text-gray-400 mx-2">/</span> 
                <span class="text-gray-400">Berita</span>
            </div>
            <h1 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight">Berita & Informasi</h1>
            <div class="w-24 h-1.5 bg-[#bf9000] rounded-full"></div>
        </div>

        <form action="/berita" method="GET" class="flex flex-col md:flex-row gap-4 max-w-4xl">
            
            <div class="flex-grow relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </span>
                <input type="text" name="search" value="{{ request('search') }}" placeholder="Cari judul atau isi berita..." 
                       class="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 transition shadow-sm outline-none bg-gray-50 focus:bg-white text-gray-700">
            </div>
            
            <div class="md:w-56 flex-shrink-0">
                <select name="filter" onchange="this.form.submit()" 
                        class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#bf9000] focus:ring-2 focus:ring-[#bf9000]/20 transition shadow-sm outline-none bg-gray-50 focus:bg-white text-gray-700 font-medium cursor-pointer">
                    <option value="terbaru" {{ request('filter') == 'terbaru' ? 'selected' : '' }}>Urutkan: Terbaru</option>
                    <option value="terlama" {{ request('filter') == 'terlama' ? 'selected' : '' }}>Urutkan: Terlama</option>
                </select>
            </div>

            <button type="submit" class="md:hidden bg-[#bf9000] text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:bg-[#a37a00] transition">
                Cari Berita
            </button>
            
        </form>

    </div>
</div>

<div class="bg-gray-50 py-12 px-4 md:px-8 min-h-screen">
    <div class="max-w-7xl mx-auto">
        
        @if(request()->has('search') && request()->search != '')
        <div class="mb-8 text-gray-600 font-medium">
            Menampilkan hasil pencarian untuk: <span class="text-slate-900 font-bold">"{{ request('search') }}"</span>
            <a href="/berita" class="ml-3 text-sm text-red-500 hover:underline">(Hapus Filter)</a>
        </div>
        @endif

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
            <div class="col-span-full flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-300 shadow-sm">
                <svg class="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5L18.5 7H20"></path></svg>
                <h3 class="text-xl font-bold text-gray-700 mb-2">Berita Tidak Ditemukan</h3>
                <p class="text-gray-500 text-sm text-center max-w-md">Maaf, kami tidak menemukan berita yang cocok dengan kata kunci tersebut. Coba gunakan kata kunci lain.</p>
                <a href="/berita" class="mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 px-6 rounded-full transition">Kembali ke Semua Berita</a>
            </div>
            @endforelse
        </div>

        <div class="mt-12 flex justify-center w-full overflow-x-auto">
            {{ $news->links() }}
        </div>

    </div>
</div>
@endsection