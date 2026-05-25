<x-app-layout>
    <x-slot name="header">
        <div class="flex items-center gap-3">
            <img src="{{ asset('images/logo.jpg') }}" alt="Logo PesMaQu" class="h-10 w-auto">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard Admin Pesmaqu') }}
            </h2>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-10">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center space-x-4">
                    <div class="p-3 rounded-full bg-blue-100 text-blue-600">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path></svg>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-500">Total Berita</p>
                        <h4 class="text-2xl font-bold text-gray-900">{{ $total_news }}</h4>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center space-x-4">
                    <div class="p-3 rounded-full bg-indigo-100 text-indigo-600">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-500">Total Pendaftar</p>
                        <h4 class="text-2xl font-bold text-gray-900">{{ $total_registrants }}</h4>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center space-x-4">
                    <div class="p-3 rounded-full bg-green-100 text-green-600">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-500">Diterima</p>
                        <h4 class="text-2xl font-bold text-gray-900">{{ $accepted }}</h4>
                    </div>
                </div>

                <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center space-x-4">
                    <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-500">Menunggu Seleksi</p>
                        <h4 class="text-2xl font-bold text-gray-900">{{ $pending }}</h4>
                    </div>
                </div>
            </div>
            <div>
                <div class="mb-4 flex justify-between items-center">
                    <h3 class="text-xl font-bold text-gray-800">Manajemen Berita</h3>
                    <a href="/berita/tambah" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow inline-block">
                        + Tambah Berita Baru
                    </a>
                </div>
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-200">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th class="border-b py-4 px-6 bg-gray-50 font-semibold text-gray-600">Judul Berita</th>
                                    <th class="border-b py-4 px-6 bg-gray-50 font-semibold text-gray-600 text-center">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($news as $item)
                                <tr class="hover:bg-gray-50">
                                    <td class="border-b py-4 px-6 text-blue-600 font-medium">{{ $item->title }}</td>
                                    <td class="border-b py-4 px-6 text-center">
                                        <a href="/berita/{{ $item->id }}/edit" class="text-blue-500 hover:text-blue-700 font-semibold mr-3 inline-block">Edit</a>
                                        <form action="/berita/{{ $item->id }}" method="POST" class="inline" onsubmit="return confirm('Yakin ingin menghapus berita ini?');">
                                            @csrf
                                            @method('DELETE')
                                            <button type="submit" class="text-red-500 hover:text-red-700 font-semibold">Hapus</button>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <hr class="border-gray-300">

            <div>
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-gray-800">Data Pendaftar PPDB Online</h3>
                </div>
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg border border-gray-200">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th class="border-b py-4 px-6 bg-gray-50 font-semibold text-gray-600">Nama Calon Siswa</th>
                                    <th class="border-b py-4 px-6 bg-gray-50 font-semibold text-gray-600">Kontak (WA / Email)</th>
                                    <th class="border-b py-4 px-6 bg-gray-50 font-semibold text-gray-600">Asal Sekolah</th>
                                    <th class="border-b py-4 px-6 bg-gray-50 font-semibold text-gray-600 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($registrations as $reg)
                                <tr class="hover:bg-gray-50">
                                    <td class="border-b py-4 px-6 font-bold text-gray-900">{{ $reg->name }}</td>
                                    <td class="border-b py-4 px-6 text-gray-700">
                                        <div class="font-medium text-green-600">{{ $reg->phone }}</div>
                                        <div class="text-sm text-gray-500">{{ $reg->email }}</div>
                                    </td>
                                    <td class="border-b py-4 px-6 text-gray-700">{{ $reg->previous_school }}</td>
                                    <td class="border-b py-4 px-6 text-center">
                                    <span class="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full mb-2 
                                        {{ $reg->status == 'Diterima' ? 'bg-green-100 text-green-800' : 
                                        ($reg->status == 'Ditolak' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800') }}">
                                        {{ $reg->status }}
                                    </span>
                                    
                                    <div class="flex justify-center gap-2 mt-1">
                                        <form action="/ppdb/{{ $reg->id }}/status" method="POST">
                                            @csrf
                                            @method('PATCH')
                                            <input type="hidden" name="status" value="Diterima">
                                            <button type="submit" class="text-xs bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded transition">Terima</button>
                                        </form>

                                        <form action="/ppdb/{{ $reg->id }}/status" method="POST">
                                            @csrf
                                            @method('PATCH')
                                            <input type="hidden" name="status" value="Ditolak">
                                            <button type="submit" class="text-xs bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded transition">Tolak</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
</x-app-layout>