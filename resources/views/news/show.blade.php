@extends('layouts.frontend')

@section('title', $news->title)

@section('content')
<div class="bg-gray-50 py-16 min-h-screen">
    <div class="container mx-auto px-4 max-w-4xl">
        
        <div class="mb-6">
            <a href="/" class="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                ← Kembali ke Beranda
            </a>
        </div>

        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <img src="{{ $news->image_url }}" alt="{{ $news->title }}" class="w-full h-[400px] object-cover">
            
            <div class="p-8 md:p-12">
                <p class="text-sm text-gray-500 mb-4">{{ $news->created_at->format('d F Y') }}</p>
                
                <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                    {{ $news->title }}
                </h1>
                
                <div class="prose max-w-none text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {{ $news->content }}
                </div>
            </div>
        </div>

    </div>
</div>
@endsection