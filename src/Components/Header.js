import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <NavLink to="/" exact className="home-link">
        Home
      </NavLink>
    </header>
  );
}
