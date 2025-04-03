import React from 'react';

const Navigation = () => {
  const navItems = ['For You', 'Top Tracks', 'Favourites', 'Recently Played'];

  return (
    <nav 
    >
      <ul className="space-y-6">
        {navItems.map((item, index) => (
          <li 
            key={index}
            className="cursor-pointer hover:text-gray-400"
            style={{
              fontFamily: 'Basier Circle, sans-serif',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '32px',
              letterSpacing: '0%',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
