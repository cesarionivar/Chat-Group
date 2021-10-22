import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { channelsReducer } from './channelsReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  channels: channelsReducer,
});
