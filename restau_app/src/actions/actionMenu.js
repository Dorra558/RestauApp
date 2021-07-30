
import { getAllMenus } from "../services/api";
 const GET_MENU = "GET_MENU"
export const getMenu = () => async (dispatch)=> {
    
    try{
    const res=await getAllMenus ();
    dispatch({
        type:GET_MENU,
        payload:res.data
    })
    }
    catch (error) {
        console.log(error);
    }


    // return dispatch => {
    //     fetchMenu()
    //     .then (menus =>dispatch (
    //         {type: "GET_MENU_SUCCEDED",payload: menus})
    //     )

    //     .catch(err=>dispatch( {
    //         type: "GET_MENU_FAILED",
    //         payload: err
    //       }))
    // }

}