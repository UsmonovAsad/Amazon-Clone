import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
}

const basketSlice = createSlice({
	name: "/basket",
	initialState,
	reducers: {
		addToBasket: (state,{ payload }) => { state.push(payload) },
		removeFromBasket: (state,{ payload }) => {
			const index = state.items.findIndex(item => item === payload);
			state.items.splice(index,1);
		}
	}
});

const { reducer, actions } = basketSlice;
export default reducer;

export const selectItems = state => state.basket.items;

export const { addToBasket, removeFromBasket } = actions;