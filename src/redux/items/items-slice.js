const { createSlice } = require("@reduxjs/toolkit");

const initialItemsState = {
    items: [],
    settings: {boxCapacity: 140},
    boxes: [],
};

const itemsSlice = createSlice({
    name: 'items',
    initialState: initialItemsState,
    reducers: {
        setProducts(state, action) {
            return {...state, items: [...action.payload]};
        },
        resetProducts(state) {
            return {...state, items: []};
        },
        setBoxCapacity(state, action) {
            return {...state, settings: {boxCapacity: action.payload}};
        },
        setBoxes(state, action) {
            return {...state, boxes: [...action.payload]}
        },
        resetBoxes(state) {
            return {...state, boxes: []};
        }        
    }
});


export const {setProducts, resetProducts, setBoxCapacity, setBoxes, resetBoxes} = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;