@extends('layouts.frontend')

@section('title', 'Program Akademik')

@section('content')
<div class="hero min-h-[35vh] bg-gray-800 bg-cover bg-center relative" style="background-image: url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop');">
    <div class="hero-overlay bg-black bg-opacity-65"></div>
    <div class="w-full max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-left text-white py-12">
        <div class="text-sm font-bold mb-3 tracking-wide">
            <a href="/" class="text-white hover:underline transition">Beranda</a> 
            <span class="text-gray-400 mx-2">/</span> 
            <span class="text-[#bf9000]">Program Akademik</span>
        </div>
        <h1 class="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight">Program Akademik</h1>
        <div class="w-20 h-1.5 bg-[#bf9000] rounded-full"></div>
    </div>
</div>

<div class="bg-gray-50 py-16 px-4 md:px-8 min-h-screen">
    <div class="max-w-7xl mx-auto space-y-12">
        
        <div class="text-center max-w-2xl mx-auto mb-6">
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">Integrasi Kurikulum Terpadu</h2>
            <p class="text-slate-500 text-sm md:text-base leading-relaxed">
                PesMaQu Baitur Ridhwan secara khusus mengintegrasikan dua pilar utama pendidikan keislaman: Program Menghafal Al-Qur'an dan Pendalaman Kitab-Kitab Klasik Islam.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4 flex flex-col justify-between">
                <div class="space-y-4">
                    <div class="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-[#bf9000]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 tracking-tight">Tahfidz Al-Qur'an</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">
                        Program komprehensif yang dirancang terukur guna memandu mahasiwa dalam proses menghafal, menjaga hafalan (*Muroja'ah*), serta pembetulan bacaan secara ketat.
                    </p>
                    <div class="p-4 bg-gray-50 rounded-xl border border-gray-100 text-xs text-slate-500 font-medium leading-relaxed">
                        ✨ <strong>Keunggulan Utama:</strong> Adanya program <em>Talaqqi Al-Fatihah Bersanad</em>, di mana sanad bacaan tersambung sahih dan mutawatir langsung hingga ke pangkuan Rasulullah ﷺ.
                    </div>
                </div>
            </div>

            <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4 flex flex-col justify-between">
                <div class="space-y-4">
                    <div class="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-[#bf9000]">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 tracking-tight">Dirosah Islamiyah</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">
                        Kajian mendalam ilmu-ilmu keislaman klasik (Kitab Kuning) dan modern guna membekali intelektual mahasiswa agar memiliki wawasan keagamaan yang kokoh, lurus, dan kontekstual.
                    </p>
                    
                    <div class="grid grid-cols-2 gap-2 pt-2">
                        <div class="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-semibold text-slate-700 border border-gray-100">📖 Fiqih & Ushul Fiqih</div>
                        <div class="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-semibold text-slate-700 border border-gray-100">📚 Tafsir & Ilmu Hadits</div>
                        <div class="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-semibold text-slate-700 border border-gray-100">💎 Tasawuf & Tajwid</div>
                        <div class="px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-semibold text-slate-700 border border-gray-100">🗣️ Nahwu & Sharaf (Gramatika)</div>
                    </div>
                </div>
            </div>
        </div>

    <div class="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 rounded-3xl shadow-md text-white w-full">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center w-full">
            
            <div class="lg:col-span-3 space-y-6">
                <span class="text-[#bf9000] text-xs font-bold uppercase tracking-widest block">Benefit Khusus Santri</span>
                <h3 class="text-2xl md:text-3xl font-extrabold tracking-tight">Fasilitas Penunjang & Program Beasiswa</h3>
                <p class="text-slate-300 text-sm md:text-base leading-relaxed">
                    PesMaQu berkomitmen meringankan beban akomodasi mahasiswa berprestasi selama masa studi mereka di Malang melalui program beasiswa penuh.
                </p>
                    
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-700/60">
                    <div class="space-y-1">
                        <h4 class="text-white font-bold text-base flex items-center gap-2">
                            <span class="text-[#bf9000] text-xl">🏠</span> Asrama & Makan Gratis
                        </h4>
                        <p class="text-slate-400 text-xs leading-relaxed">Tersedia kuota khusus Beasiswa Santri Baru yang mencakup gratis fasilitas tempat tinggal dan konsumsi harian penuh bagi santri yang lolos seleksi.</p>
                    </div>
                    <div class="space-y-1">
                        <h4 class="text-white font-bold text-base flex items-center gap-2">
                            <span class="text-[#bf9000] text-xl">🕌</span> Pusat Kegiatan Masjid
                        </h4>
                        <p class="text-slate-400 text-xs leading-relaxed">Seluruh poros kegiatan peribadahan, sholat berjamaah lima waktu, pengkajian kitab, hingga sholat tarawih berpusat khidmat di Masjid Baitur Ridhwan.</p>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-2 grid grid-cols-2 gap-4 w-full">       
                <div class="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition duration-300 group shadow-sm">
                    <span class="text-2xl mb-3 block">🎁</span>
                    <div>
                        <span class="block text-white font-bold text-sm tracking-tight">Beasiswa 100%</span>
                        <span class="text-[11px] text-slate-400 leading-none">Bagi Santri Lolos Seleksi</span>
                    </div>
               </div>

            <div class="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition duration-300 group shadow-sm">
                <span class="text-2xl mb-3 block">🍱</span>
                <div>
                        <span class="block text-white font-bold text-sm tracking-tight">Konsumsi Gratis</span>
                        <span class="text-[11px] text-slate-400 leading-none">Fasilitas Makan Harian</span>
                </div>
           </div>
           <div class="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition duration-300 group shadow-sm">
                <span class="text-2xl mb-3 block">✨</span>
                <div>
                    <span class="block text-white font-bold text-sm tracking-tight">Talaqqi Sanad</span>
                    <span class="text-[11px] text-slate-400 leading-none">Tersambung ke Rasulullah ﷺ</span>
                </div>
            </div>

            <div class="bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition duration-300 group shadow-sm">
                <span class="text-2xl mb-3 block">📍</span>
                    <div>
                        <span class="block text-white font-bold text-sm tracking-tight">Kawasan Strategis</span>
                        <span class="text-[11px] text-slate-400 leading-none">Dekat UMM, UIN, UNISMA</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection