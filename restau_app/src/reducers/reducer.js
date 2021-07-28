
const users =[]
export const userReducer = (state = users, action) => {

    switch(action.type) {
        case "GET_USER_SUCCEDED":

            return action.payload
        
        break;


    }
return state
}