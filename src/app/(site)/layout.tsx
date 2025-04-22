// src/app/layout.tsx

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
