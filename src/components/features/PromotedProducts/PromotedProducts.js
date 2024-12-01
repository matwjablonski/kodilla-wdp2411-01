import React from 'react';

import styles from './PromotedProducts.module.scss';
import HotDealsBox from '../../common/HotDealsBox/HotDealsBox';

const PromotedProducts = () => (
  <div className={styles.root}>
    <HotDealsBox />
  </div>
);

export default PromotedProducts;
