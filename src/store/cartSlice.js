import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      const existingProducts = state.find((item) => {
        item.id === action.payload.id;
      });

      if (existingProducts) {
        existingProducts.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart(state, action) {
      let revisedCartProducts = state.filter(
        (product) => product.id !== action.payload,
      );
      return revisedCartProducts;
    },

    increaseQuantity(state, action) {
      const items = state.find((item) => item.id === action.payload.id);
      if (items) {
        items.quantity += 1;
      }
    },

    decreaseQuantity(state, action) {
      const items = state.find((item) => item.id === action.payload.id);
      if (items && items.quantity > 1) {
        items.quantity -= 1;
      } else if (items && items.quantity === 1) {
        return state.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
