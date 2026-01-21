'use client';

import { useState } from 'react';

type WorkCategory = 'all' | 'festivals' | 'exhibitions' | 'sports' | 'cultural';

type WorkCategoryFilterProps = {
  selectedCategories: WorkCategory[];
  onCategoryChange: (categories: WorkCategory[]) => void;
  className?: string;
  isTablet?: boolean;
  cellSize?: number;
};

export default function WorkCategoryFilter({
  selectedCategories,
  onCategoryChange,
  className = '',
  isTablet = false,
  cellSize = 0
}: WorkCategoryFilterProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categories: WorkCategory[] = ['all', 'festivals', 'exhibitions', 'sports', 'cultural'];
  const filterableCategories: WorkCategory[] = ['festivals', 'exhibitions', 'sports', 'cultural'];

  const handleCategoryClick = (category: WorkCategory, closeDropdown = false) => {
    if (category === 'all') {
      onCategoryChange(['all']);
      if (closeDropdown) setIsDropdownOpen(false);
      return;
    }

    let newCategories: WorkCategory[];

    if (selectedCategories.includes('all')) {
      // If coming from 'all', select only the clicked category
      newCategories = [category];
    } else {
      if (selectedCategories.includes(category)) {
        // Remove the category if it's already selected
        newCategories = selectedCategories.filter(c => c !== category);
        // If no categories are selected, switch to 'all'
        if (newCategories.length === 0) {
          newCategories = ['all'];
        }
      } else {
        // Add the category
        newCategories = [...selectedCategories, category];
        // If all filterable categories are selected, switch to 'all'
        if (newCategories.length === filterableCategories.length) {
          newCategories = ['all'];
        }
      }
    }

    onCategoryChange(newCategories);
    if (closeDropdown) setIsDropdownOpen(false);
  };

  const isSelected = (category: WorkCategory) => {
    if (selectedCategories.includes('all')) {
      return category === 'all';
    }
    return selectedCategories.includes(category);
  };

  // Get display text for current selection
  const getSelectionText = () => {
    if (selectedCategories.includes('all')) return 'ALL';
    if (selectedCategories.length === 1) return selectedCategories[0].toUpperCase();
    return `${selectedCategories.length} SELECTED`;
  };

  // Tablet Layout - Joined horizontal buttons (when isTablet prop is true)
  if (isTablet) {
    return (
      <div className={`flex ${className}`}>
        {categories.map((category, index) => (
          <button
            type="button"
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`
              button border border-marker
              min-w-[90px] text-center
              whitespace-nowrap
              focus:outline-none
              ${index > 0 ? '-ml-[1px]' : ''}
              ${isSelected(category)
                ? 'bg-marker text-white relative z-10 transition-none' 
                : 'bg-white text-marker hover:bg-marker/10 transition-colors duration-200'
              }
            `}
            style={{ padding: 'clamp(6px, 1vw, 8px) clamp(16px, 2.5vw, 24px)' }}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }
  
  // Default: Mobile dropdown OR Desktop horizontal
  return (
    <>
      {/* Mobile Layout (< 768px): Dropdown/Accordion */}
      <div className={`md:hidden relative ${className}`}>
        {/* Dropdown Toggle Button */}
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="button border border-marker bg-white text-marker w-full flex items-center justify-between focus:outline-none"
          style={{ padding: 'clamp(10px, 2vw, 14px) clamp(16px, 2.5vw, 24px)' }}
        >
          <span>FILTER: {getSelectionText()}</span>
          <svg 
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {/* Dropdown Menu */}
        <div 
          className={`
            absolute top-full left-0 right-0 z-30
            bg-white border border-marker border-t-0
            overflow-hidden transition-all duration-200
            ${isDropdownOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => handleCategoryClick(category, true)}
              className={`
                w-full flex items-center gap-3 text-left
                button border-b border-marker/20 last:border-b-0
                transition-colors duration-200
                ${isSelected(category)
                  ? 'bg-marker/10 text-marker' 
                  : 'bg-white text-marker hover:bg-marker/5'
                }
              `}
              style={{ padding: 'clamp(10px, 2vw, 14px) clamp(16px, 2.5vw, 24px)' }}
            >
              {/* Radio-style indicator */}
              <span 
                className={`
                  w-4 h-4 rounded-full border-2 border-marker flex-shrink-0
                  flex items-center justify-center
                `}
              >
                {isSelected(category) && (
                  <span className="w-2 h-2 rounded-full bg-marker" />
                )}
              </span>
              <span>{category.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
      
      {/* Desktop Layout (≥ 1024px): BOTTOM-LEFT corner locked to grid start */}
      <div 
        className={`hidden lg:flex absolute z-20 ${className}`} 
        style={{ 
          top: '0px',
          left: '0px',
          transform: 'translateY(-100%)'
        }}
      >
        {categories.map((category, index) => (
          <button
            type="button"
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`
              button border border-marker
              min-w-[90px] text-center
              whitespace-nowrap
              focus:outline-none
              ${index > 0 ? '-ml-[1px]' : ''}
              ${isSelected(category)
                ? 'bg-marker text-white relative z-10 transition-none' 
                : 'bg-white text-marker hover:bg-marker/10 transition-colors duration-200'
              }
            `}
            style={{ padding: 'clamp(6px, 1vw, 8px) clamp(16px, 2.5vw, 24px)' }}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  );
}

