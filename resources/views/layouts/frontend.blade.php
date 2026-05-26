<!DOCTYPE html>
<html lang="id" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title') - Pesmaqu</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

<body class="font-sans antialiased bg-base-100">
    
    <div class="navbar bg-white shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 w-full">

        <div class="flex justify-between items-center py-3">

    {{-- Logo --}}
    <div class="flex items-center gap-3">
        <a href="/">
            <img src="{{ asset('images/logo.jpg') }}"
                 alt="Logo PesMaQu"
                 class="h-12 w-auto">
        </a>
    </div>

    {{-- Nav links desktop --}}
    <div class="hidden lg:flex items-center gap-8 font-medium text-gray-700">
        <a href="/" class="relative pb-1 {{ request()->is('/') ? 'text-[#bf9000] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#bf9000]' : 'hover:text-[#bf9000]' }} transition">
            Beranda
        </a>
        <a href="/tentang-kami" class="relative pb-1 {{ request()->is('tentang-kami') ? 'text-[#bf9000] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#bf9000]' : 'hover:text-[#bf9000]' }} transition">
            Tentang Kami
        </a>
        <a href="/program-akademik" class="relative pb-1 {{ request()->is('program-akademik') ? 'text-[#bf9000] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#bf9000]' : 'hover:text-[#bf9000]' }} transition">
            Program Akademik
        </a>
        <a href="/#berita" class="hover:text-[#bf9000] transition">
            Berita
        </a>
    </div>

    {{-- Kanan desktop: PPDB + titik tiga --}}
    <div class="hidden lg:flex items-center gap-3">
        <a href="/ppdb"
           class="bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-2.5 px-6 rounded-full shadow-md transition duration-300">
            PPDB Online
        </a>

        {{-- Titik tiga — Login Admin tersembunyi, desktop saja --}}
        <div class="relative" x-data="{ open: false }" @click.outside="open = false">
            <button @click="open = !open"
                    class="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100 transition duration-200 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="1.5"/>
                    <circle cx="12" cy="12" r="1.5"/>
                    <circle cx="12" cy="19" r="1.5"/>
                </svg>
            </button>
            <div x-show="open"
                 x-transition:enter="transition ease-out duration-150"
                 x-transition:enter-start="opacity-0 scale-95"
                 x-transition:enter-end="opacity-100 scale-100"
                 x-transition:leave="transition ease-in duration-100"
                 x-transition:leave-start="opacity-100 scale-100"
                 x-transition:leave-end="opacity-0 scale-95"
                 class="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg z-50 py-1"
                 style="display: none;">
                <a href="/login"
                   class="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    Login Admin
                </a>
            </div>
        </div>
    </div>

    {{-- Kanan mobile: ☰ saja --}}
    <button id="menuButton"
            class="lg:hidden text-3xl text-[#bf9000]">
        ☰
    </button>

</div>

{{-- Desktop: hanya tombol PPDB --}}
            <div class="hidden lg:flex items-center gap-3">
                <a href="/ppdb"
                   class="bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-2.5 px-6 rounded-full shadow-md transition duration-300">
                    PPDB Online
                </a>
            </div>

            {{-- Mobile: tombol ☰ dan ⋮ berdampingan --}}
            <div class="lg:hidden flex items-center gap-2">

                {{-- Tombol hamburger ☰ --}}
                <button id="menuButton"
                        class="text-3xl text-[#bf9000]">
                    ☰
                </button>

            </div>
        </div>

        <div id="mobileMenu"
            class="hidden lg:hidden flex-col gap-4 pb-4 font-medium text-gray-700 border-t border-gray-100 pt-4 mt-2">

            <a href="/"
               class="hover:text-[#bf9000] transition">
                Beranda
            </a>

            <a href="/tentang-kami"
               class="hover:text-[#bf9000] transition">
                Tentang Kami
            </a>

            <a href="/program-akademik"
               class="hover:text-[#bf9000] transition">
                Program Akademik
            </a>

            <a href="/#berita"
               class="hover:text-[#bf9000] transition">
                Berita
            </a>

            <a href="/ppdb"
               class="bg-[#bf9000] hover:bg-[#a37a00] text-white font-bold py-2.5 px-6 rounded-full shadow-md transition duration-300 text-center">
                PPDB Online
            </a>

        </div>

    </div>
</div>

    <main>
        @yield('content')
    </main>

    <footer class="bg-gray-900 text-gray-300 py-12 border-t-4 border-[#bf9000]">
    <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
                <h3 class="text-2xl font-bold text-white mb-4"><span class="text-[#bf9000]">PESMAQU</span></h3>
                <p class="mb-4 text-sm leading-relaxed">Membangun Generasi Unggul & Berakhlak melalui pendidikan tinggi dan pemahaman Al-Qur'an.</p>
                <p class="text-sm">📍 Eduhill Residence 1, Klandungan, Landungsari, Kec. Dau, Kab. Malang.</p>
            </div>

            <div>
                <h3 class="text-lg font-bold text-white mb-4">Hubungi Kami</h3>
                <ul class="space-y-2 text-sm">
                    <li>WhatsApp: 0812-3456-7890</li>
                    <li>Email: info@pesmaqu.sch.id</li>
                </ul>
            </div>

            <div>
                <h3 class="text-lg font-bold text-white mb-4">Media Sosial</h3>
                <p class="text-sm mb-4">Ikuti kegiatan keseharian santri kami melalui platform berikut:</p>
                <div class="flex space-x-4">
                    
                    <a href="https://www.instagram.com/pesmaqubaiturridhwan/" target="_blank" class="text-gray-400 hover:text-[#bf9000] transition duration-300">
                        <span class="sr-only">Instagram</span>
                        <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                        </svg>
                    </a>

                    <a href="https://www.youtube.com/@baiturridwantv" target="_blank" class="text-gray-400 hover:text-[#bf9000] transition duration-300">
                        <span class="sr-only">YouTube</span>
                        <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
                        </svg>
                    </a>

                </div>
            </div>

        </div>
        <div class="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-center items-center gap-4">
            <span>&copy; {{ date('Y') }} PesMaQu Baitur Ridhwan. All rights reserved.</span>
            <a href="/login" class="hover:text-gray-300 transition">| Akses Admin</a>
        </div>
    </div>
</footer>
<script>
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    // Membuka/menutup menu saat tombol ☰ diklik
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Otomatis menutup menu saat salah satu link diklik
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
</script>
</body>
</html>