import React from 'react';
import Image from 'next/image';

interface DaycareLogoProps {
  name: string;
  logo?: string;
  className?: string;
}

export function DaycareLogo({ name, logo, className = "" }: DaycareLogoProps) {
  // If logo is provided, render Image
  if (logo) {
    return (
      <div className={`relative flex items-center justify-center rounded-xl overflow-hidden bg-white ${className}`}>
        <Image 
          src={logo} 
          alt={`${name} Logo`} 
          fill
          className="object-contain"
        />
      </div>
    );
  }

  // Fallback to generated icon
  const colors = [
    'text-orange-500',
    'text-blue-500',
    'text-green-500',
    'text-purple-500',
    'text-pink-500',
    'text-yellow-500',
  ];
  
  const bgColors = [
    'bg-orange-50',
    'bg-blue-50',
    'bg-green-50',
    'bg-purple-50',
    'bg-pink-50',
    'bg-yellow-50',
  ];
  
  const colorIndex = name.length % colors.length;
  const colorClass = colors[colorIndex];
  const bgClass = bgColors[colorIndex];

  return (
    <div className={`flex items-center justify-center rounded-xl ${bgClass} ${className}`}>
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={`w-3/5 h-3/5 ${colorClass}`}
      >
        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z" />
        <path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
        <path d="M12 3V1" />
        <path d="M8 4l-1-1" />
        <path d="M16 4l1-1" />
      </svg>
    </div>
  );
}
