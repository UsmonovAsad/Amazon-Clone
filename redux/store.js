import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";

const store = configureStore({
	reducer: {
		basket: basketReducer
	},
	middlewares: gDM => gDM(),
	devtools: process.env.NODE.ENV !== "production"
});

export default store;
