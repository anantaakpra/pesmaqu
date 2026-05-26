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
        
        <div class="relative max-w-7xl mx-auto">
            
            <div id="newsSlider" class="flex overflow-x-auto gap-6 pb-4 snap-x no-scrollbar mx-auto w-fit max-w-full px-2 cursor-grab select-none">
                
                @foreach($news as $item)
                
                <div class="flex-none w-80 bg-white border border-gray-200 shadow-xl rounded-xl snap-center flex flex-col">
                    <figure>
                        <img src="{{ $item->image_url }}" alt="Gambar Berita" class="w-full h-48 object-cover rounded-t-xl" />
                    </figure>
                    
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-xl font-bold mb-2 text-gray-800">{{ $item->title }}</h3>
                        
                        <p class="text-gray-600 line-clamp-3 mb-4">
                            {{ $item->content }}
                        </p>

                        <div class="card-actions justify-end mt-auto">
                            <a href="/baca/{{ $item->id }}"
                               class="text-[#bf9000] font-semibold hover:text-[#a37a00] transition duration-300">
                                Baca Selengkapnya →
                            </a>
                        </div>
                    </div>
                </div>
                
                @endforeach
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

        <script>
            function scrollSlider(direction) {
                            // --- KODE DRAG TO SCROLL BERITA ---
                const slider = document.getElementById('newsSlider');
                let isDown = false;
                let startX;
                let scrollLeft;

                // Saat klik kiri mouse ditekan
                slider.addEventListener('mousedown', (e) => {
                    isDown = true;
                    slider.classList.add('cursor-grabbing'); // Ubah kursor jadi "tangan mengepal"
                    slider.classList.remove('cursor-grab');
                    startX = e.pageX - slider.offsetLeft;
                    scrollLeft = slider.scrollLeft;
                });

                // Saat kursor mouse keluar dari area berita
                slider.addEventListener('mouseleave', () => {
                    isDown = false;
                    slider.classList.add('cursor-grab');
                    slider.classList.remove('cursor-grabbing');
                });

                // Saat klik kiri mouse dilepas
                slider.addEventListener('mouseup', () => {
                    isDown = false;
                    slider.classList.add('cursor-grab');
                    slider.classList.remove('cursor-grabbing');
                });

                // Saat mouse digeser (dalam kondisi ditekan)
                slider.addEventListener('mousemove', (e) => {
                    if (!isDown) return; // Hentikan jika mouse tidak ditahan
                    e.preventDefault(); // Mencegah perilaku default browser
                    
                    const x = e.pageX - slider.offsetLeft;
                    const walk = (x - startX) * 2; // Angka 2 adalah sensitivitas/kecepatan geser
                    slider.scrollLeft = scrollLeft - walk;
                });
                // ----------------------------------
        }
        </script>
    </div>
@endsection