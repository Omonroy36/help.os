import React from 'react';
import './register.css';

class Registro extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username:'',
      password:'',
      firstname:'',
      lastname:'',
      e_mail:'',
      gender:''

    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <div className="container-register">
        <form onSubmit={this.onSubmit} className="register-form">
          <h1 className="tittle">Sign Up</h1>
          <div className="input-container-register">
          <input
          value={this.state.username}
          onChange={this.onChange}
          type="text" placeholder="&#128272; Usuario" name="username" className="input-100"
          />
          <input
          value={this.state.password}
          onChange={this.onChange}
          type="password" placeholder="&#128272; Contraseña" name="password" className="input-100" />
          <input
          value={this.state.firstname}
          onChange={this.onChange}
          type="text" placeholder="Nombre" name="firstname" className="input-48"  />
          <input
          value={this.state.lastname}
          onChange={this.onChange}
          type="text" placeholder="Apellido" name="lastname" className="input-48"  />
          <input
          value={this.state.e_mail}
          onChange={this.onChange}
          type="text" name="e_mail" placeholder="&#128231; e-mail" className="input-100" />
          <div className="genre">
            <label id="genre-tittle">Genero</label><br/>
            <input name='gender' onChange={this.onChange} type="radio" id="Masculino" value="Masculino"/>Masculino
            <input name='gender' onChange={this.onChange} type="radio" id="Femenino" value="Femenino"/>Femenino
          </div>


          <button className="btn-register" type="submit" value="submit">Registrar</button>
          <p className="sing-in">Ya tienes cuenta? <br/><a href="/signin.com" target="_blank">Ingresa aquí</a></p>
          <div className="g-signin2" data-longtitle="true"/>
          </div>
          </form>
      </div>
      //DEBUG: En google api button uncaught TypeError: Cannot read property 'style' of null
      // msg: de consola html
      // TERMINAR: Vista de imagen para Sabado
    )
  }
}
export default Registro;

// actulizacion 27/09/2019 1:06: AGREGADO; funcion para almacenar datos en consola.


// otra opcion para reemplazar imput tipo radio a un Select
// <label>
//   Sexo:
//   <select name='gender' >
//     <option value="Masculino">Masculino</option>
//     <option value="Femenino">Femenino</option>
//     <option value="Otro">Otro</option>
//   </select>
// </label>
