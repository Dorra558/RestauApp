
import './App.css';
import Menus from './components/home';



import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './dashbord/admin';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
        <Switch>
          <Route path="/admin"> <Dashboard /> </Route>
          <Route exact path="/"> <Menus /> </Route>
        </Switch>
    </BrowserRouter>
   
      {/* <Menu/> */}
    </div>
  );
}

export default App;
