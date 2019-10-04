import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Registro from './components/signUP/signup';
import SelectGame from './components/selectGame/selectGame';
import Home from './components/Home/home';
import User from './components/userFiles/user';
import Admin from './components/adminFiles/admin';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={Home}  />
        <Route path="/register" component={Registro} />
        <Route path="/selectGame" component={SelectGame} />
        <Route path="/user" component={User}  />
        <Route path="/admin" component={Admin}  />
      </React.Fragment>
    </BrowserRouter>

  );
}

export default App;
