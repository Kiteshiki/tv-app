import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Program } from '../../types';
import http from '../../utils/http';

export const fetchSchedule = createAsyncThunk('schedule/fetchSchedule', async (params) => {
    const response = await http.get('/epg/programs', { params });
    return response.data.contents;
});

interface ScheduleState {
    programs: Array<Program>;
}

const initialState: ScheduleState = {
    programs: [],
};

export const schedule = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSchedule.fulfilled, (state: ScheduleState, action) => {
            state.programs = action.payload;
        });
    },
});

// export const {  } = schedule.actions;

export default schedule.reducer;
