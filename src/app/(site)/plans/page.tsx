// src/app/plans/page.tsx
"use client";

import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const plans = [
  {
    name: "Basic Plan",
    price: "KES 100/month",
    coverage: [
      "Theft",
      "Accidental Damage",
      "Power Surge Damage",
      "Liquid Spills"
    ],
    notCovered: [
      "Intentional Damage",
      "Normal Wear & Tear",
      "Loss without a police report"
    ]
  },
  {
    name: "Standard Plan",
    price: "KES 250/month",
    coverage: [
      "Theft",
      "Accidental Damage",
      "Power Surge Damage",
      "Liquid Spills",
      "Fire Damage"
    ],
    notCovered: [
      "Intentional Damage",
      "Normal Wear & Tear",
      "Loss without a police report"
    ]
  },
  {
    name: "Premium Plan",
    price: "KES 500/month",
    coverage: [
      "Theft",
      "Accidental Damage",
      "Power Surge Damage",
      "Liquid Spills",
      "Fire Damage",
      "Lost Device Replacement"
    ],
    notCovered: [
      "Intentional Damage",
      "Normal Wear & Tear"
    ]
  }
];

const PlansPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Our Pricing Plans
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Affordable laptop insurance plans to keep your device safe.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">{plan.name}</h3>
                <p className="text-xl font-semibold text-gray-900 mb-4">{plan.price}</p>

                <h4 className="text-lg font-semibold text-gray-800 mb-2">Coverage Includes:</h4>
                <ul className="mb-4">
                  {plan.coverage.map((item, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mb-2">Not Covered:</h4>
                <ul>
                  {plan.notCovered.map((item, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <FaTimesCircle className="text-red-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Plan Comparison</h2>
          <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Feature</th>
                  <th className="py-3 px-4 text-left">Basic Plan</th>
                  <th className="py-3 px-4 text-left">Standard Plan</th>
                  <th className="py-3 px-4 text-left">Premium Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 font-semibold">Theft</td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Accidental Damage</td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Power Surge Damage</td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Liquid Spills</td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Fire Damage</td>
                  <td className="py-3 px-4 text-center"><FaTimesCircle className="text-red-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Lost Device Replacement</td>
                  <td className="py-3 px-4 text-center"><FaTimesCircle className="text-red-500" /></td>
                  <td className="py-3 px-4 text-center"><FaTimesCircle className="text-red-500" /></td>
                  <td className="py-3 px-4 text-center"><FaCheckCircle className="text-green-500" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlansPage;
