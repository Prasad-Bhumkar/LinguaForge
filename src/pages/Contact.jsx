import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            We'd love to hear from you! Whether you have a question about our features, a suggestion for improvement, or just want to say hello, feel free to reach out.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            You can contact us by email at <a href="mailto:support@linguaforge.com" className="text-violet-600 hover:underline">support@linguaforge.com</a>.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            For any inquiries, please fill out our contact form on our website, and our support team will get back to you as soon as possible.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            We value your feedback and are always looking for ways to improve our services. Thank you for reaching out!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
