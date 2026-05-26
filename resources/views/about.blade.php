@extends('layouts.frontend')

@section('title', 'Tentang Kami')

@section('content')
<div class="hero min-h-[35vh] bg-gray-800 bg-cover bg-center relative" style="background-image: url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop');">
    <div class="hero-overlay bg-black bg-opacity-65"></div>
    <div class="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left text-white py-12">
        <div class="text-sm font-bold mb-3 tracking-wide">
            <a href="/" class="text-white hover:underline transition">Beranda</a> 
            <span class="text-gray-400 mx-2">/</span> 
            <span class="text-[#bf9000]">Tentang Kami</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight">Tentang Kami</h1>
        <div class="w-20 h-1.5 bg-[#bf9000] rounded-full"></div>
    </div>
</div>

<div class="bg-gray-50 py-16 px-4 md:px-8 min-h-screen">
    <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div class="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
                <div class="flex items-center gap-3 text-[#bf9000]">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <h2 class="text-2xl font-bold text-slate-800">Mengenal PesMaQu</h2>
                </div>
                <p class="text-slate-600 leading-relaxed text-base md:text-lg">
                    <strong>Pondok Pesantren Mahasiswa Al-Qur'an (PesMaQu) Baitur Ridhwan Malang</strong> adalah lembaga pendidikan Islam non-formal khusus mahasiswa laki-laki yang memadukan tradisi kepesantrenan dengan tuntutan akademik perguruan tinggi.
                </p>
                <p class="text-slate-600 leading-relaxed">
                    Pesantren yang dipimpin oleh <strong>Gus Muqorrobin El-Haruny</strong> ini dirancang sebagai ekosistem edukatif yang bersih dan kondusif bagi mahasiswa di kawasan Malang Barat untuk menyeimbangkan pencapaian dunia perkuliahan dan pendalaman spiritual keislaman.
                </p>
                
                <div class="p-5 bg-amber-50/50 border-l-4 border-[#bf9000] rounded-r-2xl mt-6">
                    <p class="text-sm italic text-slate-700 font-medium">"Didesain sebagai wadah dinamis untuk melahirkan sarjana muslim yang profesional, berkarakter disiplin tinggi, memiliki kedalaman ilmu syariat, serta berkhidmah tulus kepada guru dan masyarakat."</p>
                    <span class="block text-xs font-bold text-[#bf9000] mt-2">— Pengasuh, Gus Muqorrobin El-Haruny</span>
                </div>
            </div>

            <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl shadow-md text-white space-y-6">
                <h3 class="text-xl font-bold tracking-tight text-[#bf9000] flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    Karakteristik Santri
                </h3>
                <ul class="space-y-4 text-sm text-slate-300">
                    <li class="flex gap-3">
                        <span class="text-[#bf9000] text-lg font-bold leading-none">✓</span>
                        <div>
                            <strong class="text-white block mb-0.5">Ideologi Moderat (Aswaja)</strong>
                            Wajib berpaham moderat sesuai prinsip Ahlussunnah wal Jama'ah dan berkomitmen tinggi menghargai keberagaman.
                        </div>
                    </li>
                    <li class="flex gap-3">
                        <span class="text-[#bf9000] text-lg font-bold leading-none">✓</span>
                        <div>
                            <strong class="text-white block mb-0.5">Target Santri</strong>
                            Dikhususkan bagi mahasiswa aktif laki-laki (putra) perguruan tinggi di Malang.
                        </div>
                    </li>
                    <li class="flex gap-3">
                        <span class="text-[#bf9000] text-lg font-bold leading-none">✓</span>
                        <div>
                            <strong class="text-white block mb-0.5">Komitmen Tinggi & Khidmah</strong>
                            Memiliki tingkat kedisiplinan tinggi, serta siap untuk taat dan berkhidmah kepada guru serta pesantren.
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div class="space-y-4">
                    <div class="flex items-center gap-2 text-[#bf9000]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <h3 class="text-xl font-bold text-slate-800">Lokasi & Akses Strategis</h3>
                    </div>
                    <p class="text-slate-600 leading-relaxed text-sm md:text-base">
                        PesMaQu terletak di <strong>Perumahan Eduhill Residence 1, Klandungan, Landungsari, Kec. Dau, Kab. Malang</strong>.
                    </p>
                    <p class="text-slate-500 text-sm leading-relaxed">
                        Lokasi kami berada tepat di perbatasan strategis antara Kota Malang dan Kabupaten Malang (kawasan Malang Barat), memberikan kemudahan akses mobilitas yang luar biasa dekat bagi santri yang menempuh perkuliahan di kampus-kampus besar seperti <strong>UMM, UIN Maliki Malang, dan UNISMA</strong>.
                    </p>
                </div>
                <div class="w-full h-48 md:h-64 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden relative flex flex-col items-center justify-center p-6 text-center shadow-inner">
                    <span class="text-3xl mb-2">📍</span>
                    <span class="font-bold text-slate-800 text-sm">Eduhill Residence 1, Landungsari</span>
                    <span class="text-xs text-slate-400 mt-1">Kec. Dau, Kabupaten Malang, East Java</span>
                    <div class="absolute bottom-4">
                        <span class="text-xs font-bold text-[#bf9000] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">Dekat UMM / UIN / UNISMA</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
@endsection