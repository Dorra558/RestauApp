
import Axios from "axios"

import {
    GET_USER_API,
    ADD_USER_API,
    UPDATE_USER_API,
    DELETE_USER_API,
    GET_MENU_API,
    POST_MENU_API,
    PUT_MENU_API
} from "./shared/apiUrls"

export const fetchUser=()=>
Axios.get(GET_USER_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
}).then(res => res.data)

//   *************request menus*******************
s
//get menus
export const fetchMenu=()=>
Axios.get(GET_MENU_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
}).then(res => res.data)
  
//add menus
export const postMenu=() =>    
    Axios.post(POST_MENU_API,
        {
        Accept:'application/json',     
       'Content-Type': 'application/json',
        })
        .then(res => res.data)

// update menus
export const updateMenu=() =>    
    Axios.put(PUT_MENU_API,
        {
        Accept:'application/json',     
       'Content-Type': 'application/json',
        })
        .then(res => res.data)
