<?php

namespace App\Http\Controllers;

use App\Models\Registration;
use Illuminate\Http\Request;

class RegistrationController extends Controller
{
    // Menampilkan halaman form pendaftaran
    public function create()
    {
        return view('ppdb.create');
    }

    public function store(Request $request)
    {
        // 1. Validasi input dari user
        $request->validate([
            'nama_lengkap' => 'required|string|max:255',
            'nomor_wa' => 'required|string|max:20',
            'asal_instansi' => 'required|string|max:255',
            'jurusan' => 'required|string|max:255',
            'cv_file' => 'required|file|mimes:pdf|max:2048', // Wajib PDF, maksimal 2MB
        ]);

        // 2. Simpan file CV ke folder storage/app/public/cv_uploads
        $cvPath = $request->file('cv_file')->store('cv_uploads', 'public');

        // 3. Masukkan data ke Database
        Registration::create([
            'nama_lengkap' => $request->nama_lengkap,
            'nomor_wa' => $request->nomor_wa,
            'asal_instansi' => $request->asal_instansi,
            'jurusan' => $request->jurusan,
            'cv_file' => $cvPath,
            'status' => 'Menunggu Seleksi' // Status default
        ]);

        return redirect('/ppdb')->with('success', 'Pendaftaran berhasil dikirim! Kami akan segera menghubungi Anda.');
    }

    public function index()
    {
        // Mengambil semua data pendaftar dari yang paling baru
        $pendaftar = \App\Models\Registration::latest()->get();
        
        return view('data-pendaftar', compact('pendaftar'));
    }
    // Fungsi untuk mengubah status pendaftar dari Dashboard Admin
    public function updateStatus(Request $request, $id)
    {
        // Cari data pendaftar berdasarkan ID
        $registration = Registration::findOrFail($id);
        
        // Update kolom status sesuai dengan tombol yang ditekan
        $registration->update([
            'status' => $request->status
        ]);

        // Kembalikan ke halaman dashboard
        return redirect('/dashboard');
    }
}