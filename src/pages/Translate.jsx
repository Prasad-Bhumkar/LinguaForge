import React, { useState } from 'react';
import { translateText } from '../services/translatorAPI';
import { useToast } from '../components/Toast.jsx';

const Translate = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const toast = useToast();

  const languages = [
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'nl', name: 'Dutch' },
  ];

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter text to translate');
      return;
    }

    if (!import.meta.env.VITE_RAPIDAPI_KEY) {
      setError('RapidAPI key not found. Please add VITE_RAPIDAPI_KEY to your .env file.');
      return;
    }

    setIsLoading(true);
    setError('');
    setTranslatedText('');

    try {
      const translated = await translateText(inputText, targetLanguage);
      if (translated) {
        setTranslatedText(translated);
      } else {
        setError('Translation returned empty result. Please try again.');
      }
    } catch (err) {
      console.error('Translation error:', err);
      if (err.message === 'RATE_LIMIT') {
        setError('You have reached the hourly request limit. Please wait and try again later.');
      } else if (err.message === 'QUOTA_EXCEEDED') {
        setError('You have reached your monthly translation limit for the free plan. Please upgrade your plan on RapidAPI to continue translating.');
      } else if (err.message.includes('HTTP_401') || err.message.includes('HTTP_403')) {
        setError('API authentication failed. Please check your RapidAPI key in the .env file.');
      } else if (err.message.includes('Network')) {
        setError('Network error. Please check your internet connection.');
      } else {
        setError('Translation failed. Please try again or check your API key.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const clearAll = () => {
    setInputText('');
    setTranslatedText('');
    setError('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-teal-300 to-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-16 h-16 border border-emerald-200 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl shadow-xl mb-6 animate-float">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                AI Translator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-4">
              Transform your words across languages with precision and speed
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></div>
              Powered by Deep Translate AI
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-slate-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-5m-1.414-1.414a2 2 0 00-2.828 0l-2 2a2 2 0 00-.586 1.414V6h5V4.586a2 2 0 00-.586-1.414l-2-2z" />
                  </svg>
                  English Text
                </label>
                <div className="relative">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter your English text here..."
                    className="w-full h-40 p-4 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none text-slate-700 bg-white/90 backdrop-blur-sm shadow-inner transition-all duration-200"
                    maxLength={5000}
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-slate-400 bg-white/80 px-2 py-1 rounded-lg">
                    {inputText.length}/5000
                  </div>
                </div>
              </div>

              {/* Output Section */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-slate-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Translated Text
                </label>
                <div className="relative w-full h-40 p-4 border border-slate-200 rounded-2xl bg-slate-50/90 backdrop-blur-sm overflow-y-auto shadow-inner">
                  {isLoading && (
                    <div className="flex items-center justify-center h-full">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 border-3 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
                        <span className="text-emerald-600 font-medium">Translating...</span>
                      </div>
                    </div>
                  )}
                  {!isLoading && translatedText && (
                    <div className="space-y-2">
                      <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">{translatedText}</p>
                      <button
                        onClick={async () => {
                          try {
                            await navigator.clipboard.writeText(translatedText);
                            toast.success('Translation copied to clipboard!');
                          } catch (err) {
                            toast.error('Failed to copy to clipboard');
                          }
                        }}
                        className="inline-flex items-center px-2 py-1 text-xs text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy
                      </button>
                    </div>
                  )}
                  {!isLoading && !translatedText && !error && (
                    <div className="flex items-center justify-center h-full text-slate-400 italic">
                      <svg className="w-8 h-8 mr-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Translation will appear here...
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-semibold text-slate-700 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  Target Language:
                </label>
                <select
                  value={targetLanguage}
                  onChange={(e) => setTargetLanguage(e.target.value)}
                  className="px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white/90 backdrop-blur-sm font-medium text-slate-700 shadow-sm"
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={clearAll}
                  className="px-6 py-3 border border-slate-300 rounded-xl text-slate-700 hover:bg-slate-50 transition-all duration-200 font-medium shadow-sm hover:shadow-md"
                >
                  Clear All
                </button>
                <button
                  onClick={handleTranslate}
                  disabled={isLoading || !inputText.trim()}
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl hover:from-emerald-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105 disabled:transform-none"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Translating...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Translate
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className={`mt-6 p-4 rounded-2xl border ${
                error.includes('monthly translation limit') || error.includes('hourly request limit') 
                  ? 'bg-amber-50 border-amber-200' 
                  : 'bg-red-50 border-red-200'
              } shadow-sm`}>
                <div className="flex items-start">
                  <svg className={`w-5 h-5 mt-0.5 mr-3 ${
                    error.includes('monthly translation limit') || error.includes('hourly request limit')
                      ? 'text-amber-500'
                      : 'text-red-500'
                  }`} fill="currentColor" viewBox="0 0 20 20">
                    {error.includes('monthly translation limit') || error.includes('hourly request limit') ? (
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    ) : (
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    )}
                  </svg>
                  <div>
                    <h3 className={`text-sm font-semibold ${
                      error.includes('monthly translation limit') || error.includes('hourly request limit')
                        ? 'text-amber-800'
                        : 'text-red-800'
                    }`}>
                      {error.includes('monthly translation limit') || error.includes('hourly request limit')
                        ? 'Quota Limit Reached'
                        : 'Translation Error'
                      }
                    </h3>
                    <p className={`text-sm mt-1 ${
                      error.includes('monthly translation limit') || error.includes('hourly request limit')
                        ? 'text-amber-700'
                        : 'text-red-700'
                    }`}>{error}</p>
                    {error.includes('API key') && (
                      <p className="text-xs text-red-600 mt-2">
                        Add your RapidAPI key to the .env file as VITE_RAPIDAPI_KEY
                      </p>
                    )}
                    {error.includes('monthly translation limit') && (
                      <div className="mt-3">
                        <a 
                          href="https://rapidapi.com/gatzuma/api/deep-translate1/pricing" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-800 text-xs font-medium rounded-full transition-colors"
                        >
                          Upgrade Plan
                          <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* API Setup Instructions */}
          {/* <div className="bg-white/60 backdrop-blur-sm border border-emerald-200 rounded-3xl p-8 shadow-xl">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">Deep Translate API Setup</h3>
                <ol className="text-sm text-slate-700 space-y-2 list-decimal list-inside">
                  <li>Visit <a href="https://rapidapi.com/gatzuma/api/deep-translate1" className="text-emerald-600 hover:text-emerald-700 underline font-medium" target="_blank" rel="noopener noreferrer">Deep Translate on RapidAPI</a></li>
                  <li>Create a free RapidAPI account</li>
                  <li>Subscribe to Deep Translate (free tier: 200K chars/month)</li>
                  <li>Copy your API key from the dashboard</li>
                  <li>Add <code className="bg-slate-100 px-2 py-1 rounded text-xs font-mono">VITE_RAPIDAPI_KEY=your_key</code> to .env</li>
                  <li>Restart your development server</li>
                </ol>
                <div className="mt-4 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-xs text-emerald-700">
                    <span className="font-semibold">💡 Pro Tip:</span> Deep Translate supports 100+ languages with professional-grade accuracy and context awareness.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Translate;
