import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </header>
  );
}
