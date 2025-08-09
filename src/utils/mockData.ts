// Mock data for demonstration purposes
import type { SearchResults, ResearchPaper, Patent, TrendData, NewsItem } from '../types';

export const mockSearchResults: SearchResults = {
  query: "artificial intelligence in healthcare",
  summary: {
    overview: "Artificial Intelligence in healthcare represents a rapidly evolving field that combines machine learning, deep learning, and medical expertise to improve patient outcomes, streamline clinical workflows, and accelerate medical research. Current applications span diagnostic imaging, drug discovery, personalized treatment recommendations, and predictive analytics for patient monitoring.",
    keyFindings: [
      "AI diagnostic tools show 94% accuracy in medical imaging, outperforming human radiologists in specific tasks",
      "Machine learning algorithms reduce drug discovery timelines by 30-50% through predictive modeling",
      "Natural Language Processing in Electronic Health Records improves clinical decision-making efficiency by 40%",
      "AI-powered wearables enable continuous patient monitoring with 97% accuracy in vital sign detection"
    ],
    futureDirections: [
      "Integration of multimodal AI systems combining imaging, genomics, and clinical data",
      "Development of explainable AI models for clinical decision transparency",
      "Expansion of AI applications in mental health and behavioral analysis",
      "Real-time AI systems for emergency care and critical patient monitoring"
    ],
    relatedFields: [
      "Medical Imaging Technology",
      "Computational Biology",
      "Digital Health Platforms",
      "Biomedical Informatics",
      "Precision Medicine"
    ]
  },
  papers: [
    {
      title: "Deep Learning Applications in Medical Image Analysis: A Comprehensive Review",
      authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez", "Dr. Aisha Patel"],
      abstract: "This comprehensive review examines the current state and future prospects of deep learning in medical image analysis, covering applications in radiology, pathology, and ophthalmology. We analyze performance metrics across 200+ studies and identify key challenges in clinical implementation.",
      publicationDate: "2024-01-15",
      journal: "Nature Medicine",
      citationCount: 342,
      url: "https://nature.com/articles/example1",
      doi: "10.1038/s41591-024-0001-x"
    },
    {
      title: "AI-Driven Drug Discovery: Transforming Pharmaceutical Research",
      authors: ["Dr. James Wilson", "Dr. Lisa Zhang", "Prof. Robert Kumar"],
      abstract: "An analysis of AI methodologies in pharmaceutical research, demonstrating how machine learning algorithms are revolutionizing compound identification, target validation, and clinical trial optimization. Includes case studies from 15 major pharmaceutical companies.",
      publicationDate: "2023-11-28",
      journal: "Cell",
      citationCount: 189,
      url: "https://cell.com/articles/example2",
      doi: "10.1016/j.cell.2023.11.028"
    },
    {
      title: "Predictive Analytics in ICU Patient Monitoring: A Machine Learning Approach",
      authors: ["Dr. Maria Santos", "Dr. David Kim"],
      abstract: "This study presents a novel machine learning framework for predicting patient deterioration in intensive care units, achieving 96% accuracy in early warning systems and reducing mortality rates by 23% across three major hospitals.",
      publicationDate: "2023-09-12",
      journal: "The Lancet Digital Health",
      citationCount: 156,
      url: "https://thelancet.com/articles/example3",
      doi: "10.1016/S2589-7500(23)00156-8"
    }
  ],
  patents: [
    {
      title: "AI-Powered Diagnostic Imaging System for Early Cancer Detection",
      inventors: ["Dr. Emily Johnson", "Prof. Alexander Thompson"],
      abstract: "A revolutionary diagnostic system utilizing convolutional neural networks to detect early-stage cancer markers in CT and MRI scans with 98% accuracy. The system integrates multiple imaging modalities and provides real-time diagnostic recommendations.",
      patentNumber: "US11,234,567",
      publicationDate: "2024-01-08",
      assignee: "MedTech Innovations Inc.",
      url: "https://patents.google.com/patent/US11234567"
    },
    {
      title: "Machine Learning Platform for Personalized Treatment Recommendations",
      inventors: ["Dr. Rachel Green", "Dr. Thomas Brown", "Dr. Jennifer Lee"],
      abstract: "An intelligent platform that analyzes patient genomic data, medical history, and clinical parameters to generate personalized treatment protocols. The system demonstrates 85% improvement in treatment efficacy compared to traditional approaches.",
      patentNumber: "US11,345,678",
      publicationDate: "2023-12-15",
      assignee: "BioAI Systems LLC",
      url: "https://patents.google.com/patent/US11345678"
    }
  ],
  trends: [
    { keyword: "AI healthcare", interest: 92, date: "2024-01" },
    { keyword: "AI healthcare", interest: 88, date: "2023-12" },
    { keyword: "AI healthcare", interest: 85, date: "2023-11" },
    { keyword: "AI healthcare", interest: 82, date: "2023-10" },
    { keyword: "AI healthcare", interest: 78, date: "2023-09" },
    { keyword: "AI healthcare", interest: 75, date: "2023-08" },
    { keyword: "AI healthcare", interest: 72, date: "2023-07" },
    { keyword: "AI healthcare", interest: 69, date: "2023-06" },
    { keyword: "AI healthcare", interest: 66, date: "2023-05" },
    { keyword: "AI healthcare", interest: 63, date: "2023-04" },
    { keyword: "AI healthcare", interest: 60, date: "2023-03" },
    { keyword: "AI healthcare", interest: 58, date: "2023-02" }
  ],
  news: [
    {
      title: "FDA Approves First AI-Powered Diagnostic Tool for Cardiac Imaging",
      summary: "The Food and Drug Administration has granted breakthrough device designation to an artificial intelligence system that can detect heart abnormalities in echocardiograms with 95% accuracy, potentially revolutionizing cardiac care in underserved areas.",
      source: "Medical News Today",
      publishedDate: "2024-01-20",
      url: "https://medicalnewstoday.com/example1",
      relevanceScore: 98
    },
    {
      title: "Major Healthcare AI Partnership Announced Between Tech Giants and Medical Centers",
      summary: "A groundbreaking collaboration between leading technology companies and top medical institutions aims to accelerate AI research in healthcare, with a $2.5 billion investment over five years focusing on precision medicine and diagnostic tools.",
      source: "Healthcare IT News",
      publishedDate: "2024-01-18",
      url: "https://healthcareitnews.com/example2",
      relevanceScore: 94
    },
    {
      title: "AI System Discovers New Antibiotic Compound in Record Time",
      summary: "Researchers using machine learning algorithms have identified a promising new antibiotic compound that shows effectiveness against drug-resistant bacteria, completing the discovery process in just 3 months compared to the traditional 10-15 year timeline.",
      source: "Science Daily",
      publishedDate: "2024-01-16",
      url: "https://sciencedaily.com/example3",
      relevanceScore: 91
    }
  ],
  searchTime: 2.34
};