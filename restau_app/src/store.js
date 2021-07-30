import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import {userReducer} from "./reducers/reducer"
// import { menuReducer } from "./reducers/menuReducer";

// const Reducers = combineReducers({
//     menustore: userReducer,
//     servicestore : menuReducer
// })
const middleWare = [thunk];
export const store = createStore (rootReducer, composeWithDevTools( applyMiddleware(...middleWare)))
   

export default store