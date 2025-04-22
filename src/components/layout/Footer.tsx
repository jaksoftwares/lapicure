"use client";
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Lapi-Cure</h3>
          <p className="text-gray-400">
            Affordable laptop insurance. Protect your device for just KES 100/month.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
            </li>
            <li>
              <Link href="/plans" className="text-gray-400 hover:text-white">Plans & Pricing</Link>
            </li>
            <li>
              <Link href="/how-it-works" className="text-gray-400 hover:text-white">How It Works</Link>
            </li>
            <li>
              <Link href="/faqs" className="text-gray-400 hover:text-white">FAQs</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: <a href="mailto:support@lapicure.com" className="hover:text-white">support@lapicure.com</a></p>
          <p className="text-gray-400">Phone: <a href="tel:+254123456789" className="hover:text-white">+254 123 456 789</a></p>

          {/* Social Media Links */}
          <div className="mt-4 flex space-x-6 justify-center md:justify-start">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-6 border-t border-gray-700 mt-10">
        <p className="text-gray-400 text-sm">© 2025 Lapi-Cure. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
