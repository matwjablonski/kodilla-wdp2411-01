import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row'>
        <a href='#' className='col col-lg-3 col-md-6 col-6'>
          <FeatureBox icon={faTruck}>
            <h5>Free shipping</h5>
            <p>All orders</p>
          </FeatureBox>
        </a>
        <a href='#' className='col col-lg-3 col-md-6 col-6'>
          <FeatureBox icon={faHeadphones}>
            <h5>24/7 customer</h5>
            <p>support</p>
          </FeatureBox>
        </a>
        <a href='#' className='col col-lg-3 col-md-6 col-6'>
          <FeatureBox icon={faReplyAll}>
            <h5>Money back</h5>
            <p>guarantee</p>
          </FeatureBox>
        </a>
        <a href='#' className='col col-lg-3 col-md-6 col-6'>
          <FeatureBox icon={faBullhorn}>
            <h5>Member discount</h5>
            <p>First order</p>
          </FeatureBox>
        </a>
      </div>
    </div>
  </div>
);

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
