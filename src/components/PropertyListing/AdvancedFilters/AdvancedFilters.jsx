import React from 'react';
import './AdvancedFilters.css';

const AdvancedFilters = ({ filters, onChange, onSubmit }) => {
  return (
    <aside className="advanced-filters">
      <h3>Advanced Filter Options</h3>
      <form onSubmit={onSubmit}>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Enter location"
          value={filters.location}
          onChange={onChange}
        />

        <label htmlFor="priceRange">Price Range</label>
        <select
          id="priceRange"
          name="priceRange"
          value={filters.priceRange}
          onChange={onChange}
        >
          <option value="">Select</option>
          <option value="0-50000">0 - 50,000</option>
          <option value="50001-100000">50,001 - 100,000</option>
          <option value="100001-200000">100,001 - 200,000</option>
          <option value="200001+">200,001+</option>
        </select>

        <label htmlFor="propertyType">Property Type</label>
        <select
          id="propertyType"
          name="propertyType"
          value={filters.propertyType}
          onChange={onChange}
        >
          <option value="">Select</option>
          <option value="flat">Flat</option>
          <option value="house">House</option>
          <option value="commercial">Commercial</option>
          <option value="land">Land</option>
        </select>

        <button type="submit" className="filter-btn">Apply Filters</button>
      </form>
    </aside>
  );
};

export default AdvancedFilters;
