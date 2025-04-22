"use client";
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-8">How Lapi-Cure Works</h1>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 1: Sign Up</h2>
          <p className="text-gray-600 text-lg mb-4">Create an account with Lapi-Cure to get started. Provide your basic details to sign up.</p>
          <FaCheckCircle className="text-green-500 text-4xl mb-4" />
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 2: Upload Laptop Details</h2>
          <p className="text-gray-600 text-lg mb-4">Upload details about your laptop including the model, serial number, and purchase receipt.</p>
          <FaCheckCircle className="text-green-500 text-4xl mb-4" />
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 3: Pay KES 100</h2>
          <p className="text-gray-600 text-lg mb-4">Pay the affordable fee of KES 100 per month for coverage against theft, accidental damage, and more.</p>
          <FaCheckCircle className="text-green-500 text-4xl mb-4" />
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Step 4: You&apos;re Covered</h2>
          <p className="text-gray-600 text-lg mb-4">Once payment is confirmed, your laptop is covered under Lapi-Cure insurance. You&apos;re protected against theft, spills, and more!</p>
          <FaCheckCircle className="text-green-500 text-4xl mb-4" />
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-4">Start protecting your laptop now with Lapi-Cure!</p>
        <a href="/get-insured" className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600">
          Get Insured Now
        </a>
      </div>
    </div>
  );
};

export default HowItWorks;
