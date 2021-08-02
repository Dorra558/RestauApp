

import {ADD_MENU, GET_MENU, PUT_MENU, DELETE_MENU} from "../actions/types"
const initialState = {
      datas : [],
      loading:true
}

export const menuReducer = (state = initialState, action) => {
    const {type,payload} = action
    switch (type) {
        //get menu
        case GET_MENU:
            state =
            {
                ...state,
                datas: payload,
                loading: false
            }
            console.log(state)
            break;
        
        //add menu
        case ADD_MENU:
            state =
            {
                ...state,
                datas: [...state.datas, payload],
               
            }
            console.log(state)
            break;
        
        //delete menu
        
        case DELETE_MENU:
            state =
            {
                ...state,
                datas: [...state.datas.filter(
                    data => data._id !== payload

                )],
               
            }
            console.log("hhhhhhh",state)
            break;
        
        //update menu
        case PUT_MENU:
            return state.map((menu) => {
        if (menu.id === payload.id) {
          return {
            ...menu,
            ...payload,
          };
        } else {
          return menu;
        }
      });
            
            
            
            
    //         state =
    //         {
    //             ...state,
    //             datas: [...state.datas.map(menu) => {
    // if (menu.id === payload.id) {
    //     return {
    //         ...menu,
    //         ...payload,
    //     } else {
    //         return menu
    //             }
    //              } 
    //             }
                    
    //                 , payload],
               
    //         }
    //         console.log(state)
    //         break;
        
    }       
return state
}