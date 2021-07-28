import {createStore, applyMiddleware , combineReducers} from "redux";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/reducer"


const Reducers = combineReducers({
    menustore : userReducer
})

const store = createStore( Reducers, applyMiddleware(thunk))
   

export default store