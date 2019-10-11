import React from 'react';
import './user.css';

class User extends React.Component {
  constructor(props){
    super(props);
    this.state={
      image:[],
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      deporte: this.props.user.deporte,
      carrera: this.props.user.carrera,
      phone_number: this.props.user.phone_number,


      twitter: this.props.user.twitter,
      instagram: this.props.user.instagram,
      facebook: this.props.user.facebook,

    }
  }

  ChangeImage(e){
    console.log(e.target.files[0])
  }
  render() {

    return(
      <div className="row user-container">
        <div className="col-sm-3">
          <div className="card">
            <img id="img-user" src={require('../../img/team2.jpg')} alt="John" style={userimg} />
            <div className="profile-userbuttons">
              <input id="file"type="file" className="inputfile" onChange={this.ChangeImage}/>

              <label htmlFor="file" >
                <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                  <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                </svg>
                </figure>
                <span>Subir Imagen</span>
              </label>
              </div>
            <h1 id="title-user">{this.state.firstname} {this.state.lastname}</h1>

            <p className="deporte">{this.state.deporte}</p>

            <p className="carrera">{this.state.carrera}</p>

            <p className="phone_number">{this.state.phone_number}</p>

            <div className="icons" style={iconsize}>
              <a id="icon-contact" href={this.state.twitter}><i className="fa fa-twitter"></i></a>
              <a id="icon-contact" href={this.state.instagram}><i className="fa fa-instagram"></i></a>
              <a id="icon-contact" href={this.state.facebook}><i className="fa fa-facebook"></i></a>
            </div>
            <p><a className="contact-btn" href='/user/edit'>Editar</a></p>
          </div>
        </div>

        <div className="col-md-9 info-juegos"  >
                <div className="profile-content">
              			  <h1>COMPONENT</h1>
                </div>
    		</div>
      </div>
    )
  }
}

export default User;


let userimg=
{
  width:'100%'
}
let iconsize=
{
  margin: '24px 0'
}
