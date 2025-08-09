import React from 'react';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  ExternalLink, 
  FileText, 
  TrendingUp, 
  Newspaper,
  Brain,
  Award,
  Search,
  Clock,
  ChevronRight,
  Lightbulb,
  Target
} from 'lucide-react';
import type { SearchResults } from '../types';
import { TrendsChart } from './TrendsChart';

interface ResultsPageProps {
  results: SearchResults;
  onNewSearch: () => void;
}

/**
 * Comprehensive results display component with organized sections
 */
export const ResultsPage: React.FC<ResultsPageProps> = ({ results, onNewSearch }) => {
  const {
    query,
    summary,
    papers,
    patents,
    trends,
    news,
    searchTime
  } = results;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Research Results for "{query}"
              </h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Completed in {searchTime}s</span>
                </div>
                <div className="flex items-center">
                  <Search className="w-4 h-4 mr-1" />
                  <span>{papers.length + patents.length + news.length} results found</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onNewSearch}
              className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 transition-colors duration-200 font-medium
                       flex items-center space-x-2"
            >
              <Search className="w-4 h-4" />
              <span>New Search</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* AI Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-600 rounded-lg mr-3">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">AI Research Summary</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {summary.overview}
                </p>
                
                {/* Key Findings */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Lightbulb className="w-5 h-5 text-yellow-600 mr-2" />
                    Key Findings
                  </h3>
                  <ul className="space-y-2">
                    {summary.keyFindings.map((finding, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Future Directions */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Target className="w-5 h-5 text-green-600 mr-2" />
                    Future Research Directions
                  </h3>
                  <ul className="space-y-2">
                    {summary.futureDirections.map((direction, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{direction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic Papers */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-xl font-semibold text-gray-900">Academic Papers</h2>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {papers.length} papers
                  </span>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {papers.map((paper, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-1 pr-4">
                        <a 
                          href={paper.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 transition-colors duration-200 flex items-start"
                        >
                          {paper.title}
                          <ExternalLink className="w-4 h-4 ml-2 mt-1 flex-shrink-0" />
                        </a>
                      </h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="w-4 h-4 mr-1" />
                        <span>{paper.citationCount} citations</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{paper.authors.join(', ')}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{paper.publicationDate}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        <span>{paper.journal}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {paper.abstract}
                    </p>
                    
                    {paper.doi && (
                      <div className="mt-3 text-sm">
                        <span className="text-gray-600">DOI: </span>
                        <a 
                          href={`https://doi.org/${paper.doi}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {paper.doi}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Patents */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-purple-600 mr-3" />
                    <h2 className="text-xl font-semibold text-gray-900">Related Patents</h2>
                  </div>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                    {patents.length} patents
                  </span>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {patents.map((patent, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <a 
                        href={patent.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-purple-600 transition-colors duration-200 flex items-start"
                      >
                        {patent.title}
                        <ExternalLink className="w-4 h-4 ml-2 mt-1 flex-shrink-0" />
                      </a>
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4 flex-wrap">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{patent.inventors.join(', ')}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{patent.publicationDate}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        <span>{patent.patentNumber}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {patent.abstract}
                    </p>
                    
                    <div className="text-sm">
                      <span className="text-gray-600">Assignee: </span>
                      <span className="font-medium text-gray-900">{patent.assignee}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent News */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Newspaper className="w-6 h-6 text-green-600 mr-3" />
                    <h2 className="text-xl font-semibold text-gray-900">Recent Breakthroughs</h2>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {news.length} articles
                  </span>
                </div>
              </div>
              
              <div className="divide-y divide-gray-100">
                {news.map((item, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex-1 pr-4">
                        <a 
                          href={item.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-green-600 transition-colors duration-200 flex items-start"
                        >
                          {item.title}
                          <ExternalLink className="w-4 h-4 ml-2 mt-1 flex-shrink-0" />
                        </a>
                      </h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="w-4 h-4 mr-1" />
                        <span>{item.relevanceScore}% relevant</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                      <div className="flex items-center">
                        <Newspaper className="w-4 h-4 mr-1" />
                        <span>{item.source}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{item.publishedDate}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Trends Chart */}
            <TrendsChart data={trends} title="Interest Over Time" />
            
            {/* Related Fields */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                Related Research Fields
              </h3>
              
              <div className="space-y-2">
                {summary.relatedFields.map((field, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 
                                           transition-colors duration-200 cursor-pointer group">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                      {field}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Research Overview
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Academic Papers</span>
                  <span className="font-semibold text-gray-900">{papers.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Patents Found</span>
                  <span className="font-semibold text-gray-900">{patents.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">News Articles</span>
                  <span className="font-semibold text-gray-900">{news.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Citations</span>
                  <span className="font-semibold text-gray-900">
                    {papers.reduce((sum, paper) => sum + paper.citationCount, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};