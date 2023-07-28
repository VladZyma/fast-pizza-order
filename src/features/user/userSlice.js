import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { getAddress } from '../../services/apiGeocoding';

function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

const initialState = {
  userName: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

export const fetchAddress = createAsyncThunk('user/fetchAddress', async () => {
  // get user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };
  // use a reverse geocoding API to get a description of the user's address
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;
  // return an object with the data
  return { position, address };
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state) => {
        state.error =
          'There was a problem getting your address. Make sure to fill this field!';
        state.status = 'error';
      }),
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
