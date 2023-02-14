import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { itemsReducer } from "./items/items-slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { shippingReducer } from "./shipping/shipping-slice";


const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    items: itemsReducer, 
    shipping: shippingReducer});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
     middleware: getDefaultMiddleware => [...getDefaultMiddleware({serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },})],
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);