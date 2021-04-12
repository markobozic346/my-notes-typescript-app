import {createStore} from 'redux';
import {noteReducer} from '../reducers/noteReducer'

export const store = createStore(noteReducer);