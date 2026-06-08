import { useState, useRef, useEffect } from "react";
import "./CountriesSearch.css";

export default function CountriesSearch() {
  const countries = [
    "India", "Indonesia", "Ireland", "Iceland", "Italy",
    "Australia", "Austria", "Argentina", "Algeria", "Angola",
    "Bangladesh", "Belgium", "Brazil", "Bulgaria", "Belarus",
    "Canada", "China", "Chile", "Colombia", "Croatia",
    "Denmark", "Dominican Republic", "Djibouti",
    "Egypt", "Ethiopia", "Estonia",
    "Finland", "France",
    "Germany", "Greece", "Georgia",
    "Hungary", "Haiti",
    "Japan", "Jordan",
    "Kenya", "Kuwait",
    "Malaysia", "Mexico", "Morocco",
    "Nepal", "Netherlands", "New Zealand", "Nigeria", "Norway",
    "Oman",
    "Pakistan", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Russia", "Romania",
    "Singapore", "South Africa", "South Korea", "Spain", "Sweden",
    "Thailand", "Turkey",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
    "Vietnam"
  ].sort((a, b) => a.localeCompare(b));

  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const displayedCountries = searchText.trim()
    ? countries.filter((country) =>
        country.toLowerCase().startsWith(searchText.toLowerCase())
      )
    : countries;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    setShowDropdown(true);
  };

  const handleCountrySelect = (country) => {
    setSearchText(country);
    setShowDropdown(false);
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  return (
    <div className="countries-search">
      <h2 className="countries-search__title">Country Search</h2>

      <div className="dropdown-wrapper">
        <input
          ref={inputRef}
          type="text"
          className="dropdown-input"
          placeholder="Type country name..."
          value={searchText}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </div>

      {showDropdown && (
        <ul className="dropdown-list">
          {displayedCountries.map((country) => (
            <li
              key={country}
              className="dropdown-list__item"
              onClick={() => handleCountrySelect(country)}
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}