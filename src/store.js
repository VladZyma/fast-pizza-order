import { configureStore, combineReducers } from '@reduxjs/toolkit';

import userReducer from './features/user/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
