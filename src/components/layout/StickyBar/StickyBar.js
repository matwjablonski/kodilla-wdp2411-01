import React from 'react';
import PropTypes from 'prop-types';
import styles from './StickyBar.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import store from '../../../redux/store';
import { removeProductToCompare } from '../../../redux/productsCompareRedux';
import Button from '../../common/Button/Button';

const deleteItemFromCompareList = index => {
  store.dispatch(removeProductToCompare(index));
};

const StickyBar = () => {
  const listItem = useSelector(state => state.compare);
  const stateCheck = useSelector(state => !!state.compare);

  return (
    <>
      {stateCheck && listItem.length > 0 ? (
        <div className={styles.root}>
          <div className={styles.compareRow}>
            {listItem.map((item, index) => (
              <>
                <div className='columns'>
                  <div
                    key={index}
                    className={styles.fotoBox}
                    onClick={() => deleteItemFromCompareList(index)}
                  >
                    <img
                      src={`/images/products/${item}.jpg`}
                      alt='Product to compare'
                    />
                    <FontAwesomeIcon className={styles.icon} icon={faWindowClose} />
                  </div>
                </div>
              </>
            ))}
          </div>
          <Button variant='small' className={styles.button}>
            COMPARE
          </Button>
        </div>
      ) : null}
      ;
    </>
  );
};
StickyBar.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default StickyBar;
