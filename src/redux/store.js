import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const store = configureStore({
    reducer: reducer,
});

export default store;

// Let's connect this store to react app.