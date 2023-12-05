import { configureStore } from "@reduxjs/toolkit";
import cartBadgeReducer from "./slices/cartBadgeSlice";

export const store = configureStore({
  reducer: {
    cartBadge: cartBadgeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
