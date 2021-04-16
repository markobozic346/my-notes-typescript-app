import {createStore} from 'redux';
import combineReducers from '../reducers/rootReducer'


export const store = createStore(combineReducers);