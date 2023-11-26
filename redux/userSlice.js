import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'data',
  initialState: {
    user: {},
    start:0,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setStart: (state, action) => {
      state.start = action.payload;
    },
  },
});

export const {  setUser,setStart } = userSlice.actions;
export const selectUser = (state) => state.data.user;
export const selectStart = (state) => state.data.start;
export default userSlice.reducer;