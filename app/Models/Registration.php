<?php

namespace App\Models;

// 1. BARIS INI YANG SEBELUMNYA HILANG
use Illuminate\Database\Eloquent\Factories\HasFactory; 
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    use HasFactory;

    // 2. Pastikan fillable-nya tetap ada
    protected $fillable = [
        'nama_lengkap', 
        'nomor_wa', 
        'asal_instansi', 
        'jurusan', 
        'cv_file', 
        'status'
    ];
}