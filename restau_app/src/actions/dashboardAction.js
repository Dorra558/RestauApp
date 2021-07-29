import Menus from "../components/home";


import {postMenu} from '../request'


export function newMenu() {
    return dispatch => {
        postMenu()
        .then (menus =>dispatch (
            {type: "POST_MENU_SUCCEDED",payload: menus})
        )

        .catch(err=>dispatch( {
            type: "POST_MENU_FAILED",
            payload: err
          }))
    }

}
// import {postMenu} from '../request'



// export const newMenu = (nom, imgUrl, description) => async (dispatch) => {
//   try {
//     const res = await TutorialDataService.create({ nom,imgUrl, description });

//     dispatch({
//       type: "GET_MENU_SUCCEDED",
//       payload: menus,
//     });

//     return Promise.resolve(menus);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };