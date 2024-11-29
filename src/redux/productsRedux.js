/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const getBigDisplayPromo = ({ products }) =>
  products.filter(item => item.bigDisplayPromo === true);

export const getSmallDisplayPromo = ({ products }) =>
  products.filter(item => item.smallDisplayPromo === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
