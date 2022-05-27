import {createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Albums } from './album';
import { Song } from './song';


export interface ActiveQueueState {
    songQueue : Song[],
    currentIndex: number,
}

const initialState: ActiveQueueState = {

    songQueue: Albums['ABM_3V6vKQqt6SGXufxUiY2mTL'].songs,
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
