import React, { useState, useEffect, useRef } from 'react';

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef(null);
  const containerRef = useRef(null);

  // Social links data
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Prasad-Bhumkar',
      bgColor: 'bg-gray-900',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/prasad.bhumkar_official/',
      bgColor: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500',
      fallbackBg: 'bg-pink-600',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.928.01 6.684.072 5.441.134 4.591.29 3.85.55c-.764.297-1.413.695-2.059 1.34C1.146 2.537.748 3.186.45 3.95.19 4.69.034 5.54-.028 6.783c-.062 1.244-.072 1.712-.072 5.334 0 3.621.01 4.09.072 5.333.062 1.243.218 2.093.478 2.833.298.765.696 1.414 1.342 2.06.646.646 1.295 1.044 2.06 1.341.74.26 1.59.417 2.833.479 1.244.062 1.712.072 5.333.072 3.622 0 4.09-.01 5.334-.072 1.243-.062 2.093-.219 2.833-.479a5.895 5.895 0 002.06-1.341 5.893 5.893 0 001.342-2.06c.26-.74.417-1.59.479-2.833.062-1.244.072-1.712.072-5.334 0-3.622-.01-4.09-.072-5.333-.062-1.243-.219-2.093-.479-2.833a5.895 5.895 0 00-1.342-2.06A5.893 5.893 0 0018.967.55c-.74-.26-1.59-.417-2.833-.479C15.09.01 14.622 0 12.017 0zm0 2.158c3.556 0 3.978.01 5.38.072 1.299.059 2.006.278 2.476.462.622.242 1.066.532 1.532.998.466.466.756.91.998 1.532.184.47.403 1.177.462 2.476.062 1.402.072 1.824.072 5.38 0 3.556-.01 3.978-.072 5.38-.059 1.299-.278 2.006-.462 2.476a4.128 4.128 0 01-.998 1.532 4.129 4.129 0 01-1.532.998c-.47.184-1.177.403-2.476.462-1.402.062-1.824.072-5.38.072-3.556 0-3.978-.01-5.38-.072-1.299-.059-2.006-.278-2.476-.462a4.128 4.128 0 01-1.532-.998 4.129 4.129 0 01-.998-1.532c-.184-.47-.403-1.177-.462-2.476-.062-1.402-.072-1.824-.072-5.38 0-3.556.01-3.978.072-5.38.059-1.299.278-2.006.462-2.476.242-.622.532-1.066.998-1.532a4.128 4.128 0 011.532-.998c.47-.184 1.177-.403 2.476-.462 1.402-.062 1.824-.072 5.38-.072zM12.017 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/bhumkar_pr89871',
      bgColor: 'bg-black',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/7410170125',
      bgColor: 'bg-green-500',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
        </svg>
      )
    }
  ];

  // Toggle FAB open/close
  const toggleFAB = () => {
    setIsOpen(!isOpen);
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  // Handle keyboard navigation
  const handleFABKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFAB();
    }
  };

  const handleSocialKeyDown = (event, url) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Social Links */}
      <div className="flex flex-col space-y-2 mb-2">
        {socialLinks.map((social, index) => (
          <button
            key={social.name}
            onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
            onKeyDown={(e) => handleSocialKeyDown(e, social.url)}
            aria-label={`Open ${social.name}`}
            className={`
              w-11 h-11 rounded-full text-white shadow transition-all duration-200 ease-out
              ${social.bgColor} ${social.fallbackBg || ''}
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
              ${isOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 translate-y-2 pointer-events-none'
              }
            `}
            style={{ 
              transitionDelay: isOpen ? `${(socialLinks.length - 1 - index) * 75}ms` : '0ms',
            }}
            tabIndex={isOpen ? 0 : -1}
          >
            <span className="flex items-center justify-center w-full h-full">
              {social.icon}
            </span>
          </button>
        ))}
      </div>

      {/* Main FAB */}
      <button
        ref={fabRef}
        onClick={toggleFAB}
        onKeyDown={handleFABKeyDown}
        aria-label={isOpen ? 'Close social links' : 'Open social links'}
        aria-expanded={isOpen}
        className={`
          w-14 h-14 rounded-full bg-indigo-600 text-white shadow-lg 
          transition-all duration-200 ease-out
          hover:scale-105 hover:bg-indigo-700 
          focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2
          ${!isOpen ? 'animate-pulse motion-reduce:animate-none' : ''}
        `}
      >
        <span className="flex items-center justify-center w-full h-full">
          <svg
            className={`w-7 h-7 transition-transform duration-200 ease-out ${isOpen ? 'rotate-12' : 'rotate-0'} motion-reduce:transition-none`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Cool emoji face with sunglasses */}
            {/* Face circle */}
            <circle cx="12" cy="12" r="10" fill="#FCD34D" stroke="currentColor" strokeWidth="0.5"/>

            {/* Sunglasses */}
            <ellipse cx="8.5" cy="9.5" rx="2.5" ry="1.8" fill="#1F2937"/>
            <ellipse cx="15.5" cy="9.5" rx="2.5" ry="1.8" fill="#1F2937"/>
            <rect x="11" y="8.5" width="2" height="1" fill="#1F2937" rx="0.5"/>

            {/* Sunglasses frame */}
            <ellipse cx="8.5" cy="9.5" rx="2.7" ry="2" fill="none" stroke="#374151" strokeWidth="0.8"/>
            <ellipse cx="15.5" cy="9.5" rx="2.7" ry="2" fill="none" stroke="#374151" strokeWidth="0.8"/>

            {/* Cool smile */}
            <path d="M8 15c0 0 1.5 2 4 2s4-2 4-2" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round"/>

            {/* Side arms of sunglasses */}
            <line x1="5.8" y1="9.5" x2="4" y2="9" stroke="#374151" strokeWidth="0.8" strokeLinecap="round"/>
            <line x1="18.2" y1="9.5" x2="20" y2="9" stroke="#374151" strokeWidth="0.8" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default FloatingActions;
