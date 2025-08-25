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
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            We do not share your personal information with third parties without your consent, except as required by law. We take reasonable steps to protect your information from loss, theft, and misuse.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            If you have any questions about our privacy policy or how we handle your personal information, please contact us at <a href="mailto:support@linguaforge.com" className="text-violet-600 hover:underline">support@linguaforge.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
