import React from 'react';
// import PropTypes from 'prop-types';
import styles from './PromotedProducts.module.scss';
import HotDealsBox from '../../common/HotDealsBox/HotDealsBox';

const PromotedProducts = () => (
  <div className={styles.root}>
    <HotDealsBox />
  </div>
);

PromotedProducts.propTypes = {};

export default PromotedProducts;
