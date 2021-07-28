import {fetchUser} from '../request'


export function getUser() {
    return dispatch => {
        fetchUser()
        .then (users =>dispatch (
            {type: "GET_USER_SUCCEDED",payload: users})
        )

        .catch(err=>dispatch( {
            type: "GET_USER_FAILED",
            payload: err
          }))
    }

}