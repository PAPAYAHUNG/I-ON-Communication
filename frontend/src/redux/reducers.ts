import { combineReducers } from '@reduxjs/toolkit';

import bannerReducer from './slice/bannerSlice';
import dndReducer from './slice/dndSlice';


const reducer = combineReducers({
  banner: bannerReducer,
  dnd: dndReducer,
});

export default reducer;
