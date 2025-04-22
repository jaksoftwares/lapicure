"use client";
import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can integrate the form submission logic (e.g., send it to an API or email)
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Reset the form after submission
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-12">Contact Us</h1>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-4xl text-blue-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Phone</h2>
            <p className="text-gray-600">+254 123 456 789</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaEnvelope className="text-4xl text-blue-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Email</h2>
            <p className="text-gray-600">support@lapicure.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-4xl text-blue-600" />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Location</h2>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
        {isSubmitted ? (
          <div className="text-center text-green-600 font-semibold">
            <p>Your message has been successfully sent! We will get back to you shortly.</p>
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
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full p-3 border border-gray-300 rounded-lg"
                  rows={6}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 bg-blue-600 text-white font-semibold text-lg rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Embedded Google Map */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Location</h2>
        <div className="w-full h-96">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.734359753238!2d36.82194600711165!3d-1.2920658708493604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3dbf31a8d7b5%3A0xf6b8e5b679ebea0d!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1626927760853!5m2!1sen!2sus"
            loading="lazy"
            title="Lapi-Cure Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
