/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getHotDeals = ({ products }) =>
  products.filter(item => item.HotDeal === true);

export const getPromotedItems = ({ products }) =>
  products.filter(item => item.promotedItem === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
