

import "./globals.css";
// NOTE: ThemeProvider import removed
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
        <div className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-500">
          <Header />
          <main className="flex-grow"> 
              {children}
          </main>
          <Footer /> 
        </div>
      </body>
    </html>
  );
}

