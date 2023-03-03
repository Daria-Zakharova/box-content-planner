const { createSlice } = require("@reduxjs/toolkit");

const initialShippingState = {
	currentBoxId: "DF11670 1",
	lists: [],
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
		setCurrentBoxId (state, action) {
			return {...state, currentBoxId: action.payload};
		}
		/* editList (state, action) {
			const idx = state.lists.findIndex(list => list.id = action.payload.id);
			state.lists[idx] = action.payload;
			return state;
		} */
		
	}
});

export const {addList, deleteList, setCurrentBoxId} = shippingSlice.actions;
export const shippingReducer = shippingSlice.reducer;
/* 
list = {
	date: id,
	name: "",
	items: list of products,
	boxes: list of boxes is formed in the app} */