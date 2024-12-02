import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../redux/productsRedux';
import StarsRating from '../../features/StarsRating/StarsRating';

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
        <img src={`/images/products/${id}.jpg`} alt={name} />
        {promo && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
        <div className={styles.content}>
          <h5>{name}</h5>
          <StarsRating stars={stars} />
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
