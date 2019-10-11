import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Registro from './components/signUP/signup';
import SelectGame from './components/selectGame/selectGame';
import Home from './components/Home/home';
import User from './components/userFiles/user';
import EditUser from './components/userFiles/edit-user'
import Admin from './components/adminFiles/admin';
import EditAdmin from './components/adminFiles/edit-admin.js'
import uuid from 'uuid'

class Matriz extends React.Component{
  constructor(){
    super()
    this.state = {
      user:{
        id: uuid.v4(),
        username:'',
        password:'',
        firstname:'Ariel',
        lastname:'C',
        e_mail:'',
        gender:'',

        deporte: 'Fútbol y baloncesto',
        carrera: 'Pro Trainer Fitnes',
        phone_number: '+56 12345678',

        twitter: 'http://www.twitter.com/user',
        instagram: 'http://www.instagram.com/user',
        facebook: 'https://www.facebook.com/user'
      }
    }
  }
  render(){

return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path='/' component={() =><Home />}  />
          <Route path='/register' component={() => <Registro user={this.state.user} />} />
          <Route path='/selectGame' component={() => <SelectGame />} />
          <Route exact path='/user 'component={() => <User user={this.state.user} />}  />
          <Route path='/user/edit' component={() => <EditUser user={this.state.user}/>}  />
          <Route exact path='/admin' component={() => <Admin />}  />
          <Route path='/admin/edit' component={() => <EditAdmin admin={this.state.user} />} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Matriz;
