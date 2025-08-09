import React, { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ResultsPage } from './components/ResultsPage';
import { LoadingSpinner } from './components/LoadingSpinner';
import { performResearch } from './utils/api';
import type { SearchResults } from './types';

/**
 * Main application component managing state and navigation
 */
function App() {
  const [currentView, setCurrentView] = useState<'home' | 'loading' | 'results'>('home');
  const [searchResults, setSearchResults] = useState<SearchResults | null>(null);
  const [error, setError] = useState<string | null>(null);

  /**
   * Handle search request from user
   */
  const handleSearch = async (query: string) => {
    try {
      setError(null);
      setCurrentView('loading');
      
      // Perform the research using our API utilities
      const response = await performResearch(query);
      
      if (response.status === 'success') {
        setSearchResults(response.data);
        setCurrentView('results');
      } else {
        setError(response.message || 'An error occurred during research');
        setCurrentView('home');
      }
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to perform research. Please try again.');
      setCurrentView('home');
    }
  };

  /**
   * Reset to home view for new search
   */
  const handleNewSearch = () => {
    setCurrentView('home');
    setSearchResults(null);
    setError(null);
  };

  // Render appropriate view based on current state
  return (
    <div className="min-h-screen">
      {/* Error Message */}
      {error && (
        <div className="fixed top-4 right-4 z-50 bg-red-100 border border-red-400 text-red-700 
                       px-4 py-3 rounded-lg shadow-lg max-w-md">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {currentView === 'home' && (
        <HomePage 
          onSearch={handleSearch} 
          isLoading={currentView === 'loading'} 
        />
      )}
      
      {currentView === 'loading' && (
        <LoadingSpinner 
          message="Analyzing your research topic..."
          className="min-h-screen bg-gray-50"
        />
      )}
      
      {currentView === 'results' && searchResults && (
        <ResultsPage 
          results={searchResults} 
          onNewSearch={handleNewSearch} 
        />
      )}
    </div>
  );
}

export default App;