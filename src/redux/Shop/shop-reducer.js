// This is comment
// This is comment
// This is comment
// This is comment

import SHOP_DATA from "./Shop_data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action) {
    default:
      return state;
  }
};

export default ShopReducer;
