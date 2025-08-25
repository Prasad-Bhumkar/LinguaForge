import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent leading-none">
              404
            </h1>
            <div className="h-2 w-24 mx-auto bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full animate-pulse"></div>
          </div>

          {/* Animated Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full shadow-2xl animate-bounce-slow">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The page you're looking for seems to have gotten lost in translation. 
              Let's get you back to somewhere useful!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              to="/"
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 text-white rounded-xl hover:from-violet-600 hover:to-indigo-600 transition-all duration-200 font-semibold shadow-lg hover:shadow-violet-500/25 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Home
            </Link>
            <Link
              to="/translate"
              className="group inline-flex items-center px-6 py-3 border-2 border-violet-200 text-violet-600 rounded-xl hover:bg-violet-50 hover:border-violet-300 transition-all duration-200 font-semibold"
            >
              Try Translator
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Fun Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-violet-600">100+</div>
              <div className="text-sm text-slate-500">Languages</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-indigo-600">∞</div>
              <div className="text-sm text-slate-500">Possibilities</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">0</div>
              <div className="text-sm text-slate-500">Worries</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
