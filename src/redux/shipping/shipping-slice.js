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
		},
		resetShippingState (state) {
			return {...initialShippingState};
		}
	}
});

export const {addList, deleteList, setCurrentBoxId, resetShippingState} = shippingSlice.actions;
export const shippingReducer = shippingSlice.reducer;
