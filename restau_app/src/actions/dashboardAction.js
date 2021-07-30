

import axios from 'axios';
import { postnewMenu } from '../services/api';

const ADD_MENU = "ADD_MENU"
export const newMenu=(nom,imgUrl,description )=> async (dispatch) =>{
    try{
        const res=await postnewMenu (nom,imgUrl,description);
        dispatch ({
            type:ADD_MENU,
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
     console.log(error);
    }
}

// export function newMenu() {
//     return dispatch => {
//         postMenu()
//         .then (menus =>dispatch (
//             {type: "POST_MENU_SUCCEDED",payload: menus})
//         )

//         .catch(err=>dispatch( {
//             type: "POST_MENU_FAILED",
//             payload: err
//           }))
//     }

// }
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