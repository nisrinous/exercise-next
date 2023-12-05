import { createSlice } from "@reduxjs/toolkit";

interface CartBadgeState {
  counter: number;
}

const initialState: CartBadgeState = {
  counter: 0,
};

const cartBadgeSlice = createSlice({
  name: "cartBadge",
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
    decrement(state) {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = cartBadgeSlice.actions;
export default cartBadgeSlice.reducer;
