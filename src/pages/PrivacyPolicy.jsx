import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-300 to-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Privacy Policy</h1>
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-8">
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
    </div>
  );
};

export default PrivacyPolicy;
