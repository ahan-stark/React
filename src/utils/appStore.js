import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import instaMartSlice from "./instaMartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    instaMartCart: instaMartSlice,
  },
});
export default appStore;
