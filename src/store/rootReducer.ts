import { combineReducers } from 'redux';

import { homeReducer } from '../modules/homePage';

const rootReducer = () =>
  combineReducers({
    home: homeReducer,
    
  });

export default rootReducer;
