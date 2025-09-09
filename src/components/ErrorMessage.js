import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8 shadow-sm">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-red-800 font-semibold text-lg">Oops! Something went wrong</h3>
          <p className="text-red-700 mt-1">{message}</p>
          <div className="mt-3">
            <p className="text-red-600 text-sm">
              💡 <strong>Tip:</strong> Try refreshing the page or checking your internet connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
