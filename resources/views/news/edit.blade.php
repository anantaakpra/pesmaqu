<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Edit Berita') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8 border border-gray-200">
                
                <form action="/berita/{{ $news->id }}" method="POST">
                    @csrf
                    @method('PUT') <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Judul Berita</label>
                        <input type="text" name="title" value="{{ $news->title }}" class="shadow-sm border-gray-300 rounded w-full py-2 px-3 bg-white text-gray-900 focus:ring focus:ring-blue-200" required>
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Link Gambar (URL)</label>
                        <input type="url" name="image_url" value="{{ $news->image_url }}" class="shadow-sm border-gray-300 rounded w-full py-2 px-3 bg-white text-gray-900 focus:ring focus:ring-blue-200" required>
                    </div>
                    
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Isi Berita</label>
                        <textarea name="content" rows="6" class="shadow-sm border-gray-300 rounded w-full py-2 px-3 bg-white text-gray-900 focus:ring focus:ring-blue-200" required>{{ $news->content }}</textarea>
                    </div>
                    
                    <div class="flex items-center justify-between mt-8">
                        <button type="submit" class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow">
                            Update Berita
                        </button>
                        <a href="/dashboard" class="text-gray-500 hover:text-gray-800 font-semibold">Batal</a>
                    </div>
                </form>

            </div>
        </div>
    </div>
</x-app-layout>