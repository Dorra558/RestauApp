

const ADD_MENU = "ADD_MENU"
const GET_MENU = "GET_MENU"
const initialState = {
      datas : [],
      loading:true
}

export const menuReducer = (state = initialState, action) => {
    const {type,payload} = action
    switch (type) {
        case GET_MENU :

            return {...state,
                datas: payload,
                loading: false
            }
        
        
        case ADD_MENU:
            return {
                ...state,
                datas: [...state.datas, payload]
            }
    }       
return state
}