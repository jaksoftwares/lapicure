"use client"

import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqList = [
    {
      question: 'What is Lapi-Cure?',
      answer:
        'Lapi-Cure is a Kenyan-based laptop insurance company that provides affordable protection for your devices at just KES 100/month. We cover damages such as theft, accidental damage, power surge damage, and liquid spills.',
    },
    {
      question: 'How do I pay for my insurance?',
      answer:
        'You can pay the monthly fee of KES 100 via mobile money (M-Pesa), credit card, or debit card. Payments are automatically deducted each month to ensure continuous coverage for your device.',
    },
    {
      question: 'What happens when I lose my laptop?',
      answer:
        'In the event of theft, Lapi-Cure covers your laptop up to a maximum claim value of KES 50,000. You’ll need to file a police report and submit it along with your claim to start the process.',
    },
    {
      question: 'What does the coverage include?',
      answer:
        'Lapi-Cure provides coverage for theft, accidental damage, power surge damage, and liquid spills. It does not cover intentional damage, normal wear and tear, or loss without a police report.',
    },
    {
      question: 'Can I insure more than one laptop?',
      answer:
        'Yes, you can insure multiple laptops. Each laptop will need to have its own unique registration and insurance coverage, at a cost of KES 100 per month per laptop.',
    },
    {
      question: 'How long does it take to get covered?',
      answer:
        'Once you complete the sign-up process and payment, your laptop will be covered immediately, and you will receive an email confirming your insurance coverage.',
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-12">Frequently Asked Questions</h1>

      <div className="space-y-6">
        {faqList.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <div
              className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleQuestion(index)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
              <div className="text-xl text-gray-600">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {activeIndex === index && (
              <div className="px-6 py-4 text-gray-600 text-lg bg-gray-50">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-4">Have more questions? Feel free to <a href="/contact-us" className="text-blue-500 hover:text-blue-600 font-semibold">contact us</a>.</p>
      </div>
    </div>
  );
};

export default FAQs;
