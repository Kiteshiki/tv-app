import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Program } from '../../types';
import http from '../../utils/http';
import { fetchVod } from '../vod';

export const fetchSchedule = createAsyncThunk(
    'schedule/fetchSchedule',
    async (params) => {
        const response = await http.get(
            '/epg/programs?dataset=flex&channel=567',
            {
                params,
            },
        );
        return response.data;
    },
);

interface ScheduleState {
    programs: Program[];
    status: string;
}

const initialState: ScheduleState = {
    programs: [],
    status: 'idle',
};

export const schedule = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        const setSchedule = (state: ScheduleState, action) => {
            state.programs = action.payload.contents;
            state.status = 'fulfilled';
        };

        builder.addCase(fetchSchedule.fulfilled, setSchedule);
        builder.addCase(fetchSchedule.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchSchedule.rejected, (state) => {
            state.status = 'rejected';
        });
    },
});

export default schedule.reducer;
