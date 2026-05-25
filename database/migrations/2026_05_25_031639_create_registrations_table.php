<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('registrations', function (Blueprint $table) {
        $table->id();
        $table->string('name'); // Nama Lengkap Calon Siswa
        $table->string('email'); // Email Pendaftar
        $table->string('phone'); // Nomor WhatsApp
        $table->string('previous_school'); // Asal Sekolah
        $table->string('status')->default('Menunggu Seleksi'); // Status pendaftaran bawaan
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
