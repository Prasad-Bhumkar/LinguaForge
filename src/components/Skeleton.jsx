import React from 'react';

// Base Skeleton Component
export const Skeleton = ({ className = '', width, height, ...props }) => {
  return (
    <div
      className={`
        animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 
        bg-[length:200%_100%] rounded 
        ${className}
      `}
      style={{ width, height }}
      {...props}
    />
  );
};

// Text Skeleton
export const SkeletonText = ({ lines = 1, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 && lines > 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  );
};

// Card Skeleton
export const SkeletonCard = ({ className = '' }) => {
  return (
    <div className={`p-6 bg-white rounded-xl border ${className}`}>
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/3" />
        <SkeletonText lines={3} />
        <div className="flex space-x-2">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-16" />
        </div>
      </div>
    </div>
  );
};

// Translation Skeleton
export const TranslationSkeleton = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Skeleton */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="relative">
            <div className="w-full h-40 p-4 border border-slate-200 rounded-2xl bg-gray-50">
              <SkeletonText lines={4} />
            </div>
            <div className="absolute bottom-3 right-3">
              <Skeleton className="h-4 w-12" />
            </div>
          </div>
        </div>

        {/* Output Skeleton */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-4 h-4" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="w-full h-40 p-4 border border-slate-200 rounded-2xl bg-slate-50">
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-3">
                <Skeleton className="w-8 h-8 rounded-full mx-auto" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls Skeleton */}
      <div className="mt-8 flex flex-col lg:flex-row gap-6 items-center justify-between">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>
        <div className="flex space-x-3">
          <Skeleton className="h-12 w-20 rounded-xl" />
          <Skeleton className="h-12 w-24 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

// Button with loading state
export const LoadingButton = ({ 
  children, 
  loading = false, 
  className = '', 
  disabled = false,
  ...props 
}) => {
  return (
    <button
      className={`
        relative overflow-hidden
        ${loading ? 'cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      <span className={loading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Loading...</span>
          </div>
        </div>
      )}
    </button>
  );
};

export default Skeleton;
