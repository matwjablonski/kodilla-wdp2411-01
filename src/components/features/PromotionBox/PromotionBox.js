import React from 'react';
// import PropTypes from 'prop-types';

import styles from './PromotionBox.module.scss';
import { useSelector } from 'react-redux';
import { getBigDisplayPromo } from '../../../redux/productsRedux';
import { getSmallDisplayPromo } from '../../../redux/productsRedux';

const PromotionBox = () => {
  const bigDisplay = useSelector(getBigDisplayPromo);
  const smallDisplay = useSelector(getSmallDisplayPromo);
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={`row ${styles.promoBox}`}>
          <div className={styles.bigPromo}>
            {bigDisplay.map(product => (
              <img
                className={styles.bigImage}
                key={product.id}
                src={`/images/products/Promotion/${product.id}.jpg`}
                alt={product.name}
              />
            ))}
            {bigDisplay.map(product => (
              <div key={product.id} className={styles.darkBack}>
                <p className={styles.where}>Guest room</p>
                <p className={styles.what}>{product.category}</p>
                <p className={styles.howMuch}>-{product.promo}</p>
              </div>
            ))}
          </div>
          <div className={styles.smallPromo}>
            {smallDisplay.map(product => (
              <img
                className={styles.smallImage}
                key={product.id}
                src={`/images/products/Promotion/${product.id}.jpg`}
                alt={product.name}
              />
            ))}
            <div className={styles.textFirstImage}>
              <p>
                <span className={styles.bold}>Office</span> chair
              </p>
              <p>Collection</p>
              <p className={styles.price}>$200.00</p>
            </div>
            <div className={styles.textSecondImage}>
              <p className={styles.collection}>
                <span className={styles.bold}>Special</span> collection
              </p>
              <p>Save up to 45% of furniture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// PromotionBox.propTypes = {
// };

export default PromotionBox;
