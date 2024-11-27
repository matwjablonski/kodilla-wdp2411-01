import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Swipeable.module.scss';

const Swipeable = ({ children, leftAction, rightAction }) => {
  const [startX, setStartX] = useState(null);

  const handleTouchStart = e => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = e => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX;

    if (diff > 50) {
      rightAction && rightAction();
    } else if (diff < -50) {
      leftAction && leftAction();
    }

    setStartX(null);
  };

  const handleMouseDown = e => {
    setStartX(e.clientX);
  };

  const handleMouseUp = e => {
    if (startX === null) return;
    const endX = e.clientX;
    const diff = endX - startX;

    if (diff > 50) {
      rightAction && rightAction();
    } else if (diff < -50) {
      leftAction && leftAction();
    }

    setStartX(null);
  };

  return (
    <div
      className={styles.root}
      style={{ touchAction: 'pan-y' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
