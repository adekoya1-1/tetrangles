import React, { useState } from 'react';
import './PropertyListing.css';

import PropertyHeader from '../components/PropertyListing/PropertyHeader/PropertyHeader';
import QuickFilters from '../components/PropertyListing/QuickFilters/QuickFilters';
import AdvancedFilters from '../components/PropertyListing/AdvancedFilters/AdvancedFilters';
import PropertyGrid from '../components/PropertyListing/PropertyGrid/PropertyGrid';
import properties from '../data/properties.json';

const PropertyListing = () => {
  const [quickFilter, setQuickFilter] = useState('');
  const [advancedFilters, setAdvancedFilters] = useState({
    location: '',
    priceRange: '',
    propertyType: '',
  });

  const handleQuickFilterChange = (filter) => {
    setQuickFilter(filter === quickFilter ? '' : filter);
  };

  const handleAdvancedFilterChange = (e) => {
    const { name, value } = e.target;
    setAdvancedFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdvancedFilterSubmit = (e) => {
    e.preventDefault();
    // Filtering happens automatically on state change
  };

  const filterProperties = () => {
    return properties.filter((property) => {
      // Quick filter by type
      if (quickFilter && property.type !== quickFilter) {
        return false;
      }
      // Advanced filter by location
      if (
        advancedFilters.location &&
        !property.location.toLowerCase().includes(advancedFilters.location.toLowerCase())
      ) {
        return false;
      }
      // Advanced filter by property type
      if (advancedFilters.propertyType && property.type !== advancedFilters.propertyType) {
        return false;
      }
      // Advanced filter by price range
      if (advancedFilters.priceRange) {
        const price = property.price;
        const range = advancedFilters.priceRange;
        if (range === '0-50000' && price > 50000) return false;
        if (range === '50001-100000' && (price < 50001 || price > 100000)) return false;
        if (range === '100001-200000' && (price < 100001 || price > 200000)) return false;
        if (range === '200001+' && price < 200001) return false;
      }
      return true;
    });
  };

  const filteredProperties = filterProperties();

  return (
    <div className="property-listing-page">
      <PropertyHeader />
      <main className="property-listing-main">
        <section className="filters-section">
          <QuickFilters activeFilter={quickFilter} onFilterChange={handleQuickFilterChange} />
          <AdvancedFilters
            filters={advancedFilters}
            onChange={handleAdvancedFilterChange}
            onSubmit={handleAdvancedFilterSubmit}
          />
        </section>
        <section className="properties-section">
          <h2>Property for Sale in Nigeria</h2>
          <p className="property-summary">
            There are 84,796 available flats, houses, land and commercial property for sale in Nigeria. The property have been listed by estate agents who can be contacted using the contact information provided for each property listing. The list can be filtered by price, furnishing and recency.
          </p>
          <PropertyGrid properties={filteredProperties} />
        </section>
      </main>
    </div>
  );
};

export default PropertyListing;
