import { combineReducers } from "redux"
import { localeReducer as locale } from 'react-localize-redux';

import userReducer from "./userReducer"


let reducer = combineReducers({userReducer, locale})



export default reducer