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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About LinguaForge</h1>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              LinguaForge is a passionate endeavor to dismantle language barriers and fortify digital security. We believe in a world where communication is seamless and data is inherently safe. Our mission is to provide intuitive, accurate, and reliable tools that empower individuals and businesses to thrive in a globalized, digital-first landscape.
            </p>
          </div>

          {/* Our Vision */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where language is no longer a barrier to connection and collaboration. We see a world where developers can build secure applications with confidence, and where individuals can communicate freely and securely. LinguaForge is our contribution to this future, a tool forged with precision and a passion for innovation.
            </p>
          </div>

          {/* Our Team */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are a diverse team of developers, designers, and linguists united by a common goal: to create a tool that is both powerful and a pleasure to use. We are constantly exploring new technologies and methodologies to enhance LinguaForge and deliver the best possible experience to our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
