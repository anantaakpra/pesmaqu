import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id, 10);

    if (isNaN(newsId)) {
      return NextResponse.json({ error: 'ID tidak valid' }, { status: 400 });
    }

    const news = await prisma.news.findUnique({
      where: { id: newsId },
    });

    if (!news) {
      return NextResponse.json({ error: 'Berita tidak ditemukan' }, { status: 404 });
    }

    return NextResponse.json({ data: news });
  } catch (error: any) {
    console.error('Error fetching news by id:', error);
    return NextResponse.json(
      { error: error?.message || 'Gagal mengambil detail berita' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const newsId = parseInt(id, 10);
    const body = await request.json();
    const { title, image_url, content } = body;

    if (!title || !image_url || !content) {
      return NextResponse.json(
        { error: 'Semua bidang wajib diisi' },
        { status: 400 }
      );
    }

    const updated = await prisma.news.update({
      where: { id: newsId },
      data: {
        title,
        image_url,
        content,
      },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    console.error('Error updating news:', error);
    return NextResponse.json(
      { error: error?.message || 'Gagal memperbarui berita' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const newsId = parseInt(id, 10);

    await prisma.news.delete({
      where: { id: newsId },
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error deleting news:', error);
    return NextResponse.json(
      { error: error?.message || 'Gagal menghapus berita' },
      { status: 500 }
    );
  }
}
