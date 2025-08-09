import React from 'react';
import type { TrendData } from '../types';

interface TrendsChartProps {
  data: TrendData[];
  title?: string;
}

/**
 * Interactive trends chart component for visualizing research interest over time
 */
export const TrendsChart: React.FC<TrendsChartProps> = ({ 
  data, 
  title = "Research Interest Trends" 
}) => {
  // Calculate chart dimensions and scaling
  const maxInterest = Math.max(...data.map(d => d.interest));
  const chartHeight = 200;
  const chartWidth = 600;
  
  // Generate SVG path for the trend line
  const generatePath = () => {
    if (data.length === 0) return '';
    
    const points = data.map((point, index) => {
      const x = (index / (data.length - 1)) * chartWidth;
      const y = chartHeight - (point.interest / maxInterest) * chartHeight;
      return `${x},${y}`;
    });
    
    return `M ${points.join(' L ')}`;
  };
  
  // Generate area fill path
  const generateAreaPath = () => {
    if (data.length === 0) return '';
    
    const linePath = generatePath();
    const lastPoint = data[data.length - 1];
    const lastX = chartWidth;
    
    return `${linePath} L ${lastX},${chartHeight} L 0,${chartHeight} Z`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      
      <div className="w-full overflow-x-auto">
        <svg 
          viewBox={`0 0 ${chartWidth} ${chartHeight + 40}`} 
          className="w-full h-auto"
          style={{ minWidth: '400px' }}
        >
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="60" height="40" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
            </pattern>
            
            {/* Gradient for area fill */}
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
          
          <rect width={chartWidth} height={chartHeight} fill="url(#grid)" />
          
          {/* Area under the curve */}
          <path
            d={generateAreaPath()}
            fill="url(#areaGradient)"
          />
          
          {/* Trend line */}
          <path
            d={generatePath()}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          />
          
          {/* Data points */}
          {data.map((point, index) => {
            const x = (index / (data.length - 1)) * chartWidth;
            const y = chartHeight - (point.interest / maxInterest) * chartHeight;
            
            return (
              <g key={index}>
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#3b82f6"
                  className="drop-shadow-sm hover:r-6 transition-all duration-200 cursor-pointer"
                />
                
                {/* Hover tooltip */}
                <g className="opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <rect
                    x={x - 25}
                    y={y - 35}
                    width="50"
                    height="25"
                    rx="4"
                    fill="#1f2937"
                    className="drop-shadow-lg"
                  />
                  <text
                    x={x}
                    y={y - 18}
                    textAnchor="middle"
                    className="text-xs fill-white font-medium"
                  >
                    {point.interest}%
                  </text>
                </g>
              </g>
            );
          })}
          
          {/* X-axis labels */}
          {data.map((point, index) => {
            if (index % 2 === 0) { // Show every other label to avoid crowding
              const x = (index / (data.length - 1)) * chartWidth;
              return (
                <text
                  key={index}
                  x={x}
                  y={chartHeight + 20}
                  textAnchor="middle"
                  className="text-xs fill-gray-500"
                >
                  {point.date}
                </text>
              );
            }
            return null;
          })}
        </svg>
      </div>
      
      {/* Chart legend and stats */}
      <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
            <span>Interest Level</span>
          </div>
          <div>
            Peak: <span className="font-semibold text-blue-600">{maxInterest}%</span>
          </div>
        </div>
        <div>
          {data.length} data points
        </div>
      </div>
    </div>
  );
};