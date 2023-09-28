import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Nav, NavItem } from '../Navigation/Navigation.styled';

const Navigation = () => {
  const location = useLocation();
  const isActive = path => location.pathname === path;

  return (
    <Nav>
      <NavItem>
        <NavLink to="/" className={isActive('/') ? 'activeNavLink' : ''}>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          to="/movies"
          className={isActive('/movies') ? 'activeNavLink' : ''}
        >
          Movies
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navigation;
