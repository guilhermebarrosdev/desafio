import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-bottom: 2rem;
`;

const Ul = styled.ul`
  display: flex;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

const Li = styled.li`
  margin-right: 1rem;
`;

const Header = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <NavLink
            style={({ isActive }) => ({
              background: isActive ? '#ddd' : '#eee',
            })}
            className={styles.link}
            to="/"
            end
          >
            Products
          </NavLink>
        </Li>
        <Li>
          <NavLink
            style={({ isActive }) => ({
              background: isActive ? '#ddd' : '#eee',
            })}
            className={styles.link}
            to="cart"
          >
            Cart
          </NavLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Header;
