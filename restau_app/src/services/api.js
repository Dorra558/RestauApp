import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4000/app/service" });

//addMenu
function postnewMenu(nom, imgUrl,description ) {
    return Api.post("/addServices", { nom, imgUrl,description});
}

  //getMenu
  function getAllMenus() {
    return Api.get("/getServices");
  }

export {postnewMenu, getAllMenus} 
  export default {postnewMenu, getAllMenus}