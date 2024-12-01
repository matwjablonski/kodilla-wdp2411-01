/* selectors */
export const getAll = ({ compare }) => compare.products;
export const getCount = ({ compare }) => compare.products.length;

/* action name creator */
const reducerName = 'compare';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT_TO_COMPARE = createActionName('ADD_PRODUCT_TO_COMPARE');
const REMOVE_PRODUCT_TO_COMPARE = createActionName('REMOVE_PRODUCT_TO_COMPARE');
/* action creators */
export const addProductToCompare = payload => ({
  payload,
  type: ADD_PRODUCT_TO_COMPARE,
});
export const removeProductToCompare = payload => ({
  payload,
  type: REMOVE_PRODUCT_TO_COMPARE,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_COMPARE: {
      return [...statePart, action.payload];
    }
    case REMOVE_PRODUCT_TO_COMPARE: {
      statePart.splice(action.payload, 1);
      return [...statePart];
    }
    default:
      return statePart;
  }
}
