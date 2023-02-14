const { createSlice } = require("@reduxjs/toolkit");

const initialShippingState = {
lists: []
};

const shippingSlice = createSlice({
	name: 'shipping',
	initialState: initialShippingState,
	reducers: {
		addList (state, action) {
			console.log(action.payload);
			return {...state, lists: [...state.lists, action.payload]};
		},
		deleteList (state, action) {
			return {...state, lists: state.lists.filter(list => list.id !== action.payload)};
		},
		/* editList (state, action) {
			const idx = state.lists.findIndex(list => list.id = action.payload.id);
			state.lists[idx] = action.payload;
			return state;
		} */
		
	}
});

export const {addList, deleteList} = shippingSlice.actions;
export const shippingReducer = shippingSlice.reducer;
/* 
list = {
	date: id,
	name: "",
	items: list of products,
	boxes: list of boxes is formed in the app} */