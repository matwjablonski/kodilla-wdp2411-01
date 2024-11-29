/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getHotDeals = ({ products }) =>
  products.filter(item => item.HotDeal === true);

export const getPromotedItems = ({ products }) =>
  products.filter(item => item.promotedItem === true);

export const toggleFavorite = payload => ({ type: TOGGLE_PRODUCT_FAVORITE, payload });

const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_PRODUCT_FAVORITE = createActionName('TOGGLE_PRODUCT_FAVORITE');


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCT_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    default:
      return statePart;
  }
}
