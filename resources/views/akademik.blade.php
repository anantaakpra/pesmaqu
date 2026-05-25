@extends('layouts.frontend')

@section('title', 'Program Pendidikan')

@section('content')
<div class="bg-[#bf9000] py-20 border-b-4 border-orange-500">
    <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Program Pendidikan</h1>
        <p class="text-white text-lg max-w-2xl mx-auto opacity-90">Kurikulum komprehensif yang dirancang khusus untuk menyeimbangkan kebutuhan akademik mahasiswa dan kedalaman ilmu agama.</p>
    </div>
</div>

<div class="py-16 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300">
                <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Tahfidzul Qur'an" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-[#bf9000] mb-2">Tahfidzul Qur'an</h3>
                    <p class="text-gray-600 leading-relaxed">Program bimbingan intensif yang berfokus pada hafalan Al-Qur'an serta peningkatan kualitas bacaan (Tahsin) bagi mahasiswa.</p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300">
                <img src="https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=2070&auto=format&fit=crop" alt="Dirosah Islamiyah" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-[#bf9000] mb-2">Dirosah Islamiyah</h3>
                    <p class="text-gray-600 leading-relaxed">Kajian Islam klasik dan modern yang mencakup ilmu Aqidah, Fiqih, Ushul Fiqih, Tafsir, Hadits, Tasawuf, Tajwid, hingga Nahwu-Shorof.</p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition duration-300">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop" alt="Program Beasiswa" class="w-full h-48 object-cover">
                <div class="p-6">
                    <h3 class="text-xl font-bold text-[#bf9000] mb-2">Beasiswa Penuh</h3>
                    <p class="text-gray-600 leading-relaxed">Program pendidikan gratis bersyarat yang mencakup fasilitas asrama, konsumsi, dan akses internet guna mendukung perkuliahan santri.</p>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection