"use client";
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    if (typeof window !== 'undefined') {
      return window.location.pathname === path ? 'text-blue-600' : 'text-gray-700';
    }
    return 'text-gray-700';
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link href="/">
            <span className="cursor-pointer">Lapi-Cure</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className={`${isActive('/about')} hover:text-blue-600 transition duration-300`}>About Us</Link>
          <Link href="/plans" className={`${isActive('/plans')} hover:text-blue-600 transition duration-300`}>Plans & Pricing</Link>
          <Link href="/how-it-works" className={`${isActive('/how-it-works')} hover:text-blue-600 transition duration-300`}>How It Works</Link>
          <Link href="/faqs" className={`${isActive('/faqs')} hover:text-blue-600 transition duration-300`}>FAQs</Link>
          <Link href="/contact" className={`${isActive('/contact')} hover:text-blue-600 transition duration-300`}>Contact</Link>

          <Link href="/auth/login" className={`${isActive('/auth/login')} hover:text-blue-600 transition duration-300`}>Login</Link>
          <Link href="/auth/register">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Insured
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg space-y-4 py-4 px-4">
          <Link href="/about" className={`${isActive('/about')} block text-gray-700 hover:text-blue-600 transition duration-300`}>About Us</Link>
          <Link href="/plans" className={`${isActive('/plans')} block text-gray-700 hover:text-blue-600 transition duration-300`}>Plans & Pricing</Link>
          <Link href="/how-it-works" className={`${isActive('/how-it-works')} block text-gray-700 hover:text-blue-600 transition duration-300`}>How It Works</Link>
          <Link href="/faqs" className={`${isActive('/faqs')} block text-gray-700 hover:text-blue-600 transition duration-300`}>FAQs</Link>
          <Link href="/contact" className={`${isActive('/contact')} block text-gray-700 hover:text-blue-600 transition duration-300`}>Contact</Link>

          <Link href="/auth/login" className={`${isActive('/auth/login')} block text-gray-700 hover:text-blue-600 transition duration-300`}>Login</Link>
          <Link href="/auth/register">
            <button className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full text-center">
              Get Insured
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
