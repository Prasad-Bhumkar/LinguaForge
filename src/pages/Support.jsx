import React from 'react';

const Support = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-red-50 to-yellow-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-pink-300 to-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-red-300 to-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Support</h1>
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="font-bold text-lg">What is LinguaForge?</h3>
                <p className="text-gray-700">LinguaForge is a powerful and intuitive application designed to bridge language barriers and provide robust security solutions. Our mission is to deliver seamless and accurate translations, alongside secure and reliable random string generation for all your needs.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">How accurate are the translations?</h3>
                <p className="text-gray-700">Our application leverages advanced AI technology to ensure high-quality translations across multiple languages. While we strive for the highest accuracy, we recommend using the translations as a guide and not for official documents.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Is my data secure?</h3>
                <p className="text-gray-700">Yes, we take data security very seriously. All data is encrypted and handled with the utmost care. For more details, please refer to our Privacy Policy.</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Support</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              If you can't find what you're looking for in the FAQ, please fill out the form below to contact our support team.
            </p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-violet-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-violet-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-violet-500"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-violet-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-violet-700 focus:outline-none focus:shadow-outline-violet">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
