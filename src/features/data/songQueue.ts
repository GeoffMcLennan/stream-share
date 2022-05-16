import {createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ActiveQueueState {
    songQueue : [],
}

const initialState: ActiveQueueState = {

    songQueue: [],
}

export const activeQueueSlice = createSlice({
    name: 'activeQueueState',
    initialState, 
    reducers: {},
    extraReducers: {},
})

export const { } = activeQueueSlice.actions;
export default activeQueueSlice.reducer;
