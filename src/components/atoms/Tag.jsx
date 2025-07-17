import React from 'react';

function Tag({ label }) {
  return (
    <span style={{
      backgroundColor: '#f0f0f0',
      padding: '0.3rem 0.6rem',
      borderRadius: '10px',
      marginRight: '5px',
      display: 'inline-block'
    }}>{label}</span>
  );
}

export default Tag;
