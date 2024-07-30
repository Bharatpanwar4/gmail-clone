import React from 'react';

const Avatar = ({ src, alt, size }) => {
  // Function to generate a random avatar URL
  const getRandomAvatar = () => {
    const randomId = Math.floor(Math.random() * 100);
    return `https://i.pravatar.cc/150?img=${randomId}`;
  };

  // Determine the avatar image source
  const avatarSrc = src || getRandomAvatar();

  // Define styles for different sizes
  const sizeStyles = {
    small: {
      width: '32px',
      height: '32px',
    },
    medium: {
      width: '48px',
      height: '48px',
    },
    large: {
      width: '64px',
      height: '64px',
    },
  };

  // Get the appropriate size style
  const avatarStyle = sizeStyles[size] || sizeStyles.medium;

  return (
    <div
      style={{
        display: 'inline-block',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '50%',
        ...avatarStyle,
      }}
    >
      <img
        src={avatarSrc}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    </div>
  );
};

export default Avatar;