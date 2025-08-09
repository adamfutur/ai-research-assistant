import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  message?: string;
  className?: string;
}

/**
 * Animated loading spinner component with customizable message
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = "Processing your research request...",
  className = ""
}) => {
  return (
    <div className={`flex flex-col items-center justify-center p-12 ${className}`}>
      <div className="relative">
        {/* Animated background circle */}
        <div className="w-16 h-16 border-4 border-blue-100 rounded-full animate-pulse"></div>
        
        {/* Spinning loader */}
        <Loader2 className="w-16 h-16 text-blue-600 animate-spin absolute inset-0" />
      </div>
      
      {/* Loading message */}
      <div className="mt-6 text-center">
        <p className="text-lg font-medium text-gray-700 mb-2">{message}</p>
        <p className="text-sm text-gray-500 max-w-md">
          We're searching through academic papers, patents, trends, and recent breakthroughs 
          to provide you with comprehensive research insights.
        </p>
      </div>
      
      {/* Progress indicators */}
      <div className="mt-6 flex space-x-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
};