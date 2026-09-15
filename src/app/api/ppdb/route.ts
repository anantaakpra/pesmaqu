import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const registrations = await prisma.registration.findMany({
      orderBy: { created_at: 'desc' },
    });

    return NextResponse.json({ data: registrations });
  } catch (error: any) {
    console.error('Error fetching registrations:', error);
    return NextResponse.json(
      { error: error?.message || 'Gagal mengambil data pendaftar' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || '';

    let nama_lengkap = '';
    let nomor_wa = '';
    let asal_instansi = '';
    let jurusan = '';
    let cv_file = '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      nama_lengkap = (formData.get('nama_lengkap') as string) || '';
      nomor_wa = (formData.get('nomor_wa') as string) || '';
      asal_instansi = (formData.get('asal_instansi') as string) || '';
      jurusan = (formData.get('jurusan') as string) || '';

      const file = formData.get('cv_file') as File | null;
      if (file && file.size > 0) {
        // Validate max 2MB
        if (file.size > 2 * 1024 * 1024) {
          return NextResponse.json(
            { error: 'Ukuran file CV maksimal 2MB' },
            { status: 400 }
          );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const base64 = buffer.toString('base64');
        const mimeType = file.type || 'application/pdf';
        cv_file = `data:${mimeType};base64,${base64}`;
      }
    } else {
      const body = await request.json();
      nama_lengkap = body.nama_lengkap || '';
      nomor_wa = body.nomor_wa || '';
      asal_instansi = body.asal_instansi || '';
      jurusan = body.jurusan || '';
      cv_file = body.cv_file || '';
    }

    if (!nama_lengkap || !nomor_wa || !asal_instansi || !jurusan || !cv_file) {
      return NextResponse.json(
        { error: 'Semua formulir dan dokumen CV wajib diisi' },
        { status: 400 }
      );
    }

    const registration = await prisma.registration.create({
      data: {
        nama_lengkap,
        nomor_wa,
        asal_instansi,
        jurusan,
        cv_file,
        status: 'Menunggu Seleksi',
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Pendaftaran berhasil dikirim! Kami akan segera menghubungi Anda.',
        data: registration,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error creating registration:', error);
    return NextResponse.json(
      { error: error?.message || 'Gagal mengirim pendaftaran' },
      { status: 500 }
    );
  }
}
