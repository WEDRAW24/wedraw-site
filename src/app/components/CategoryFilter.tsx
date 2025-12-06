'use client';

type Category = 'all' | 'news' | 'media' | 'explorations';

type CategoryFilterProps = {
  selectedCategories: Category[];
  onCategoryChange: (categories: Category[]) => void;
  className?: string;
};

export default function CategoryFilter({
  selectedCategories,
  onCategoryChange,
  className = ''
}: CategoryFilterProps) {
  const categories: Category[] = ['all', 'news', 'media', 'explorations'];
  const filterableCategories: Category[] = ['news', 'media', 'explorations'];

  const handleCategoryClick = (category: Category) => {
    if (category === 'all') {
      onCategoryChange(['all']);
      return;
    }

    let newCategories: Category[];

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

  const isSelected = (category: Category) => {
    if (selectedCategories.includes('all')) {
      return category === 'all';
    }
    return selectedCategories.includes(category);
  };

  return (
    <div className={`flex w-full min-[431px]:w-auto ${className}`}>
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`
            inline-block flex-1 min-[431px]:flex-none
            font-mono font-mono-light uppercase border border-sunny
            px-2 min-[431px]:px-4 py-1 min-[431px]:min-w-[90px] text-center
            tracking-wider
            transition-colors duration-200
            whitespace-nowrap
            ${index > 0 ? '-ml-[1px]' : ''}
            ${isSelected(category)
              ? 'bg-sunny text-white relative z-10' 
              : 'bg-white text-sunny hover:bg-sunny/10'
            }
          `}
          style={{ fontSize: 'clamp(11px, 2vw, 16px)' }}
        >
          {category.toUpperCase()}
        </button>
      ))}
    </div>
  );
} 