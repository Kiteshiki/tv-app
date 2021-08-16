import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { VOD } from '../../types';
import http from '../../utils/http';

export const fetchVodList = createAsyncThunk(
    'vod/fetchVodList',
    async (params) => {
        const response = await http.get('/vod/contents?dataset=flex', {
            params,
        });
        return response.data;
    },
);

export const fetchVod = createAsyncThunk('vod/fetchVod', async (id: string) => {
    const response = await http.get(`/vod/content/${id}`);
    return response.data;
});

interface VODState {
    videos: VOD[];
    status: string;
}

const initialState: VODState = {
    videos: [],
    status: 'idle',
};

export const vod = createSlice({
    name: 'vod',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        const setVideos = (state: VODState, action) => {
            state.videos = action.payload.contents;
            state.status = 'fulfilled';
        };

        builder.addCase(fetchVodList.fulfilled, setVideos);
        builder.addCase(fetchVodList.pending, (state) => {
            state.status = 'pending';
        });
        builder.addCase(fetchVodList.rejected, (state) => {
            state.status = 'rejected';
        });
    },
});

export default vod.reducer;
