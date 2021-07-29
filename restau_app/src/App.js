
import './App.css';
import Menus from './components/home';

import Navigationbar from './components/navbar';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
