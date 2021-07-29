import {fetchMenu} from '../request'


export function getMenu() {
    return dispatch => {
        fetchMenu()
        .then (menus =>dispatch (
            {type: "GET_MENU_SUCCEDED",payload: menus})
        )

        .catch(err=>dispatch( {
            type: "GET_MENU_FAILED",
            payload: err
          }))
    }

}