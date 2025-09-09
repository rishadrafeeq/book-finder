import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-white/20"></div>
        <div className="animate-spin rounded-full h-20 w-20 border-4 border-white border-t-transparent absolute top-0 left-0"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-transparent animate-pulse"></div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-white font-semibold text-lg drop-shadow-md">Searching for books...</p>
        <p className="text-white/70 text-sm mt-2 drop-shadow-sm">This may take a moment</p>
        <div className="flex justify-center mt-4 space-x-1">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
