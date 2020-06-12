import React, { useState } from 'react';
import './style.scss';

export default function FilterSelector({ searchFilter, regionFilter }) {

  const [dropdown, setDropdown] = useState('');

  const showDropdown = () => {
    let dropdownState = dropdown === 'active' ? '' : 'active';
    setDropdown(dropdownState);
  }

  const filterRegion = (region) => {
    showDropdown();

    regionFilter(region);
  }

  const handleSearch = (evt) => {
    searchFilter(evt.target.value);
  }

  return (
    <div className="search-filter wrapper">
      <div className="search-wrapper">
        <input type="search"
          name="country-search"
          id="country-search"
          placeholder="Search for a country..."
          onChange={(evt) => handleSearch(evt)}
        />
      </div>

      <div className={`search-region ${dropdown}`}>
        <span className="region-dropdown-title" onClick={() => showDropdown()}>Filter by Region</span>
        <ul className="select-region">
          <li onClick={() => filterRegion('all')} >All</li>
          <li onClick={() => filterRegion('Africa')} >Africa</li>
          <li onClick={() => filterRegion('Americas')}>Americas</li>
          <li onClick={() => filterRegion('Asia')}>Asia</li>
          <li onClick={() => filterRegion('Europe')}>Europe</li>
          <li onClick={() => filterRegion('Oceania')}>Oceania</li>
        </ul>
      </div>
    </div>
  );

}