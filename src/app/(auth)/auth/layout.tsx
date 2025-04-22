import React from 'react';
import '@/styles/globals.css';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          {/* Main Auth Content */}
          <main className="max-w-lg w-full pt-24 pb-16 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default AuthLayout;
// This layout is specifically for authentication pages like login, register, etc.
// It provides a clean and focused interface for users to interact with authentication forms.
// The layout includes a centered card with a white background, shadow, and rounded corners.
// The main content area is padded and has a maximum width to ensure a good user experience on various screen sizes.
// The layout is designed to be responsive and works well on both mobile and desktop devices.
// The global CSS file is imported to apply consistent styles across the application.
// The layout is structured to be easily extendable for future authentication-related features or pages.
// The layout is also designed to be easily customizable, allowing for changes in styles or structure as needed.  