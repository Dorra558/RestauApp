
const menus =[]
export const menuReducer = (state = menus, action) => {

    switch(action.type) {
        case "GET_MENU_SUCCEDED":

            return action.payload
        
            break;
        case "POST_MENU_SUCCEDED":
            return [...state, action.payload]
            break;
    }       
return state
}