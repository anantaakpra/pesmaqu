<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    use HasFactory;

    // Pastikan field ini sesuai dengan yang ada di Controller
    protected $fillable = [
        'nama_lengkap', 
        'nomor_wa', 
        'asal_instansi', 
        'jurusan', 
        'cv_file', 
        'status'
    ];
}