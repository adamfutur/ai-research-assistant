// Type definitions for the AI Academic Research Assistant

export interface ResearchTopic {
  query: string;
  category?: string;
  timeframe?: string;
}

export interface ResearchPaper {
  title: string;
  authors: string[];
  abstract: string;
  publicationDate: string;
  journal: string;
  citationCount: number;
  url: string;
  doi?: string;
}

export interface Patent {
  title: string;
  inventors: string[];
  abstract: string;
  patentNumber: string;
  publicationDate: string;
  assignee: string;
  url: string;
}

export interface TrendData {
  keyword: string;
  interest: number;
  date: string;
}

export interface NewsItem {
  title: string;
  summary: string;
  source: string;
  publishedDate: string;
  url: string;
  relevanceScore: number;
}

export interface ResearchSummary {
  overview: string;
  keyFindings: string[];
  futureDirections: string[];
  relatedFields: string[];
}

export interface SearchResults {
  query: string;
  summary: ResearchSummary;
  papers: ResearchPaper[];
  patents: Patent[];
  trends: TrendData[];
  news: NewsItem[];
  searchTime: number;
}

export interface APIResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}