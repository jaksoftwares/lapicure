// src/app/page.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Protect Your Laptop for Just KES 100/Month
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Affordable and reliable protection against theft, accidental damage, power surges, and more!
          </p>
          <Link href="/get-insured" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-md">
            Get Insured Now
          </Link>
        </div>
        {/* Background image or illustration */}
        <div className="absolute top-0 right-0 z-0">
          <Image
            src="/images/laptop-hero.jpg" // Replace with your hero image
            alt="Laptop Insurance"
            width={600}
            height={400}
            className="object-cover opacity-30"
          />
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Lapi-Cure?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="p-6 bg-gray-100 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Theft Protection</h3>
              <p className="text-gray-700">
                Get full coverage if your laptop is stolen, with a claim limit of up to KES 50,000.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Accidental Damage</h3>
              <p className="text-gray-700">
                Accidents happen. We’ve got you covered for accidental damages to your laptop.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Power Surge Damage</h3>
              <p className="text-gray-700">
                Protect against damages from unexpected power surges, including lightning strikes.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-md shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Liquid Spills</h3>
              <p className="text-gray-700">
                Spilled water or juice? No worries, we cover liquid spill damage as well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-around gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 1: Sign Up</h3>
              <p className="text-gray-700">Create an account on our platform and get started.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 2: Upload Laptop Details</h3>
              <p className="text-gray-700">Upload your laptop details like model, serial number, and purchase receipt.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Step 3: Pay KES 100</h3>
              <p className="text-gray-700">Make a payment of KES 100/month to get insured.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
