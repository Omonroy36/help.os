import React from 'react';
import './admin.css';

class Admin extends React.Component {
  constructor(){
    super();
      this.state={
        img:[],
        username:""
      }

  }

  ChangeImage(e){
      console.log(e.target.files[0])
  }


  render() {
    return(
      <div className="row profile-row">
  		<div className="col-md-3">
  			<div className="profile-sidebar">

  				<div className="profile-userpic">
  					<img src={require('../../img/user.png')} className="img-responsive" alt=""/>
  				</div>


  				<div className="profile-usertitle">
  					<div className="profile-usertitle-name">
  						Marcus Doe
  					</div>
  					<div className="profile-usertitle-job">
  						Professional Trainer
  					</div>
  				</div>
  				<div className="profile-userbuttons">
            <input id="file"type="file" className="inputfile" onChange={this.ChangeImage}/>

            <label htmlFor="file" >
              <figure>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg>
              </figure>
              <span>Subir Imagen</span>
            </label>
            <br/>
  					<button type="button" className="btn btn-success btn-sm">Follow</button>
  					<button type="button" className="btn btn-danger btn-sm">Message</button>
  				</div>
  				<div className="profile-usermenu">

              <a href="/" className="btn btn-info-gradiant btn-md border-0 text-black mt-3">
  							<i className="glyphicon glyphicon-home"></i>
  							Inicio </a>

              <a href="/" className="btn btn-info-gradiant btn-md border-0 text-black mt-3">
  							<i className="glyphicon glyphicon-user"></i>
  							Configuracion </a>


                <a href="/" className="btn btn-info-gradiant btn-md border-0 text-black mt-3">
  							<i className="glyphicon glyphicon-ok"></i>
  							Canchas Jugadas </a>



                <a href="/" className="btn btn-info-gradiant btn-md border-0 text-black mt-3">
  							<i className="glyphicon glyphicon-flag"></i>
  							Help </a>


  				</div>
  			</div>
  		</div>
  		<div className="col-md-9">
              <div className="profile-content">
            			  <h1>COMPONENT</h1>
              </div>
  		</div>
  	</div>
    )
  }
}

export default Admin;
