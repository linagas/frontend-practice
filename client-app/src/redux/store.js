import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query";
import { meliApiBridge } from "./../services/app-services";
import searchReducer from './slices/search'
import productsReducer from './slices/products';
import breadcrumbsReducer from './slices/breadcrumbs';

export const store = configureStore({
  reducer: {
    [meliApiBridge.reducerPath]: meliApiBridge.reducer,
    search: searchReducer,
    products: productsReducer,
    breadcrumbs: breadcrumbsReducer,
  },
  middleware: (getDefaultMiddiware) =>
    getDefaultMiddiware().concat(meliApiBridge.middleware),
});

setupListeners(store.dispatch);