import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About LinguaForge</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            LinguaForge is a powerful and intuitive application designed to bridge language barriers and provide robust security solutions. Our mission is to deliver seamless and accurate translations, alongside secure and reliable random string generation for all your needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Whether you are a developer in need of secure tokens, a professional communicating with international clients, or simply curious about languages, LinguaForge provides the tools you need to succeed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
