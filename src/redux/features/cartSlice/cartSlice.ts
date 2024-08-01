import { createSlice } from "@reduxjs/toolkit";

export type TCartProduct = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  stockquantity: number;
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
      const ExistinProduct = state.products.find(
        (pItem) => pItem.id === action.payload.id
      );
      if (ExistinProduct) {
        ExistinProduct.quantity =
          ExistinProduct.quantity + action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addProductIntoCart } = cartSlice.actions;

export default cartSlice.reducer;
