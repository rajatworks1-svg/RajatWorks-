import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RajatWorks | Full-Stack & 3D Web Developer Portfolio',
  description: 'Portfolio of Rajat Kumar Dua, showcasing full-stack development, 3D web experiences using R3F, and modern performance optimization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
      
          <main className="flex-grow px-4 md:px-8"> 
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
