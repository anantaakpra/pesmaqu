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
    
<div id="berita" class="py-20 px-4 md:px-8 bg-gray-50 scroll-mt-20">
    <div class="max-w-7xl mx-auto">

        <div class="text-center mb-12">
            <h4 class="text-[#bf9000] font-bold text-sm uppercase tracking-widest mb-2">Berita Terbaru</h4>
            <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Informasi & Kegiatan Terkini</h2>
            <p class="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
                Dapatkan informasi terbaru seputar kegiatan, prestasi, dan program PesMaQu
            </p>
        </div>

        <div class="relative px-2 md:px-6">
            <div id="newsSlider" class="flex overflow-x-auto gap-6 pb-4 snap-x no-scrollbar cursor-grab select-none">
                @foreach($news as $item)
                <div class="flex-none w-[300px] md:w-[340px] bg-white rounded-2xl shadow-sm border border-gray-100 snap-center flex flex-col overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                    
                    <img src="{{ str_starts_with($item->image_url, 'http') ? $item->image_url : asset('storage/' . $item->image_url) }}" alt="Gambar Berita" class="w-full h-52 object-cover pointer-events-none" />
                    
                    <div class="p-6 flex flex-col flex-grow">
                        <div class="flex items-center gap-2 text-gray-400 text-xs font-medium mb-3">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                            </svg>
                            <span>{{ \Carbon\Carbon::parse($item->created_at)->translatedFormat('d M Y') }}</span>
                        </div>
                        <h3 class="text-xl font-bold mb-2 text-gray-900 select-text">{{ $item->title }}</h3>
                        <p class="text-gray-500 text-sm line-clamp-2 mb-6 select-text">{{ $item->content }}</p>
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
        </div>

        {{-- Dots indicator --}}
        <div id="newsDots" class="flex justify-center gap-2 mt-6"></div>

    </div>
</div>

<style>
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
</style>

<script>
    const slider = document.getElementById('newsSlider');
    const dotsContainer = document.getElementById('newsDots');

    if (slider) {
        let isDown = false, startX, scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('cursor-grabbing');
            slider.classList.remove('cursor-grab');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');
            slider.classList.add('cursor-grab');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');
            slider.classList.add('cursor-grab');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            slider.scrollLeft = scrollLeft - (e.pageX - slider.offsetLeft - startX) * 2;
        });

        function buildDots() {
            const cards = slider.querySelectorAll(':scope > div');
            const total = cards.length;
            if (total <= 1) return;
            const cardW = (slider.querySelector(':scope > div')?.offsetWidth || 340) + 24;
            const visibleCount = Math.max(1, Math.round(slider.offsetWidth / cardW));
            const pageCount = Math.max(1, total - visibleCount + 1);

            dotsContainer.innerHTML = '';
            for (let i = 0; i < pageCount; i++) {
                const dot = document.createElement('span');
                dot.className = 'w-2.5 h-2.5 rounded-full cursor-pointer transition-colors duration-300 ' + (i === 0 ? 'bg-[#bf9000]' : 'bg-gray-300');
                dot.addEventListener('click', () => slider.scrollTo({ left: i * cardW, behavior: 'smooth' }));
                dotsContainer.appendChild(dot);
            }
        }

        function updateDots() {
            const dots = dotsContainer.querySelectorAll('span');
            if (!dots.length) return;
            const cardW = (slider.querySelector(':scope > div')?.offsetWidth || 340) + 24;
            const activeIndex = Math.round(slider.scrollLeft / cardW);
            dots.forEach((d, i) => {
                d.classList.toggle('bg-[#bf9000]', i === activeIndex);
                d.classList.toggle('bg-gray-300', i !== activeIndex);
            });
        }

        slider.addEventListener('scroll', updateDots, { passive: true });
        window.addEventListener('resize', buildDots);
        setTimeout(buildDots, 100);
    }
</script>
@endsection