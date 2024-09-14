import { createSlice } from "@reduxjs/toolkit";

export type TCartProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  stockQuantity: number;
  image: string;
};

type TCartState = {
  products: TCartProduct[];
};

const initialState: TCartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductIntoCart: (state, action) => {
      const existingProduct = state.products.find(
        (pItem) => pItem.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },

    removeAllProductFromCart: (state) => {
      state.products = [];
    },
    increaseStockQuantity: (state, action) => {
      const existingProduct = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      }
    },
    decreaseStockQuantity: (state, action) => {
      const existingProduct = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity -= action.payload.quantity;
      }
    },
  },
});

export const {
  addProductIntoCart,
  removeProductFromCart,
  removeAllProductFromCart,
  increaseStockQuantity,
  decreaseStockQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
