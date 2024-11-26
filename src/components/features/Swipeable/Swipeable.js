import React from 'react';
import PropTypes from 'prop-types';

import styles from './Swipeable.module.scss';

const Swipeable = ({ children, swipeLeft, swipeRight, ...props }) => {
  return (
    <div onDragStart={() => console.log('działa')} className={styles.root}>
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  swipeLeft: PropTypes.func,
  swipeRight: PropTypes.func,
};

export default Swipeable;
