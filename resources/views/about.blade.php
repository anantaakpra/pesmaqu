@extends('layouts.frontend')

@section('title', 'Tentang PesMaQu')

@section('content')
<div class="bg-[#bf9000] py-20 border-b-4 border-orange-500">
    <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">Profil PesMaQu Baitur Ridhwan</h1>
        <p class="text-white text-lg max-w-2xl mx-auto opacity-90">Mengenal lebih dekat pesantren mahasiswa yang berdedikasi mencetak generasi Qur'ani yang unggul.</p>
    </div>
</div>

<div class="py-16 bg-white">
    <div class="container mx-auto px-4 max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            <div>
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Pesantren Mahasiswa Al-Qur'an</h2>
                <p class="text-gray-600 mb-4 leading-relaxed">
                    <strong>PesMaQu Baitur Ridhwan</strong> adalah pondok pesantren di Malang yang dirancang khusus untuk kalangan mahasiswa. Di bawah asuhan <strong>Gus Muqorrobin El-Haruny</strong>, kami berfokus pada program Tahfidzul Qur'an serta pendalaman kajian Islam klasik maupun modern.
                </p>
                
                <div class="mt-8">
                    <h3 class="text-xl font-bold text-gray-900 mb-4 border-b-2 border-[#bf9000] pb-2 inline-block">Fasilitas Beasiswa Santri</h3>
                    <p class="text-gray-600 mb-3">Seluruh santri berkesempatan mendapatkan beasiswa pendidikan gratis dengan fasilitas lengkap berikut:</p>
                    <ul class="list-none space-y-3 text-gray-700">
                        <li class="flex items-center"><span class="text-[#bf9000] mr-2">✓</span> Kamar asrama mahasiswa yang nyaman</li>
                        <li class="flex items-center"><span class="text-[#bf9000] mr-2">✓</span> Konsumsi makan 2 kali sehari</li>
                        <li class="flex items-center"><span class="text-[#bf9000] mr-2">✓</span> Fasilitas penunjang: Listrik, Air Bersih, & WiFi terkontrol</li>
                        <li class="flex items-center"><span class="text-[#bf9000] mr-2">✓</span> Lingkungan masjid & ruang kegiatan santri yang kondusif</li>
                        <li class="flex items-center"><span class="text-[#bf9000] mr-2">✓</span> Pendampingan akhlak, kedisiplinan, serta pengembangan minat bakat</li>
                    </ul>
                </div>

                <div class="bg-orange-50 p-6 rounded-lg border-l-4 border-[#bf9000] shadow-sm mt-10">
                    <h3 class="font-bold text-lg text-[#bf9000] mb-2">📍 Lokasi Pesantren</h3>
                    <p class="text-gray-700 font-medium">Eduhill Residence 1, Dusun Klandungan, Landungsari, Kec. Dau, Kab. Malang, Jawa Timur.</p>
                </div>
            </div>

            <div class="sticky top-24">
                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" alt="Asrama PesMaQu" class="rounded-xl shadow-lg w-full h-auto object-cover">
            </div>

        </div>
    </div>
</div>
@endsection