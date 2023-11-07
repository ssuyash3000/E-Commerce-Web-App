import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authReducer";
import { alertReducer } from "./reducers/alertReducer";
import { productReducer } from "./reducers/productsReducer";
export const store = configureStore({
  reducer: { authReducer, alertReducer, productReducer },
});
