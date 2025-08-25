import React from 'react';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Support</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            If you need help with LinguaForge, our support team is here to assist you. Please check our FAQ section for answers to common questions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            If you can't find what you're looking for, you can contact our support team at <a href="mailto:support@linguaforge.com" className="text-violet-600 hover:underline">support@linguaforge.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
