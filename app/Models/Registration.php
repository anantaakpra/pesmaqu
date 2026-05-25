<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    // Mengizinkan kolom-kolom ini diisi dari form
    protected $fillable = [
        'name',
        'email',
        'phone',
        'previous_school',
        'status',
    ];
}