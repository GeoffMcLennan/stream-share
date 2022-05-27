import { BooleanLiteral, SourceMapRange } from 'typescript';
import { RootState, AppThunk } from '../../app/store';
import {createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '../data/song';
import { Albums } from '../data/album';

export interface ActiveSongState {
    song: Song;
    liked: boolean;
    progress: number;
    playing: boolean;
    shuffle: boolean;
}

const initialState: ActiveSongState = {
    song: Albums['ABM_3V6vKQqt6SGXufxUiY2mTL'].songs[0],
    liked: false,
    playing: false,
    progress: 0,
    shuffle: false,
}

export const activeSongSlice = createSlice({
    name: 'activeSong',
    initialState, 
    reducers: {
        toggleLiked: (state) => {
            state.liked = !state.liked;
        },
        togglePlaying: (state) => {
            state.playing = !state.playing;
        },
        toggleShuffle: (state) => {
            state.shuffle = !state.shuffle;
        },
        
    },
    extraReducers: (builder) => {
            builder.addCase(createAction('activeQueueState/nextSong'), (state, action) => {
                
                if (action && action.payload) {
                    state.song = action.payload;
                }
            } )
    },
})


export const { toggleLiked, togglePlaying, toggleShuffle } = activeSongSlice.actions;

export default activeSongSlice.reducer;
