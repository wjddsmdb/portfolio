import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="프로젝트 검색"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ padding: '0.5rem', width: '100%', marginBottom: '20px' }}
    />
  );
}

export default SearchBar;
