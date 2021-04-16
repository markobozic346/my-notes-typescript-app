import {combineReducers} from 'redux'
import {noteReducer} from './noteReducer'
import {searchReducer} from './searchReducer'


export default combineReducers({
     noteReducer,
    searchReducer,
})