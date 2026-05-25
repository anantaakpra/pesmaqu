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
        <div class="relative">
            <div id="newsSlider" class="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4">
                @foreach($all_news as $news)
                <div class="min-w-[300px] max-w-[300px] bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex-shrink-0">
                    <img src="{{ $news->image_url }}" alt="{{ $news->title }}" class="w-full h-48 object-cover">
                    <div class="p-5">
                        <h3 class="text-lg font-bold text-gray-800 mb-2 leading-snug">{{ $news->title }}</h3>
                        <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
                            {{ $news->content }}
                        </p>

                        <div class="card-actions justify-end mt-4">
                            <a href="/baca/{{ $news->id }}"
                                class="text-[#bf9000] font-semibold hover:text-[#a37a00] transition duration-300">
                                Baca Selengkapnya →
                            </a>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

            <div class="flex justify-center gap-4 mt-6">
                <button onclick="scrollSlider(-1)"
                    class="bg-[#bf9000] hover:bg-[#a37a00] text-white px-5 py-2 rounded-full">
                    ←
                </button>

                <button onclick="scrollSlider(1)"
                    class="bg-[#bf9000] hover:bg-[#a37a00] text-white px-5 py-2 rounded-full">
                    →
                </button>
            </div>
        </div>

        <style>
            .no-scrollbar::-webkit-scrollbar {
                display: none;
            }

            .no-scrollbar {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
        </style>

        <script>
            function scrollSlider(direction) {
                const slider = document.getElementById('newsSlider');
                const scrollAmount = 400;

                slider.scrollBy({
                    left: direction * scrollAmount,
                    behavior: 'smooth'
                });
            }
        </script>
    </div>
@endsection
