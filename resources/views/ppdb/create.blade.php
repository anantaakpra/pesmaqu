@extends('layouts.frontend')

@section('title', 'PPDB Online')

@section('content')
<div class="bg-gray-50 py-16 min-h-screen">
    <div class="container mx-auto px-4 max-w-2xl">
        
        <div class="text-center mb-10">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">Pendaftaran Santri Baru</h1>
            <p class="text-gray-600">Lengkapi formulir di bawah ini untuk bergabung dengan Pesmaqu.</p>
        </div>

        @if(session('success'))
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6 text-center" role="alert">
            <span class="block sm:inline font-bold">{{ session('success') }}</span>
        </div>
        @endif

        <div class="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <form action="/ppdb" method="POST">
                @csrf
                
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
                    <input type="text" name="name" placeholder="Masukkan nama lengkap anak" class="shadow-sm border-gray-300 rounded w-full py-2 px-3 bg-white text-gray-900 focus:ring focus:ring-blue-200" required>
                </div>
                
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Email Orang Tua/Wali</label>
                    <input type="email" name="email" placeholder="email@contoh.com" class="shadow-sm border-gray-300 rounded w-full py-2 px-3 bg-white text-gray-900 focus:ring focus:ring-blue-200" required>
                </div>

                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Nomor WhatsApp Aktif</label>
                    <input type="text" name="phone" placeholder="0812xxxxxxx" class="shadow-sm border-gray-300 rounded w-full py-2 px-3 bg-white text-gray-900 focus:ring focus:ring-blue-200" required>
                </div>

                <div class="mb-8">
                    <label class="block text-gray-700 text-sm font-bold mb-2">Asal Sekolah</label>
                    <input type="text" name="previous_school" placeholder="Nama SD/SMP asal" class="shadow-sm border-gray-300 rounded w-full py-2 px-3 bg-white text-gray-900 focus:ring focus:ring-blue-200" required>
                </div>
                
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded shadow-lg transition duration-200">
                    Kirim Pendaftaran
                </button>
            </form>
        </div>

    </div>
</div>
@endsection