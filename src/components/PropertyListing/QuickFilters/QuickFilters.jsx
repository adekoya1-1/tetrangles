import React from 'react';
import './QuickFilters.css';

const QuickFilters = ({ activeFilter, onFilterChange }) => {
  const filters = [
    { label: 'Flats', value: 'flat' },
    { label: 'Houses', value: 'house' },
    { label: 'Commercial Property', value: 'commercial' },
    { label: 'Land', value: 'land' },
  ];

  return (
    <div className="quick-filters">
      <span className="filters-label">Quick Filters</span>
      <div className="filters-list">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickFilters;
