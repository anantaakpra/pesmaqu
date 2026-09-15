import type { Metadata } from 'next';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: "PesMaQu - Pondok Pesantren Mahasiswa Al-Qur'an",
    template: "%s - PesMaQu",
  },
  description:
    "Pondok Pesantren Mahasiswa Al-Qur'an (PesMaQu) Baitur Ridhwan Malang di bawah asuhan Gus Muqorrobin El-Haruny. Program Tahfidz Bersanad, Dirosah Islamiyah, dan Beasiswa Pendidikan Penuh.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-slate-50 text-slate-900 font-sans selection:bg-[#bf9000] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
