import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4000/app/service" });

//add Menu
function postnewMenu(nom, imgUrl,description ) {
    return Api.post("/addServices", { nom, imgUrl,description});
}

  //get Menu
  function getAllMenus() {
    return Api.get("/getServices");
  }  


  // delete Menu 
 function deleteMenus(id) {
    return Api.delete(`/${id}`);
  }

    //edit Menu
    function updateMenus(id) {
    return Api.put(`/${id}`);
  }



export {postnewMenu, getAllMenus, updateMenus, deleteMenus} 
export default { postnewMenu, getAllMenus, updateMenus ,deleteMenus}
  

