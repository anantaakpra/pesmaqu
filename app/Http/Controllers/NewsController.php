<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    // 1. Fungsi untuk menampilkan halaman form tambah berita
    public function create()
    {
        return view('news.create');
    }

    // 2. Fungsi untuk menangkap data dari form dan menyimpannya ke MySQL
    public function store(Request $request)
    {
        // Validasi agar form tidak boleh kosong
        $request->validate([
            'title' => 'required',
            'image_url' => 'required|url',
            'content' => 'required'
        ]);

        // Simpan data ke database
        News::create([
            'title' => $request->title,
            'image_url' => $request->image_url,
            'content' => $request->content
        ]);

        // Jika berhasil, kembalikan user ke halaman dashboard
        return redirect('/dashboard');
    }
    // 3. Fungsi untuk menghapus berita dari database
    public function destroy($id)
    {
        // Cari berita berdasarkan ID-nya
        $news = News::findOrFail($id);
        
        // Hapus berita tersebut
        $news->delete();

        // Kembalikan ke halaman dashboard
        return redirect('/dashboard');
    }
    // 4. Fungsi untuk menampilkan form edit dengan data lama
    public function edit($id)
    {
        $news = News::findOrFail($id);
        return view('news.edit', compact('news'));
    }

    // 5. Fungsi untuk menyimpan perubahan data ke database
    public function update(Request $request, $id)
    {
        // Validasi data
        $request->validate([
            'title' => 'required',
            'image_url' => 'required|url',
            'content' => 'required'
        ]);

        // Cari berita dan update isinya
        $news = News::findOrFail($id);
        $news->update([
            'title' => $request->title,
            'image_url' => $request->image_url,
            'content' => $request->content
        ]);

        // Kembalikan ke dashboard
        return redirect('/dashboard');
    }
    // Fungsi untuk menampilkan detail berita kepada pengunjung (Publik)
    public function show($id)
    {
        $news = News::findOrFail($id);
        return view('news.show', compact('news'));
    }
    public function index()
    {
    // Ambil semua berita terbaru, batasi 9 berita per halaman
    $news = News::latest()->paginate(9);

    // Kirim data ke file view yang ada di folder resources/views/news/index.blade.php
    return view('news.index', compact('news'));
    }
}