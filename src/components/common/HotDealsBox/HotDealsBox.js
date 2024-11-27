import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './HotDealsBox.module.scss';
import { useSelector } from 'react-redux';
import { getHotDeals } from '../../../redux/productsRedux';
import HotDealsProductBox from '../HotDealsProductBox/HotDealsProductBox';

const HotDealsBox = ({}) => {
  const targetDate = new Date('2024-12-31T23:59:59');
  const hotDeals = useSelector(getHotDeals);
  const [activePage, setActivePage] = useState(0);
  const pagesCount = 3;

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li>
        <a
          onClick={() => this.handlePageChange(i)}
          className={i === activePage && styles.active}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.hotDealsLine}`}>
          <p>Hot Deals</p>
          <div className={'col-auto ' + styles.dots}>
            <ul>{dots}</ul>
          </div>
        </div>
        <div className={styles.productBox}>
          {hotDeals.map(product => (
            <HotDealsProductBox
              key={product.id}
              name={product.name}
              price={product.price}
              stars={product.stars}
              id={product.id}
              isFavorite={product.isFavorite}
              isCompared={product.isCompared}
              targetDate={targetDate}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

HotDealsBox.propTypes = {};

export default HotDealsBox;
