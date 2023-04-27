// rootReducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import { loginReducer } from './slice/login.slice';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
