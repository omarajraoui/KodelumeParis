import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center min-h-64">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-kodelume-gray-200 border-t-kodelume-yellow mx-auto mb-4"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-kodelume-yellow/30 mx-auto"></div>
        </div>
        <p className="text-kodelume-gray-600 text-lg font-body animate-pulse">
          Chargement des informations...
        </p>
      </div>
    </div>
  );
}

export default Loader;
