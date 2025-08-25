import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Privacy Policy</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Your privacy is important to us. It is LinguaForge's policy to respect your privacy regarding any information we may collect from you across our website.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
