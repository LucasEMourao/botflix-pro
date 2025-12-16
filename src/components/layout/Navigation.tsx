import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const NavWrapper = styled.nav`
  padding: 1rem 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e50914;
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid #e50914;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  color: ${({ $isActive }) => $isActive ? '#e50914' : '#fff'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    color: #e50914;
  }

  &:focus-visible {
    outline: 2px solid #e50914;
    outline-offset: 2px;
  }
`;

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const location = useLocation();

  return (
    <NavWrapper className={className} role="navigation" aria-label="Menu principal">
      <Logo to="/" aria-label="Ir para a página inicial do BotFlix">
        BotFlix
      </Logo>
      <NavList>
        <NavItem>
          <NavLink
            to="/"
            $isActive={location.pathname === '/'}
            aria-current={location.pathname === '/' ? 'page' : undefined}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/favorites"
            $isActive={location.pathname === '/favorites'}
            aria-current={location.pathname === '/favorites' ? 'page' : undefined}
          >
            Favorites
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/history"
            $isActive={location.pathname === '/history'}
            aria-current={location.pathname === '/history' ? 'page' : undefined}
          >
            History
          </NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;