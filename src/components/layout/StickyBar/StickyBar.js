import React from 'react';
import PropTypes from 'prop-types';
import styles from './StickyBar.module.scss';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import store from '../../../redux/store';
import { removeProductToCompare } from '../../../redux/productsCompareRedux';

const deleteItemFromCompareList = index => {
  store.dispatch(removeProductToCompare(index));
};

const StickyBar = () => {
  const listItem = useSelector(state => state.compare);
  return (
    <div className={styles.root}>
      <div className='row'>
        {listItem.map((item, index) => {
          return (
            <div
              key={index}
              className={styles.fotoBox}
              onClick={() => deleteItemFromCompareList(index)}
            >
              {item}
              <FontAwesomeIcon className={styles.icon} icon={faWindowClose} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
StickyBar.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
};

export default StickyBar;
