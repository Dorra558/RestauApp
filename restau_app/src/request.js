
import Axios from "axios"

import {
    GET_USER_API,
    ADD_USER_API,
    UPDATE_USER_API,
    DELETE_USER_API,
    GET_MENU_API,
    POST_MENU_API
} from "./shared/apiUrls"

export const fetchUser=()=>
Axios.get(GET_USER_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
}).then(res => res.data)

//   *************request menus*******************

export const fetchMenu=()=>
Axios.get(GET_MENU_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
}).then(res => res.data)
  

export const postMenu=() =>
    Axios.post(POST_MENU_API, {
        Accept:'application/json',     
    'Content-Type': 'application/json',
}).then(res => res.data)