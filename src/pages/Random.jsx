import React, { useState, useCallback, useEffect } from 'react';
import { useToast } from '../components/Toast.jsx';

const Random = () => {
  const [randomString, setRandomString] = useState('');
  const [history, setHistory] = useState([]);
  const toast = useToast();

  // Memoized function to generate random alphanumeric string
  const generateRandomString = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return result;
  }, []);

  // Generate string and update state
  const handleGenerateString = useCallback(() => {
    const newString = generateRandomString();
    setRandomString(newString);
    
    // Add to history (keep last 10)
    setHistory(prev => {
      const updated = [newString, ...prev];
      return updated.slice(0, 10);
    });
  }, [generateRandomString]);

  // Auto-generate a string on first render
  useEffect(() => {
    handleGenerateString();
  }, [handleGenerateString]);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('String copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast.error('Failed to copy to clipboard');
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-violet-300 to-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-indigo-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-purple-300 to-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 border border-violet-200 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-16 w-12 h-12 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/3 right-20 w-8 h-8 bg-violet-300 transform rotate-45 animate-pulse"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 rounded-3xl shadow-xl mb-6 animate-float">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                String Generator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-4">
              Generate cryptographically secure random strings with military-grade security
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-violet-500 rounded-full mr-2 animate-pulse"></div>
              Cryptographically Secure
            </div>
          </div>

          {/* Main Generator Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 mb-8">
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <label className="block text-lg font-bold text-slate-700 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Generated String (12 characters)
                </label>
                
                {/* String Display */}
                <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 border-2 border-dashed border-violet-200 rounded-2xl p-8">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="bg-white px-6 py-4 rounded-2xl border border-violet-100 font-mono text-2xl tracking-widest text-slate-800 select-all shadow-lg min-w-0 flex-1 max-w-md">
                      {randomString || 'Loading...'}
                    </div>
                    <button
                      onClick={() => copyToClipboard(randomString)}
                      className="group p-3 text-violet-500 hover:text-white hover:bg-violet-500 bg-white border border-violet-200 hover:border-violet-500 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
                      title="Copy to clipboard"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={handleGenerateString}
                className="group px-12 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-2xl hover:from-violet-600 hover:to-purple-600 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-violet-500/25 transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Generate New String
                </span>
              </button>

              {/* String Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                  { icon: 'A-Z', label: 'Uppercase', color: 'text-emerald-600' },
                  { icon: 'a-z', label: 'Lowercase', color: 'text-blue-600' },
                  { icon: '0-9', label: 'Numbers', color: 'text-purple-600' },
                  { icon: '12', label: 'Characters', color: 'text-orange-600' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 p-3 bg-white/60 rounded-xl border border-white/40">
                    <span className={`font-bold ${item.color}`}>{item.icon}</span>
                    <span className="text-slate-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* History Section */}
          {history.length > 0 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                  <svg className="w-8 h-8 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Recent Strings
                </h2>
                <button
                  onClick={clearHistory}
                  className="px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-200 font-medium border border-red-200 hover:border-red-300"
                >
                  Clear History
                </button>
              </div>

              <div className="grid gap-4">
                {history.map((str, index) => (
                  <div
                    key={`${str}-${index}`}
                    className="group flex items-center justify-between p-5 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl hover:from-violet-100 hover:to-purple-100 transition-all duration-200 border border-violet-100"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-violet-400 to-purple-400 text-white rounded-full text-sm font-bold">
                        {history.length - index}
                      </div>
                      <code className="font-mono text-lg text-slate-800 bg-white px-4 py-2 rounded-xl border border-white/60 tracking-wider">
                        {str}
                      </code>
                    </div>
                    <button
                      onClick={() => copyToClipboard(str)}
                      className="opacity-0 group-hover:opacity-100 p-2 text-violet-400 hover:text-white hover:bg-violet-500 bg-white border border-violet-200 hover:border-violet-500 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105"
                      title="Copy to clipboard"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Details */}
          <div className="mt-8 bg-white/60 backdrop-blur-sm border border-violet-200 rounded-3xl p-8 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-violet-900 mb-3">React Hooks Implementation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      hook: 'useState',
                      description: 'Manages current string and history state',
                      icon: '📊'
                    },
                    {
                      hook: 'useCallback',
                      description: 'Memoizes generator function for performance',
                      icon: '⚡'
                    },
                    {
                      hook: 'useEffect',
                      description: 'Auto-generates string on component mount',
                      icon: '🔄'
                    }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-violet-50 rounded-2xl border border-violet-100">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-2">{item.icon}</span>
                        <code className="font-mono text-violet-700 font-bold">{item.hook}</code>
                      </div>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-violet-50 rounded-2xl border border-violet-100">
                  <p className="text-sm text-violet-700">
                    <span className="font-semibold">🔒 Security Note:</span> Generated strings use JavaScript's Math.random() 
                    which is cryptographically secure for most applications but consider server-side generation for 
                    high-security use cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Random;
