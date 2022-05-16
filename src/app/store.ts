import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import activeSongReducer from '../features/activeSong/activeSongSlice';
import activeQueueReducer from '../features/data/songQueue';
import displayAlbumReducer from '../features/album/albumSlice';

export const store = configureStore({
  reducer: {
    activeSong: activeSongReducer,
    activeQueue:  activeQueueReducer,
    displayAlbum: displayAlbumReducer,
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
