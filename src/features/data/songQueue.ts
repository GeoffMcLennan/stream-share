import {createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from './song';


export interface ActiveQueueState {
    songQueue : Song[],
    currentIndex: number,
}

const initialState: ActiveQueueState = {

    songQueue: [
        {
            title: 'Green and Gold',
            artist: 'RePherb',
             albumArt: 'data:image/jpeg;base64,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',
             albumName: 'PHERB',
             liked: false,
             songLength: 120,
        },
        {
            title: 'Billy buttfuck',
            artist: 'RePherb',
            albumArt: 'data:image/jpeg;base64,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',
            albumName: 'PHERB',
            liked: false,
            songLength: 120,
        },
    ],
    currentIndex: 0,
}

export const activeQueueSlice = createSlice({
    name: 'activeQueueState',
    initialState, 
    reducers: {
        nextSong: (state, action: PayloadAction<Song>) => {
            state.currentIndex += 1;
        } 
    },
    extraReducers: {},
})

export const {nextSong} = activeQueueSlice.actions;
export default activeQueueSlice.reducer;
