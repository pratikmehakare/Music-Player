import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const navItems = [
    { label: 'For You', path: '/' },
    { label: 'Top Tracks', path: '/top-tracks' },
    { label: 'Favourites', path: '/favourites' },
    { label: 'Recently Played', path: '/recently-played' }
  ];

  return (
    <nav>
      <ul className="space-y-6">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="cursor-pointer hover:text-gray-400"
              style={{
                fontFamily: 'Basier Circle, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '32px',
                letterSpacing: '0%',
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
