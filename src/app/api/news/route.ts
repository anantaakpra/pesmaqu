import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const filter = searchParams.get('filter') || 'terbaru';
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '9', 10);
    const skip = (page - 1) * limit;

    const where: any = {};
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }

    const orderBy: any = {
      created_at: filter === 'terlama' ? 'asc' : 'desc',
    };

    const [total, news] = await Promise.all([
      prisma.news.count({ where }),
      prisma.news.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
    ]);

    return NextResponse.json({
      data: news,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: error?.message || 'Gagal mengambil data berita' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, image_url, content } = body;

    if (!title || !image_url || !content) {
      return NextResponse.json(
        { error: 'Semua bidang (Judul, URL Gambar, Isi Berita) wajib diisi' },
        { status: 400 }
      );
    }

    const news = await prisma.news.create({
      data: {
        title,
        image_url,
        content,
      },
    });

    return NextResponse.json({ success: true, data: news }, { status: 201 });
  } catch (error: any) {
    console.error('Error creating news:', error);
    return NextResponse.json(
      { error: error?.message || 'Gagal menambahkan berita' },
      { status: 500 }
    );
  }
}
