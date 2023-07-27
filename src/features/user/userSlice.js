import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
