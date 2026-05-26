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
    <div class="max-w-7xl mx-auto">
        
        <div class="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 class="text-2xl font-bold text-slate-800 mb-4">Program Pendidikan Unggulan</h2>
            <p class="text-slate-600 leading-relaxed">
                Silakan isi detail kurikulum, jadwal kajian, target hafalan tahfidz mahasiswa, atau program beasiswa penuh di sini...
            </p>
        </div>

    </div>
</div>
@endsection