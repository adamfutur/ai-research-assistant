import React, { useState } from 'react';
import { Search, Sparkles, BookOpen, TrendingUp } from 'lucide-react';

interface SearchFormProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

/**
 * Intelligent search form component with suggestions and validation
 */
export const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading = false }) => {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  
  // Example research topics for user inspiration
  const suggestedTopics = [
    'Artificial Intelligence in Healthcare',
    'Quantum Computing Applications',
    'CRISPR Gene Editing Technology',
    'Renewable Energy Storage Solutions',
    'Autonomous Vehicle Safety Systems',
    'Machine Learning in Drug Discovery',
    'Blockchain in Supply Chain Management',
    'Neural Networks for Climate Modeling'
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };
  
  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    setFocused(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main search form */}
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          {/* Search input */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 200)}
            placeholder="Enter your research topic (e.g., 'machine learning in medicine')"
            className="w-full px-6 py-4 pl-14 pr-32 text-lg border-2 border-gray-200 rounded-2xl 
                     focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200 
                     shadow-sm hover:shadow-md focus:shadow-lg bg-white"
            disabled={isLoading}
          />
          
          {/* Search icon */}
          <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          
          {/* Submit button */}
          <button
            type="submit"
            disabled={!query.trim() || isLoading}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 
                     bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl 
                     hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500
                     transition-all duration-200 font-medium shadow-sm hover:shadow-md
                     disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Research</span>
              </>
            )}
          </button>
        </div>
        
        {/* Suggestions dropdown */}
        {focused && query.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl 
                        border border-gray-100 z-50 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h4 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                Popular Research Topics
              </h4>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {suggestedTopics.map((topic, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(topic)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors 
                           duration-150 border-b border-gray-50 last:border-b-0 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-150">
                      {topic}
                    </span>
                    <TrendingUp className="w-4 h-4 text-gray-400 group-hover:text-blue-600 
                                        transition-colors duration-150" />
                  </div>
                </button>
              ))}
            </div>
            
            <div className="p-3 bg-gray-50 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center">
                Click any topic above or type your own research question
              </p>
            </div>
          </div>
        )}
      </form>
      
      {/* Search features highlight */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <BookOpen className="w-4 h-4 text-blue-600" />
          <span>Academic Papers</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <Search className="w-4 h-4 text-green-600" />
          <span>Patents & Research</span>
        </div>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <TrendingUp className="w-4 h-4 text-orange-600" />
          <span>Trends & Insights</span>
        </div>
      </div>
    </div>
  );
};