import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      title: 'AI Text Translator',
      description: 'Transform your words across languages with precision and speed using advanced AI technology.',
      icon: (
        <div className="relative">
          <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
          <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-20 animate-ping"></div>
        </div>
      ),
      path: '/translate',
      features: [
        '100+ languages supported',
        'Real-time AI translation',
        'Smart context understanding',
        'Professional accuracy'
      ],
      buttonText: 'Start Translating',
      bgGradient: 'from-emerald-50 via-teal-50 to-cyan-50',
      accentColor: 'emerald'
    },
    {
      title: 'Secure String Generator',
      description: 'Create cryptographically secure random strings for passwords, tokens, and unique identifiers.',
      icon: (
        <div className="relative">
          <svg className="w-12 h-12 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <div className="absolute inset-0 bg-violet-400 rounded-full opacity-20 animate-ping" style={{animationDelay: '1s'}}></div>
        </div>
      ),
      path: '/random',
      features: [
        'Military-grade security',
        'Customizable length',
        'History & clipboard ready',
        'One-click generation'
      ],
      buttonText: 'Generate Strings',
      bgGradient: 'from-violet-50 via-purple-50 to-indigo-50',
      accentColor: 'violet'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 border border-violet-200 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-violet-300 transform rotate-45 animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
                <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent animate-gradient-x">
                  LinguaForge
                </span>
              </h1>
              <div className="h-2 w-32 mx-auto bg-gradient-to-r from-violet-500 to-emerald-500 rounded-full animate-pulse"></div>
            </div>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-700 mb-4 max-w-4xl mx-auto font-light">
              Where <span className="font-semibold text-violet-600">language meets technology</span>
            </p>
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
              Professional translation tools and secure string generation for the modern world
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/translate"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-emerald-500/25 transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  Explore Translation
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/random"
                className="group px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl hover:from-violet-600 hover:to-purple-600 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-violet-500/25 transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  Generate Strings
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100+</div>
                <div className="text-slate-600">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">∞</div>
                <div className="text-slate-600">Secure Strings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">⚡</div>
                <div className="text-slate-600">Lightning Fast</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Powerful Tools,{' '}
            <span className="bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent">
              Beautiful Experience
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Engineered for precision, designed for delight
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-white/20`}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-50`}></div>
              
              <div className="relative p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 ml-4">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-slate-700 mb-6 text-lg leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-700">
                      <div className={`w-2 h-2 bg-${feature.accentColor}-500 rounded-full mr-3 animate-pulse`}></div>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  to={feature.path}
                  className={`group inline-flex items-center px-6 py-3 bg-gradient-to-r ${
                    feature.accentColor === 'emerald' 
                      ? 'from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/25' 
                      : 'from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 shadow-violet-500/25'
                  } text-white rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 font-semibold`}
                >
                  {feature.buttonText}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Showcase */}
      <div className="relative z-10 bg-white/50 backdrop-blur-sm py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-xl text-slate-600">
              Performance meets elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'React Ecosystem',
                description: 'Leveraging hooks, state management, and modern patterns',
                icon: '⚛️',
                color: 'from-blue-400 to-cyan-400'
              },
              {
                title: 'Responsive Design',
                description: 'Fluid layouts that adapt to any screen size',
                icon: '📱',
                color: 'from-emerald-400 to-teal-400'
              },
              {
                title: 'API Integration',
                description: 'Seamless connectivity with translation services',
                icon: '🔗',
                color: 'from-violet-400 to-purple-400'
              }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{tech.title}</h3>
                <p className="text-slate-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-emerald-600 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              Your Workflow?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              Join thousands who trust LinguaForge for their translation and string generation needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/translate"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-emerald-500/25 transform hover:scale-105"
              >
                Start Translating Now
              </Link>
              <Link
                to="/random"
                className="px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl hover:from-violet-600 hover:to-purple-600 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-violet-500/25 transform hover:scale-105"
              >
                Generate Secure Strings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
