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
          </div>
        </div>
      </div>
    </div>
  );
};

// PromotionBox.propTypes = {
// };

export default PromotionBox;
