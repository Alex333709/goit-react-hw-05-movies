import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from '../Navigation/Navigation.styled'; // Імпорт стилів

const Navigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink
          to="/"
          activeClassName="activeNavLink" // Залишаємо activeClassName для активного стану
          end
        >
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="/movies"
          activeClassName="activeNavLink" // Залишаємо activeClassName для активного стану
        >
          Movies
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navigation;
