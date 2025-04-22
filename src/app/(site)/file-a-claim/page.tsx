"use client";
import React, { useState } from 'react';

const FileAClaim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    device: '',
    issue: '',
    policeReport: null as File | null,
    receipt: null as File | null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    const name = e.target.name;
    if (name === 'policeReport') {
      setFormData({
        ...formData,
        policeReport: file,
      });
    } else if (name === 'receipt') {
      setFormData({
        ...formData,
        receipt: file,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the backend)
    setIsSubmitted(true);
    setFormData({ name: '', email: '', device: '', issue: '', policeReport: null, receipt: null }); // Reset form
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-12">File a Claim</h1>

      {/* Claim Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Submit Your Claim</h2>
        {isSubmitted ? (
          <div className="text-center text-green-600 font-semibold">
            <p>Your claim has been successfully submitted. We will review it and get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="device" className="block text-lg font-medium text-gray-700">Device Model</label>
                <input
                  type="text"
                  id="device"
                  name="device"
                  value={formData.device}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="issue" className="block text-lg font-medium text-gray-700">Issue Description</label>
                <textarea
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                  rows={6}
                />
              </div>

              <div>
                <label htmlFor="policeReport" className="block text-lg font-medium text-gray-700">Upload Police Report (if applicable)</label>
                <input
                  type="file"
                  id="policeReport"
                  name="policeReport"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="receipt" className="block text-lg font-medium text-gray-700">Upload Receipt (if applicable)</label>
                <input
                  type="file"
                  id="receipt"
                  name="receipt"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700"
              >
                Submit Claim
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FileAClaim;
