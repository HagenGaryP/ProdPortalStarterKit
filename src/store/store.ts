/**
 * Redux logic for the Store configuration.
 */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {
    // Insert reducers or slices here
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
