const { createSlice } = require("@reduxjs/toolkit");

const initialItemsState = {
    items: [],
};

const itemsSlice = createSlice({
    name: 'items',
    initialState: initialItemsState,
    reducers: {
        addProducts(state, action) {
            return {...state, items: [...action.payload]};
        },
        resetProducts(state) {
            return {...state, items: []};
        }
        
    }
});


export const {addProducts, resetProducts} = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;