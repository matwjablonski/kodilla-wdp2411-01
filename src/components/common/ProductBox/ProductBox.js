import React from 'react';
import PropTypes from 'prop-types';
import {
  addProductToCompare,
  removeProductToCompare,
} from '../../../redux/productsCompareRedux';
import store from '../../../redux/store';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { toggleFavorite, toggleCompare } from '../../../redux/productsRedux';

const compare = id => {
  const state = store.getState();
  const productsCompare = state.compare;
  if (productsCompare.length <= 3) {
    store.dispatch(
      productsCompare.includes(id)
        ? removeProductToCompare(id)
        : addProductToCompare(id)
    );
    store.dispatch(toggleCompare(id));
  }
};

const ProductBox = ({
  id,
  name,
  price,
  oldPrice,
  promo,
  stars,
  isFavorite,
  isCompared,
}) => {
  const dispatch = useDispatch();
  const changeFavorite = (event, productId) => {
    event.preventDefault();
    dispatch(toggleFavorite(productId));
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div className={styles.imageWraper}>
          <img src={`/images/products/${id}.jpg`} alt={name} />
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        </div>
        {promo && <div className={styles.sale}>{promo}</div>}

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
            <Button
              variant='outline'
              className={`${styles.favorite} ${isFavorite ? styles.active : ''}`}
              onClick={event => changeFavorite(event, id)}
            >
              <FontAwesomeIcon
                className={`${styles.favoriteIcon}${styles.favorite} ${
                  isFavorite ? styles.active : ''
                }`}
                icon={faHeart}
              >
                Favorite
              </FontAwesomeIcon>
            </Button>
            <Button
              variant='outline'
              className={`${styles.compare} ${isCompared ? styles.active : ''}`}
              onClick={e => {
                compare(id);
                e.preventDefault();
              }}
            >
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
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  isFavorite: PropTypes.bool,
  isCompared: PropTypes.bool,
};

export default ProductBox;
