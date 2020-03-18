import { combineReducers } from 'redux';
import priceReducer from './priceReducer';
import storeReducer from './storeReducer';
import carReducer from './carReducer';

export default combineReducers({ priceReducer, carReducer, storeReducer })