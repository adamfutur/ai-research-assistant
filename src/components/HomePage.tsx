import React from 'react';
import { 
  Brain, 
  BookOpen, 
  Search, 
  TrendingUp, 
  Zap, 
  Users, 
  Award, 
  ChevronRight,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { SearchForm } from './SearchForm';

interface HomePageProps {
  onSearch: (query: string) => void;
  isLoading?: boolean;
}

/**
 * Modern homepage component showcasing the AI Research Assistant capabilities
 */
export const HomePage: React.FC<HomePageProps> = ({ onSearch, isLoading }) => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze and synthesize research from multiple academic sources",
      color: "blue"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Academic Papers",
      description: "Access to millions of peer-reviewed papers from Google Scholar with intelligent relevance ranking",
      color: "green"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Patent Discovery",
      description: "Comprehensive patent search across global databases to identify innovations and IP landscapes",
      color: "purple"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Trend Analysis",
      description: "Real-time trending data and predictive insights to identify emerging research directions",
      color: "orange"
    }
  ];

  const stats = [
    { label: "Research Papers", value: "50M+", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Patents Analyzed", value: "10M+", icon: <Award className="w-5 h-5" /> },
    { label: "Research Fields", value: "500+", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Active Researchers", value: "100K+", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <Brain className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Academic
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Research Assistant
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Harness the power of artificial intelligence to accelerate your research. 
              Get comprehensive insights from academic papers, patents, trends, and breakthroughs 
              in seconds, not hours.
            </p>
            
            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Zap className="w-4 h-4 text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">10x Faster Research</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">AI-Generated Summaries</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <Award className="w-4 h-4 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-700">Citation Ready</span>
              </div>
            </div>
          </div>
          
          {/* Search Form */}
          <div className="mb-16">
            <SearchForm onSearch={onSearch} isLoading={isLoading} />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Research Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to conduct comprehensive academic research, 
            powered by cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 
                            hover:shadow-xl hover:border-gray-200 transition-all duration-300 h-full">
                <div className={`p-3 rounded-xl mb-6 inline-block bg-gradient-to-r 
                  ${feature.color === 'blue' ? 'from-blue-500 to-blue-600' : ''}
                  ${feature.color === 'green' ? 'from-green-500 to-green-600' : ''}
                  ${feature.color === 'purple' ? 'from-purple-500 to-purple-600' : ''}
                  ${feature.color === 'orange' ? 'from-orange-500 to-orange-600' : ''}
                  text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 
                             transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-sm font-medium text-blue-600 
                              group-hover:text-blue-700 transition-colors duration-300">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 
                                        transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Accelerate Your Research?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers who are already using AI to discover 
              breakthrough insights and accelerate their academic work.
            </p>
            <button
              onClick={() => document.querySelector('input')?.focus()}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold 
                       hover:bg-gray-50 transition-colors duration-200 shadow-lg 
                       hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-200
                       flex items-center space-x-2 mx-auto"
            >
              <Search className="w-5 h-5" />
              <span>Start Researching Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};