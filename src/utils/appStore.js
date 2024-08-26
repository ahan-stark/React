import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import instaMartSlice from "./instaMartSlice";
import instaMartCartSlice from "./instaMartCartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    instaMartCartShowCart: instaMartSlice,
    instaMartCart: instaMartCartSlice,
  },
});
export default appStore;
