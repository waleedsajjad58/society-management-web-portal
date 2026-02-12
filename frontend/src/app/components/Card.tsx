import React from 'react';

interface CardProps {
  title: string;
  value?: string | number; // Made optional
  description?: string;
  children?: React.ReactNode; // Added this to allow content inside
  className?: string; // Added to allow custom styling
}

export function Card({ title, value, description, children, className = "" }: CardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200 ${className}`}>
      {/* Title Header */}
      <div className="text-sm font-medium text-gray-600 mb-2 border-b pb-1">{title}</div>
      
      {/* If a 'value' is provided, show it (Stat Style) */}
      {value !== undefined && (
        <div className="text-3xl font-bold text-gray-900 mb-1">{value}</div>
      )}

      {/* If 'children' are provided, show them (Container Style) */}
      {children && (
        <div className="mt-4">
          {children}
        </div>
      )}

      {/* Description Footer */}
      {description && (
        <div className="text-xs text-gray-500 mt-2">{description}</div>
      )}
    </div>
  );
}