<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    // Tambahkan baris ini untuk mengizinkan pengisian data
    protected $fillable = [
        'title',
        'image_url',
        'content',
    ];
}