// src/app/about/page.tsx
"use client";

const AboutPage = () => {
    return (
      <>
        {/* Hero Section */}
        <section className="relative bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              About Lapi-Cure
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Protecting your laptop with affordable and reliable insurance for just KES 100/month.
            </p>
          </div>
        </section>
  
        {/* Mission & Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission & Vision</h2>
            <div className="md:flex md:justify-around gap-8">
              <div className="p-6 bg-gray-100 rounded-md shadow-lg mb-6 md:mb-0">
                <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                <p className="text-gray-700">
                  Our mission is to provide affordable, reliable, and easily accessible laptop insurance to
                  university students, remote workers, and freelancers across Kenya. We strive to protect your
                  devices from unexpected events at an unbeatable price.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-md shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                <p className="text-gray-700">
                  Our vision is to become the leading laptop insurance provider in Kenya, offering peace of mind
                  to every laptop owner by protecting their devices and ensuring they can continue working and
                  studying without interruption.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Who We Are Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Who We Are</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Lapi-Cure was founded by a group of passionate individuals who understand the importance of
              technology in today’s world. We know how frustrating it is when your laptop is damaged or stolen, 
              and we wanted to provide a solution that makes it easy for people to protect their devices without
              breaking the bank. Our team is committed to offering top-notch service and ensuring our customers 
              always feel secure.
            </p>
          </div>
        </section>
  
        {/* Why Lapi-Cure Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Lapi-Cure?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-md shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
                <p className="text-gray-700">For just KES 100/month, you get full protection for your laptop. No hidden fees!</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-md shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Reliable Coverage</h3>
                <p className="text-gray-700">We cover a wide range of events, from theft to accidental damage and more.</p>
              </div>
              <div className="p-6 bg-gray-100 rounded-md shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Fast Claims Process</h3>
                <p className="text-gray-700">Our claims process is quick and efficient, so you can get back to work or studies fast.</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default AboutPage;
  