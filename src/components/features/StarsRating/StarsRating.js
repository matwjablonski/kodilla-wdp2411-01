import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StarsRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarsRating = ({ averageStars, initialUserRating }) => {
  const [hoveredStars, setHoveredStars] = useState(null);
  const [selectedStars, setSelectedStars] = useState(initialUserRating);

  const handleMouseEnter = stars => setHoveredStars(stars);
  const handleMouseLeave = () => setHoveredStars(null);
  const handleClick = stars => setSelectedStars(stars);

  const displayStars = hoveredStars || selectedStars || averageStars;

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={`${styles.star} ${i <= hoveredStars ? styles.hovered : ''}`}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(i)}
        >
          <FontAwesomeIcon icon={i <= displayStars ? solidStar : regularStar} />
        </span>
      ))}
    </div>
  );
};

StarsRating.propTypes = {
  averageStars: PropTypes.number.isRequired,
  initialUserRating: PropTypes.number,
};

StarsRating.defaultProps = {
  initialUserRating: null,
};

export default StarsRating;
