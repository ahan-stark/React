import { createSlice } from "@reduxjs/toolkit";

const instaMartSlice = createSlice({
  name: "showGrocerySlice",
  initialState: {
    showGroceryCart: false,
  },
  reducers: {
    updateShowGrocery: (state, action) => {
      state.showGroceryCart = !state.showGroceryCart;
    },
  },
});
export const { updateShowGrocery } = instaMartSlice.actions;
export default instaMartSlice.reducer;
