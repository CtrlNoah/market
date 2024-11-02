import { discount, newProducts, boughtBeforeProducts } from './data.js'


export const getProduct = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errorOccurred = false;

      if (errorOccurred) {
        reject('Failed to fetch products');
      } else {
        resolve(discount);
      }

    }, 500);
  });
}

export const getNewProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errorOccurred = false;

      if (errorOccurred) {
        reject('Failed to fetch products');
      } else {
        resolve(newProducts);
      }

    }, 1000);
  });
}

export const getBeforeProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const errorOccurred = false;

      if (errorOccurred) {
        reject('Failed to fetch products');
      } else {
        resolve(boughtBeforeProducts);
      }

    }, 1500);
  });
}


