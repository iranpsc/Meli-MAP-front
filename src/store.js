import { configureStore } from "@reduxjs/toolkit";
import { assetsSlice } from "./features/assetsSlice";

export const store = configureStore({
    reducer: {
        assets: assetsSlice.reducer
    }
});
