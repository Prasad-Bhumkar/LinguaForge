import "./global.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastProvider } from "./components/Toast.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import FloatingActions from "./components/FloatingActions.jsx";
import { TranslationSkeleton } from "./components/Skeleton.jsx";
import { Home, Translate, Random, NotFound } from "./utils/lazyImports.js";

const App = () => (
  <ToastProvider>
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-3xl shadow-xl mb-6 animate-pulse">
                    <div className="w-10 h-10 bg-white/30 rounded-lg animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-8 bg-gray-200 rounded-lg w-64 mx-auto animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
                  </div>
                </div>
                <TranslationSkeleton />
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/translate" element={<Translate />} />
              <Route path="/random" element={<Random />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </BrowserRouter>
  </ToastProvider>
);

export default App;
