@extends('layouts.frontend')

@section('title', 'Beranda')

@section('content')
    <div class="hero min-h-[70vh] bg-gray-800 bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop');">
    <div class="hero-overlay bg-black bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content py-20">
        <div class="max-w-4xl">
            <h1 class="mb-5 text-4xl md:text-5xl font-bold text-white leading-tight">Pondok Pesantren Mahasiswa Al-Qur'an (PesMaQu)</h1>
            <p class="mb-8 text-gray-200 text-lg">PesMaQu Baitur Ridhwan hadir untuk mahasiswa di Malang. Menggabungkan program Tahfidz, kajian Islam klasik/modern, dan beasiswa pendidikan penuh di bawah asuhan Gus Muqorrobin El-Haruny.</p>
            
            <a href="/program-akademik" class="bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition duration-300 inline-block border-none">
                Jelajahi Program Kami
            </a>
        </div>
    </div>
    </div>
    
    <div id="berita" class="py-20 px-4 md:px-12 bg-white">
        <h2 class="text-3xl font-bold text-center mb-12">Berita Terkini</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            @foreach($all_news as $news)
            <div class="card bg-base-100 shadow-xl overflow-hidden border border-base-200">
                <figure><img src="{{ $news->image_url }}" alt="berita" class="h-48 w-full object-cover" /></figure>
                <div class="card-body p-6">
                    <h2 class="card-title text-[#bf9000] font-bold">{{ $news->title }}</h2>
                    
                    <p class="text-gray-600 line-clamp-3">{{ $news->content }}</p>
                    
                    <div class="card-actions justify-end mt-4">
                        <a href="/baca/{{ $news->id }}" class="text-[#bf9000] font-semibold hover:text-[#a37a00] transition duration-300">Baca Selengkapnya →</a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
@endsection