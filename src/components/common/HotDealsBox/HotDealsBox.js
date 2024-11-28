import React from 'react';
import { useState } from 'react';

import styles from './HotDealsBox.module.scss';
import { useSelector } from 'react-redux';
import { getHotDeals } from '../../../redux/productsRedux';
import { getPromotedItems } from '../../../redux/productsRedux';
import HotDealsProductBox from '../HotDealsProductBox/HotDealsProductBox';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HotDealsBox = ({}) => {
  const targetDate = new Date('2024-12-31T23:59:59');
  const hotDeals = useSelector(getHotDeals);
  const promotedItems = useSelector(getPromotedItems);
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
      <div className={`row container ${styles.allContent}`}>
        <div className={styles.leftSide}>
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
        <div className={styles.promoImage}>
          {promotedItems.map(product => (
            <img
              className={styles.promotedImage}
              key={product.id}
              src={`/images/products/PromotedItem/${product.id}.jpg`}
              alt={product.name}
            />
          ))}
          <div className={styles.darkBelt}>
            <p>
              <span className={styles.biggerText}>
                Indoor <span className={styles.bold}>furniture </span>
              </span>{' '}
              <span className={styles.center}>save up to 50% of all furniture</span>
            </p>
          </div>
          <div className={styles.whiteBox}>
            <a href='#'>Shop Now</a>
          </div>
          <div className={styles.arrowContainer}>
            <div className={styles.arrow}>
              <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
            </div>
            <div className={styles.arrow}>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDealsBox;
