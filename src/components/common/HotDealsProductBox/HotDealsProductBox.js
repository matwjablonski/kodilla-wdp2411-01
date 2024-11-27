import React from 'react';
import PropTypes from 'prop-types';

import styles from './HotDealsProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import CountdownTimer from '../../features/CountdownTimer/CountdownTimer';

const HotDealsProductBox = ({
  name,
  price,
  stars,
  id,
  isFavorite,
  isCompared,
  targetDate,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img src={`/images/products/HotDeal/${id}.jpg`} alt={name} />
        <div className={styles.buttons}>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon className={`${styles.view}`} icon={faEye}>
              View
            </FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon
              className={`${styles.favorite} ${isFavorite ? styles.active : ''}`}
              icon={faHeart}
            >
              Favorite
            </FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon
              className={`${styles.compare} ${isCompared ? styles.active : ''}`}
              icon={faExchangeAlt}
            >
              Add to compare
            </FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button className={styles.buttonPrice} noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
      <div className={styles.countdownTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
};

HotDealsProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompared: PropTypes.bool,
  id: PropTypes.string,
  targetDate: PropTypes.instanceOf(Date).isRequired,
};

export default HotDealsProductBox;
