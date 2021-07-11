import {combineReducers} from "redux"

import counterReducer from "./counter"
import loggedReducer from "./isLogged"
import hostelsReducer from "./hostels"

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged: loggedReducer,
    hostels: hostelsReducer
})

export default allReducers;