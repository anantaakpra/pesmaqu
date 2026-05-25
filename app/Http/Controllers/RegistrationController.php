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

    // Menyimpan data pendaftar ke database
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'previous_school' => 'required',
        ]);

        // Simpan ke database
        Registration::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone' => $request->phone,
            'previous_school' => $request->previous_school,
            'status' => 'Menunggu Seleksi'
        ]);

        // Kembalikan ke halaman form dengan pesan sukses
        return back()->with('success', 'Pendaftaran berhasil! Tim kami akan segera menghubungi Anda melalui WhatsApp atau Email.');
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