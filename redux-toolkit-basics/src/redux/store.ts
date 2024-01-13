import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import Logger from "./middleware/Logger";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
