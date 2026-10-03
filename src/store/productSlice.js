import { products } from "../data/db.js";
import { createSlice } from "@reduxjs/toolkit";

const filteredItems = (state) => {
  return state.items.filter((product) => {
    const matchedProducts = product.name
      .toLowerCase()
      .includes(state.serchTerm.toLowerCase());
    return matchedProducts;
  });
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: products,
    filteredProducts: products,
    serchTerm: "",
  },
  reducers: {
    searchProductsByCatorgory(state, action) {
      state.serchTerm = action.payload;
      state.filteredProducts = filteredItems(state);
    },
  },
});

export default productSlice.reducer;
export const { searchProductsByCatorgory } = productSlice.actions;
