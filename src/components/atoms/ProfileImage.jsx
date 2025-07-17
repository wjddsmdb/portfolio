import React from 'react';


function ProfileImage({ src, alt = "프로필", size = 100 }) {
  const imageUrl = src || "https://via.placeholder.com/100x100/4A90E2/FFFFFF?text=Profile";

  return (
    <img
      src={imageUrl}
      alt={alt}
      style={{
        borderRadius: '50%',
        width: size,
        height: size,
        objectFit: 'cover',
        border: '2px solid #4A90E2',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
      }}
    />
  );
}

export default ProfileImage;

