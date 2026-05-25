<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL; // <-- Tambahkan baris ini di atas

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // Tambahkan 3 baris ini untuk memaksa HTTPS di server production
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }
    }
}