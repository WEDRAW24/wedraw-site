'use client';

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
  const categories: WorkCategory[] = ['all', 'festivals', 'exhibitions', 'sports', 'cultural'];
  const filterableCategories: WorkCategory[] = ['festivals', 'exhibitions', 'sports', 'cultural'];

  const handleCategoryClick = (category: WorkCategory) => {
    if (category === 'all') {
      onCategoryChange(['all']);
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
  };

  const isSelected = (category: WorkCategory) => {
    if (selectedCategories.includes('all')) {
      return category === 'all';
    }
    return selectedCategories.includes(category);
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
              inline-block
              font-mono font-mono-light uppercase border border-marker
              px-4 py-1 min-w-[90px] text-center
              tracking-wider
              whitespace-nowrap
              focus:outline-none
              ${index > 0 ? '-ml-[1px]' : ''}
              ${isSelected(category)
                ? 'bg-marker text-white relative z-10 transition-none' 
                : 'bg-white text-marker hover:bg-marker/10 transition-colors duration-200'
              }
            `}
            style={{ fontSize: 'clamp(11px, 2vw, 14px)' }}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }
  
  // Default: Mobile horizontal wrapped OR Desktop vertical
  return (
    <>
      {/* Mobile Layout (< 768px): Horizontal joined buttons */}
      <div className={`md:hidden flex ${className}`}>
        {categories.map((category, index) => (
          <button
            type="button"
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`
              inline-block flex-shrink-0
              font-mono font-mono-light uppercase border border-marker
              px-2 py-1 text-center
              tracking-wider
              whitespace-nowrap
              focus:outline-none
              ${index > 0 ? '-ml-[1px]' : ''}
              ${isSelected(category)
                ? 'bg-marker text-white relative z-10 transition-none' 
                : 'bg-white text-marker hover:bg-marker/10 transition-colors duration-200'
              }
            `}
            style={{ fontSize: 'clamp(9px, 2vw, 16px)' }}
          >
            {category.toUpperCase()}
          </button>
        ))}
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
              inline-block
              font-mono font-mono-light uppercase border border-marker
              text-[14px] px-4 py-1 min-w-[90px] text-center
              tracking-wider
              whitespace-nowrap
              focus:outline-none
              ${index > 0 ? '-ml-[1px]' : ''}
              ${isSelected(category)
                ? 'bg-marker text-white relative z-10 transition-none' 
                : 'bg-white text-marker hover:bg-marker/10 transition-colors duration-200'
              }
            `}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>
    </>
  );
}

