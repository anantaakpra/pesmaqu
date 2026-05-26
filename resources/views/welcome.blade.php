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
    
    <div id="berita" class="py-20 px-4 md:px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
        
        <div class="text-center mb-12">
            <h4 class="text-[#bf9000] font-bold text-sm uppercase tracking-widest mb-2">Berita Terbaru</h4>
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Informasi & Kegiatan Terkini</h2>
            <p class="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                Dapatkan informasi terbaru seputar kegiatan, prestasi, dan program PesMaQu
            </p>
        </div>

        <div class="relative px-12 md:px-16">
            
            <button onclick="scrollSlider(-1)"
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-[#bf9000] hover:bg-[#a37a00] text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg transition duration-300 z-10">
                ←
            </button>

            <div id="newsSlider" class="flex overflow-x-auto gap-6 pb-8 snap-x no-scrollbar cursor-grab select-none">
                
                @foreach($news as $item)
                <div class="flex-none w-[300px] md:w-[340px] bg-white rounded-2xl shadow-sm border border-gray-100 snap-center flex flex-col overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                    
                    <img src="{{ asset('storage/' . $item->image_url) }}" alt="Gambar Berita" class="w-full h-52 object-cover" />
                    
                    <div class="p-6 flex flex-col flex-grow">
                        
                        <div class="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>{{ \Carbon\Carbon::parse($item->created_at)->translatedFormat('d M Y') }}</span>
                        </div>
                        
                        <h3 class="text-xl font-bold mb-2 text-gray-900">{{ $item->title }}</h3>
                        
                        <p class="text-gray-500 text-sm line-clamp-2 mb-6">
                            {{ $item->content }}
                        </p>

                        <div class="mt-auto">
                            <a href="/baca/{{ $item->id }}"
                               class="text-[#bf9000] font-bold text-sm hover:text-[#a37a00] transition flex items-center gap-2">
                                Baca Selengkapnya <span class="text-lg leading-none">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                @endforeach

            </div>

            <button onclick="scrollSlider(1)"
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-[#bf9000] hover:bg-[#a37a00] text-white w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-lg transition duration-300 z-10">
                →
            </button>
        </div>

        <div class="flex justify-center gap-2 mt-4">
            <span class="w-2.5 h-2.5 rounded-full bg-[#bf9000]"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
            <span class="w-2.5 h-2.5 rounded-full bg-gray-300"></span>
        </div>

    </div>
</div>
            <div class="flex justify-center gap-4 mt-8">
                <button onclick="scrollSlider(-1)"
                    class="bg-[#bf9000] hover:bg-[#a37a00] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition duration-300">
                    ←
                </button>

                <button onclick="scrollSlider(1)"
                    class="bg-[#bf9000] hover:bg-[#a37a00] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition duration-300">
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

        <<script>
            // --- 1. KODE MENU HP ---
            const menuButton = document.getElementById('menuButton');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileLinks = mobileMenu.querySelectorAll('a');

            // Membuka/menutup menu
            menuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex'); // Dinamis menambah flex
            });

            // Otomatis menutup saat link diklik
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex'); // Dinamis menghapus flex
                });
            });

            // --- 2. KODE DRAG TO SCROLL BERITA ---
            const slider = document.getElementById('newsSlider');
            
            // Proteksi: Script hanya berjalan JIKA elemen newsSlider ada di halaman tersebut
            if (slider) {
                let isDown = false;
                let startX;
                let scrollLeft;

                slider.addEventListener('mousedown', (e) => {
                    isDown = true;
                    slider.classList.add('cursor-grabbing');
                    slider.classList.remove('cursor-grab');
                    startX = e.pageX - slider.offsetLeft;
                    scrollLeft = slider.scrollLeft;
                });

                slider.addEventListener('mouseleave', () => {
                    isDown = false;
                    slider.classList.add('cursor-grab');
                    slider.classList.remove('cursor-grabbing');
                });

                slider.addEventListener('mouseup', () => {
                    isDown = false;
                    slider.classList.add('cursor-grab');
                    slider.classList.remove('cursor-grabbing');
                });

                slider.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - slider.offsetLeft;
                    const walk = (x - startX) * 2;
                    slider.scrollLeft = scrollLeft - walk;
                });
            }
        </script>
    </div>
@endsection