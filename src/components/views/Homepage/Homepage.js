import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotionBox from '../../features/PromotionBox/PromotionBox';
import PromotedProducts from '../../features/PromotedProducts/PromotedProducts';

const Homepage = mode => {
  return (
    <div className={styles.root}>
      <PromotedProducts />
      <FeatureBoxes />
      <PromotionBox />
      <NewFurniture mode={mode} />
    </div>
  );
};

Homepage.propTypes = {
  mode: PropTypes.string,
};

export default Homepage;
