import { createStore, combineReducers } from "redux";
import {red} from './reducers/red'

 const reducers = combineReducers({
    count : red
 })
 const store =createStore(reducers);
 
 
 
 export default store