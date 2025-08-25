import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-violet-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-purple-300 to-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-3xl shadow-xl mb-6 animate-float">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* SVG content here */}
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About LinguaForge</h1>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              LinguaForge is a powerful and intuitive application designed to bridge language barriers and provide robust security solutions. Our mission is to deliver seamless and accurate translations, alongside secure and reliable random string generation for all your needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Whether you are a developer in need of secure tokens, a professional communicating with international clients, or simply curious about languages, LinguaForge provides the tools you need to succeed.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Our application leverages advanced AI technology to ensure high-quality translations across multiple languages. With a user-friendly interface and powerful features, LinguaForge is designed to meet the needs of individuals and businesses alike.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Join us on our journey to make communication easier and more secure for everyone. We are committed to continuous improvement and welcome feedback from our users to enhance our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
