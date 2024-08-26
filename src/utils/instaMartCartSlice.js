const { createSlice } = require("@reduxjs/toolkit");

const instaMartCartSlice = createSlice({
  name: "instaCart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToInstaMartCart: (state, action) => {
      state.cart.push(action.payload);
    },
    clearCart: (state) => {
      state.cart.length = 0;
    },
  },
});
export const { addToInstaMartCart, clearCart } = instaMartCartSlice.actions;
export default instaMartCartSlice.reducer;
