import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
        require('daisyui'),
    ],

    // TAMBAHKAN KODE INI UNTUK MENGUBAH TEMA WARNA
    daisyui: {
        themes: [
            {
                pesmaqu: {
                    "primary": "#bf9000",   // Cokelat keemasan utama
                    "secondary": "#f97316", // Oranye (aksen)
                    "accent": "#bf9001",    // Cokelat variasi
                    "neutral": "#3d4451",   // Abu-abu gelap untuk teks
                    "base-100": "#ffffff",  // Putih untuk latar belakang
                },
            },
        ],
    },
};