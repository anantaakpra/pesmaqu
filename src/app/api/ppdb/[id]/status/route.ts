import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSession } from '@/lib/auth';

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;
    const regId = parseInt(id, 10);
    const body = await request.json();
    const { status } = body;

    if (!status) {
      return NextResponse.json(
        { error: 'Status harus ditentukan' },
        { status: 400 }
      );
    }

    const updated = await prisma.registration.update({
      where: { id: regId },
      data: { status },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    console.error('Error updating registration status:', error);
    return NextResponse.json(
      { error: error?.message || 'Gagal mengubah status pendaftar' },
      { status: 500 }
    );
  }
}
