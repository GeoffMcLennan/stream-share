import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import activeSongReducer from '../features/activeSong/activeSongSlice';
import activeQueueReducer from '../features/data/songQueue';

export const store = configureStore({
  reducer: {
    activeSong: activeSongReducer,
    activeQueue:  activeQueueReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
