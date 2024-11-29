import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotionBox from '../../features/PromotionBox/PromotionBox';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <PromotionBox />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
