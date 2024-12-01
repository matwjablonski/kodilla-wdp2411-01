import React from 'react';

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

export default Homepage;
