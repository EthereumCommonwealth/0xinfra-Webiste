import { combineReducers } from 'redux';
import mockReducer from './mockReducer';

const rootReducer = combineReducers(
  {
    teamMembers: mockReducer,
  });

export default rootReducer;
