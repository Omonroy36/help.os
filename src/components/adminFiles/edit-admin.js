import React from 'react';
import Swal from 'sweetalert2';

class EditAdmin extends React.Component{
  constructor(props){
    super(props)
      this.state={
        firstname: this.props.admin.firstname,
        lastname: this.props.admin.lastname,

        deporte: this.props.admin.deporte,
        carrera: this.props.admin.carrera,
        phone_number: this.props.admin.phone_number,

        twitter: this.props.admin.twitter,
        instagram: this.props.admin.instagram,
        facebook: this.props.admin.facebook
      }
      this.onChangeInfo = this.onChangeInfo.bind(this)
      this.onSubmitInfo = this.onSubmitInfo.bind(this)
      this.alertSaved = this.alertSaved.bind(this)
  }

onChangeInfo(e){
  this.setState({ [e.target.name]: e.target.value});
}
onSubmitInfo(e){
  e.preventDefault()
  console.log(this.state)
}
alertSaved(e){
  Swal.fire({
  title: '¿Guardar Cambios?',
  type: 'question',
  confirmButtonColor: '#04B404',
  cancelButtonColor: '#d33',
  showCancelButton: true,
  confirmButtonText: 'Guardar Cambios'
}).then((result) => {
  if (result.value) {
    Swal.fire(
      '¡Cambios Guardados!',
      'Se han guardado tus datos con exito',
      'success'
    )
  }
})
}

  render(){
    return(
      <div className="container-register edit-user-info">
      <form className="register-form" onSubmit={this.onSubmitInfo}>
          <h1 className="tittle ">Hora de Realizar unos <br/>Cambios !!!</h1>
        <div className="input-container-register edit-userContainer">
          <input
          value={this.state.firstname}
          onChange={this.onChangeInfo}
          type="text" placeholder="Nombres" name='firstname' className="input-48"
          />
          <input
          value={this.state.lastname}
          onChange={this.onChangeInfo}
          type="text" placeholder="Apellido" name="lastname" className="input-48"
          />
          <input
          value={this.state.deporte}
          onChange={this.onChangeInfo}
          type="text" placeholder="Deportes Preferidos" name="deporte" className="input-100"
          />
          <input
          value={this.state.carrera}
          onChange={this.onChangeInfo}
          type="text" placeholder="Dedicacion? ej: Pro-Trainer, Aficionado al Deporte" name="carrera" className="input-100"
          />
          <input
          value={this.state.phone_number}
          onChange={this.onChangeInfo}
          type="tel" placeholder="Cel: +56" name="phone_number" className="input-100"
          />

          <input
          value={this.state.twitter}
          onChange={this.onChangeInfo}
          type="text" placeholder="Twitter" name="twitter" className="input-100"
          />
          <input
          value={this.state.instagram}
          onChange={this.onChangeInfo}
          type="text" placeholder="Instagram" name="instagram" className="input-100"
          />
          <input
          value={this.state.facebook}
          onChange={this.onChangeInfo}
          type="text" placeholder="Facebook" name="facebook" className="input-100"
          />

          <button onClick={this.alertSaved} className="btn-edit" type="submit" >Guardar</button>
          <h5 className="back-user"><a href='/user'>Regresar</a></h5>
        </div>
      </form>
      <p>aeowmaeoemoewmoe</p>

      </div>
    )
  }
}
export default EditAdmin;
