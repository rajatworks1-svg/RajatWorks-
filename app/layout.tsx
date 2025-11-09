import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: 'Rajat Kumar Dua | Full-Stack Developer',
  description: 'Rajat Kumar Dua’s personal portfolio featuring full-stack and 3D web development projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Set the main background to white and text to dark gray */}
      <body className={`font-default antialiased`}>
        <div className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-300">
          <Header />
          
          {/* CRITICAL FIX: Added responsive horizontal padding (px-4 on phone, px-8 on desktop) to the main content area. */}
          <main className="flex-grow px-4 md:px-8"> 
              {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  );
}

