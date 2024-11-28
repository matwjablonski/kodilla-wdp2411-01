import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { useState } from 'react';

const MenuBar = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className={'col ' + styles.productSearch}>
            <ProductSearch />
          </div>
          <div className={`col-auto ' ${styles.menu} ${isMenuOpen ? 'open' : ''}`}>
            <a onClick={toggleMenu} className={styles.menuLabel}>
              <span className={styles.hamburger}></span>
            </a>
            <ul className={`${styles.menuList}`}>
              <li>
                <a href='#' className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href='#'>Furniture</a>
              </li>
              <li>
                <a href='#'>Chair</a>
              </li>
              <li>
                <a href='#'>Table</a>
              </li>
              <li>
                <a href='#'>Sofa</a>
              </li>
              <li>
                <a href='#'>Bedroom</a>
              </li>
              <li>
                <a href='#'>Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
