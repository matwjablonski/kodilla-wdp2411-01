import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <form action='' className={styles.root}>
    <div className={styles.category}>
      <ul>
        <li className={styles.selectCategory}>
          <FontAwesomeIcon className={styles.icon} icon={faListUl} />
          <select>
            <option value=''>Select a category</option>
          </select>
          <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
          <ul>
            <li>
              <a href='#'>category</a>
            </li>
            <li>
              <a href='#'>category</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className={styles.searchField}>
      <input placeholder='Search products...' type='text' />
      <button>
        <FontAwesomeIcon className={styles.icon} icon={faSearch} />
      </button>
    </div>
  </form>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
