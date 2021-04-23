import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";
import CartReducer from "./Cart/cart-reducer";

import UserReducer from "./Users/user-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
});
export default persistReducer(persistConfig, rootReducer);
