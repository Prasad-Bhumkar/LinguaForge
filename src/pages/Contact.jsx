import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We'd love to hear from you! Whether you have a question about our features, a suggestion for improvement, or just want to say hello, feel free to reach out.
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
                Send Message
              </button>
            </div>
          </form>
          <div className="text-center mt-8">
            <p className="text-lg text-gray-700">You can also reach us at:</p>
            <a href="mailto:support@linguaforge.com" className="text-violet-600 hover:underline">support@linguaforge.com</a>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter fa-2x"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin fa-2x"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-github fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
