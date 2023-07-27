import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRandomMessage = async () => {
  const response = await axios.get('/api/random_greeting');
  return response.data;
};

export const fetchRandomMessage = createAsyncThunk(
  'greeting/fetchRandomMessage',
  async () => {
    const response = await getRandomMessage();
    return response;
  }
);

const messageSlice = createSlice({
  name: 'greeting',
  initialState: {
    message: '',
    status: null,
  },
  reducers: {},
  extraReducers: {
    [fetchRandomMessage.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchRandomMessage.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload.greeting;
    },
    [fetchRandomMessage.rejected]: (state, action) => {
      state.status = 'failed';
      state.message = 'Error fetching message';
    },
  },
});

export default messageSlice.reducer;
