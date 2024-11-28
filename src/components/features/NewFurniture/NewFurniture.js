import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import Swipeable from '../Swipeable/Swipeable';

class NewFurniture extends React.Component {
  state = {
    activePage: 0,
    activeCategory: 'bed',
    fadeState: '',
  };

  handlePageChange = newPage => {
    if (newPage !== this.state.activePage) {
      this.setState({
        fadeState: 'fade-out',
        pendingPage: newPage,
      });
    }
  };

  handleCategoryChange = newCategory => {
    if (newCategory !== this.state.activeCategory) {
      this.setState({
        fadeState: 'fade-out',
        pendingCategory: newCategory,
        pendingPage: 0,
      });
    }
  };

  startFadeTransition(callback) {
    this.setState({ fadeState: 'fade-out' });
    setTimeout(() => {
      callback();
      this.setState({ fadeState: 'fade-in' });
      setTimeout(() => {
        this.setState({ fadeState: '' });
      }, 500);
    }, 500);
  }

  handleAnimationEnd = () => {
    if (this.state.fadeState === 'fade-out') {
      this.setState(prevState => ({
        activeCategory:
          prevState.pendingCategory !== null
            ? prevState.pendingCategory
            : prevState.activeCategory,
        activePage:
          prevState.pendingPage !== null ? prevState.pendingPage : prevState.activePage,
        fadeState: 'fade-in',
        pendingCategory: null,
        pendingPage: null,
      }));
    } else if (this.state.fadeState === 'fade-in') {
      // Po zakończeniu fade-in resetujemy fadeState
      this.setState({ fadeState: '' });
    }
  };

  render() {
    const { categories, products } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = products.filter(item => item.category === activeCategory);
    const pagesCount = Math.ceil(categoryProducts.length / 8);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            page {i}
          </a>
        </li>
      );
    }

    const handleLeftSwipe = () => {
      if (activePage < pagesCount - 1) {
        this.startFadeTransition(() => {
          this.setState({ activePage: activePage + 1 });
        });
      }
    };

    const handleRightSwipe = () => {
      if (activePage > 0) {
        this.startFadeTransition(() => {
          this.setState({ activePage: activePage - 1 });
        });
      }
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>New furniture</h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <Swipeable rightAction={handleRightSwipe} leftAction={handleLeftSwipe}>
            <div
              className={`${styles.products} ${
                this.state.fadeState ? styles[this.state.fadeState] : ''
              }`}
              onAnimationEnd={this.handleAnimationEnd}
            >
              <div className='row'>
                {categoryProducts
                  .slice(activePage * 8, (activePage + 1) * 8)
                  .map(item => (
                    <div
                      key={item.id}
                      className={`${styles.itemDiv} col-3 col-md-4 col-sm-6`}
                    >
                      <ProductBox {...item} />
                    </div>
                  ))}
              </div>
            </div>
          </Swipeable>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
