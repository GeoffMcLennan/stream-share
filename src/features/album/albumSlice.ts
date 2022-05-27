import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncStatus } from "../../app/interface";
import { Album, Albums } from "../data/album";
import { Song } from "../data/song";

export interface DisplayAlbumState {
  album?: Album;
  loadStatus: AsyncStatus;
}

const initialState: DisplayAlbumState = {
  loadStatus: AsyncStatus.IDLE,
}

export const loadAlbum = createAsyncThunk(
  'displayAlbum/loadAlbum',
  async (albumId?: string) => {
    if (!albumId) {
      console.log('Invalid request, must supply albumId')
      throw new Error('Invalid request, must supply albumId');
    }
    await delay(2000)
    const album = Albums[albumId];
    if (!album) {
      console.log(`Could not find album ${albumId}`)
      throw new Error(`Could not find album ${albumId}`);
    }
    return album;
  }
);

export const displayAlbumSlice = createSlice({
  name: 'displayAlbumSlice',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAlbum.pending, state => {
        state.loadStatus = AsyncStatus.LOADING;
      })
      .addCase(loadAlbum.fulfilled, (state, action: PayloadAction<Album>) => {
        state.loadStatus = AsyncStatus.IDLE;
        state.album = action.payload;
      })
      .addCase(loadAlbum.rejected, state => {
        state.loadStatus = AsyncStatus.FAILED;
      })
  }
});

export const { } = displayAlbumSlice.actions;

export default displayAlbumSlice.reducer;

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));