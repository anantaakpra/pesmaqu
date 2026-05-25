<?php

use App\Http\Controllers\RegistrationController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Models\News; 
use App\Models\Registration;
use App\Http\Controllers\NewsController;

// Rute publik untuk membaca detail berita
Route::get('/baca/{id}', [App\Http\Controllers\NewsController::class, 'show']);
Route::get('/', function () {
    // Ambil semua berita dari database
    $all_news = News::latest()->get();
    
    // Kirim variabel $all_news ke halaman welcome
    return view('welcome', compact('all_news'));
});
// Rute untuk halaman statis
Route::view('/tentang-kami', 'about');
Route::view('/program-akademik', 'akademik');

Route::get('/dashboard', function () {
    // Ambil data untuk tabel
    $news = App\Models\News::latest()->get();
    $registrations = App\Models\Registration::latest()->get(); 
    
    // Hitung data untuk Widget Statistik (BARU)
    $total_news = App\Models\News::count();
    $total_registrants = App\Models\Registration::count();
    $accepted = App\Models\Registration::where('status', 'Diterima')->count();
    $pending = App\Models\Registration::where('status', 'Menunggu Seleksi')->count();

    // Kirim semua variabel ke halaman dashboard
    return view('dashboard', compact('news', 'registrations', 'total_news', 'total_registrants', 'accepted', 'pending'));
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/berita/tambah', [NewsController::class, 'create'])->middleware(['auth', 'verified']);
Route::post('/berita', [NewsController::class, 'store'])->middleware(['auth', 'verified']);
Route::delete('/berita/{id}', [NewsController::class, 'destroy'])->middleware(['auth', 'verified']);
Route::get('/berita/{id}/edit', [NewsController::class, 'edit'])->middleware(['auth', 'verified']);
Route::put('/berita/{id}', [NewsController::class, 'update'])->middleware(['auth', 'verified']);

// ... (kode route profile dan auth.php biarkan saja)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Rute PPDB Online
Route::get('/ppdb', [RegistrationController::class, 'create']);
Route::post('/ppdb', [RegistrationController::class, 'store']);

Route::get('/jalankan-migrasi-rahasia', function () {
    \Illuminate\Support\Facades\Artisan::call('migrate', ['--force' => true]);
    return 'Mantap! Migrasi Database Sukses di Server Railway!';
});

Route::patch('/ppdb/{id}/status', [RegistrationController::class, 'updateStatus'])->middleware(['auth', 'verified']);
require __DIR__.'/auth.php';
