import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../data/song";

export interface DisplayAlbumState {
  albumName: string;
  artistName: string;
  albumArt: string;
  albumYear: string;
  liked: boolean;
  songs: Array<Song>;
}

const initialState: DisplayAlbumState = {
  albumName: 'PHERB',
  artistName: 'RePherb',
  albumArt: 'data:image/jpeg;base64,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',
  albumYear: '2022',
  liked: false,
  songs: [
    {
      title: 'Green and Gold',
      artist: 'RePherb',
      albumArt: 'data:image/jpeg;base64,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',
      albumName: 'PHERB',
      liked: false,
      songLength: 120,
    }
  ]
}

export const displayAlbumSlice = createSlice({
  name: 'displayAlbumSlice',
  initialState,
  reducers: {
    
  }
});

export const { } = displayAlbumSlice.actions;

export default displayAlbumSlice.reducer;