import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'AI Translator', path: '/translate' },
      { name: 'String Generator', path: '/random' },
      { name: 'Features', path: '/' },
    ],
    company: [
      { name: 'About', path: '/about' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
    ],
    resources: [
      { name: 'API Documentation', href: 'https://rapidapi.com/gatzuma/api/deep-translate1' },
      { name: 'Support', path: '/support' },
      { name: 'Contact', path: '/contact' },
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/your-handle', icon: 'github' },
      { name: 'Twitter', href: 'https://twitter.com/your-handle', icon: 'twitter' },
      { name: 'Instagram', href: 'https://instagram.com/your-handle', icon: 'instagram' },
    ]
  };

  const socialIcons = {
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    twitter: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C8.396 0 7.928.01 6.684.072 5.441.134 4.591.29 3.85.55c-.764.297-1.413.695-2.059 1.34C1.146 2.537.748 3.186.45 3.95.19 4.69.034 5.54-.028 6.783c-.062 1.244-.072 1.712-.072 5.334 0 3.621.01 4.09.072 5.333.062 1.243.218 2.093.478 2.833.298.765.696 1.414 1.342 2.06.646.646 1.295 1.044 2.06 1.341.74.26 1.59.417 2.833.479 1.244.062 1.712.072 5.333.072 3.622 0 4.09-.01 5.334-.072 1.243-.062 2.093-.219 2.833-.479a5.895 5.895 0 002.06-1.341 5.893 5.893 0 001.342-2.06c.26-.74.417-1.59.479-2.833.062-1.244.072-1.712.072-5.334 0-3.622-.01-4.09-.072-5.333-.062-1.243-.219-2.093-.479-2.833a5.895 5.895 0 00-1.342-2.06A5.893 5.893 0 0018.967.55c-.74-.26-1.59-.417-2.833-.479C15.09.01 14.622 0 12.017 0zm0 2.158c3.556 0 3.978.01 5.38.072 1.299.059 2.006.278 2.476.462.622.242 1.066.532 1.532.998.466.466.756.91.998 1.532.184.47.403 1.177.462 2.476.062 1.402.072 1.824.072 5.38 0 3.556-.01 3.978-.072 5.38-.059 1.299-.278 2.006-.462 2.476a4.128 4.128 0 01-.998 1.532 4.129 4.129 0 01-1.532.998c-.47.184-1.177.403-2.476.462-1.402.062-1.824.072-5.38.072-3.556 0-3.978-.01-5.38-.072-1.299-.059-2.006-.278-2.476-.462a4.128 4.128 0 01-1.532-.998 4.129 4.129 0 01-.998-1.532c-.184-.47-.403-1.177-.462-2.476-.062-1.402-.072-1.824-.072-5.38 0-3.556.01-3.978.072-5.38.059-1.299.278-2.006.462-2.476.242-.622.532-1.066.998-1.532a4.128 4.128 0 011.532-.998c.47-.184 1.177-.403 2.476-.462 1.402-.062 1.824-.072 5.38-.072zM12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
      </svg>
    )
  };

  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <svg className="w-8 h-8 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full opacity-20 animate-pulse"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                LinguaForge
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Where language meets technology. Professional translation tools and secure string generation for the modern world.
            </p>
            <div className="flex space-x-3">
              {footerLinks.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-gray-100 hover:bg-violet-100 rounded-full flex items-center justify-center text-gray-600 hover:text-violet-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-violet-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-violet-600 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-600 hover:text-violet-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-violet-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {currentYear} LinguaForge. All rights reserved. Built with ❤️ and modern technology.
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Secure & Private
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Lightning Fast
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                100% Free
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
