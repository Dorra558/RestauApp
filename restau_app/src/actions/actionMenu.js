
import { getAllMenus, postnewMenu, updateMenus, deleteMenus} from "../services/api";
import { GET_MENU, ADD_MENU, PUT_MENU, DELETE_MENU } from "./types"
 

//get all menus 
export const getMenu = () => async (dispatch) => {
    
    try {
        const res = await getAllMenus();
        dispatch({
            type: GET_MENU,
            payload: res.data
        })
    }
    catch (error) {
        console.log(error);
    }

}
// add new menus
    
export const newMenu =( nom,imgUrl,description )=> async (dispatch) =>{
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

//delete Menus

export const deleteMenu = (id) => async (dispatch) => {
     console.log("salut tous le monde",id)
    try{
        const res = await deleteMenus(id);
       
        dispatch ({
            type:DELETE_MENU,
            payload:id
        })
        console.log("payload")
        dispatch(getMenu);
    }
    catch (error) {
     console.log(error);
    }
}

// update menus

export const updateMenu = (id, nom, imgUrl, description) => async (dispatch) => {
    try {
        const res = await updateMenus(id, {nom, imgUrl, description});

        dispatch({
            type: PUT_MENU,
            payload: res.data
        });
    }
    catch (error) {
        console.log(error);
      
    }
};

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

