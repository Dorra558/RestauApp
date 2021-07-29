import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {userReducer} from "./reducers/reducer"
import { menuReducer } from "./reducers/menuReducer";

const Reducers = combineReducers({
    menustore: userReducer,
    servicestore : menuReducer
})

const store = createStore( Reducers, composeWithDevTools( applyMiddleware(thunk)))
   

export default store