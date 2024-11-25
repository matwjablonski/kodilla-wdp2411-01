import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  id,
  isFavorite,
  isCompared,
}) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={`/images/products/${id}.jpg`} alt={name} />
      {promo && <div className={styles.sale}>{promo}</div>}
      <div className={styles.buttons}>
        <Button variant='small'>Quick View</Button>
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
      <div className={styles.priceBox}>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>

        {oldPrice && (
          <div className={styles.price}>
            <Button noHover variant='strikeThrough'>
              $ {oldPrice}
            </Button>
          </div>
        )}
      </div>
    </div>
  </div>
);

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompared: PropTypes.bool,
  id: PropTypes.string,
};

export default ProductBox;
