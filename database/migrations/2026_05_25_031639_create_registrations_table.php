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
        $table->string('nama_lengkap');
        $table->string('nomor_wa');
        $table->string('asal_instansi');
        $table->string('jurusan');
        $table->string('cv_file'); // Untuk menyimpan path/link file PDF
        $table->string('status')->default('Menunggu Seleksi');
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
