import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './actions/article.actions';

export const store = configureStore({
  reducer: articleReducer,
});

