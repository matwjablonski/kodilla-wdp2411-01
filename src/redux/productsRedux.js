/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const toggleFavorite = payload => ({ type: TOGGLE_PRODUCT_FAVORITE, payload });
export const toggleCompare = payload => ({ type: TOGGLE_PRODUCT_COMPARE, payload });

const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');
const TOGGLE_PRODUCT_COMPARE = createActionName('TOGGLE_PRODUCT_COMPARE');

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    case TOGGLE_PRODUCT_COMPARE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isCompared: !product.isCompared }
          : product
      );
    default:
      return statePart;
  }
}
