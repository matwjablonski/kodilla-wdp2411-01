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
    pendingCategory: null,
    pendingPage: null,
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

  handleLeftSwipe = () => {
    const { activePage } = this.state;
    const pagesCount = Math.ceil(this.getCategoryProducts().length / 8);

    if (activePage < pagesCount - 1) {
      this.setState({
        fadeState: 'fade-out',
        pendingPage: activePage + 1,
      });
    }
  };

  handleRightSwipe = () => {
    const { activePage } = this.state;

    if (activePage > 0) {
      this.setState({
        fadeState: 'fade-out',
        pendingPage: activePage - 1,
      });
    }
  };

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
      this.setState({ fadeState: '' });
    }
  };

  getCategoryProducts = () => {
    const { products } = this.props;
    const { activeCategory } = this.state;
    return products.filter(item => item.category === activeCategory);
  };

  getProductsPerPage = mode => {
    return mode === 'desktop' ? 9 : mode === 'tablet' ? 6 : mode === 'mobile' ? 4 : 9;
  };

  render() {
    const { mode } = this.props.mode;
    const { categories } = this.props;
    const { activeCategory, activePage } = this.state;

    const categoryProducts = this.getCategoryProducts();
    const productsPerPage = this.getProductsPerPage(mode);
    const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

    const dots = [];
    for (let i = 0; i < pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

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
                        className={item.id === activeCategory ? styles.active : ''}
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
          <Swipeable
            rightAction={this.handleRightSwipe}
            leftAction={this.handleLeftSwipe}
          >
            <div
              className={`${styles.products} ${
                this.state.fadeState ? styles[this.state.fadeState] : ''
              }`}
              onAnimationEnd={this.handleAnimationEnd}
            >
              <div className='row'>
                {categoryProducts
                  .slice(
                    activePage * productsPerPage,
                    (activePage + 1) * productsPerPage
                  )
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
  mode: PropTypes.string,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
