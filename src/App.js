import './App.css';
import React, { Component } from 'react';
import firebase from 'firebase'; // importando firebase 
import FileUpload from './FileUpload';
import gmail from './assets/buscar.png';
import swal from 'sweetalert'; /* importando sweealert */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // icon 
import { faTimesCircle,faCheckCircle,faFileAlt,faUser,faAddressCard} from '@fortawesome/free-solid-svg-icons'; //icon 
import { gsap } from "gsap";
class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      pictures: [],
      uploadValue: 0,
      tiposolicitud: "",
      asunto: "",
      tipodocumento: "",
      nrodocumento: "",
      telefono: "",
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }
  
  componentWillMount() {
    // Cada vez que el método 'onAuthStateChanged' se dispara, recibe un objeto (user)
    // Lo que hacemos es actualizar el estado con el contenido de ese objeto.
    // Si el usuario se ha autenticado, el objeto tiene información.
    // Si no, el usuario es 'null'
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  EnviarFirebase = (e) => {
    e.preventDefault();
    // ENVIANDO PARAMETROS PARA GUARDAR A LA BASE DE DATOS FIREBASE 
    const record = {
      tiposolicitud: this.state.tiposolicitud,
      asunto: this.state.asunto,
      nombresapellidos: this.state.user.displayName,
      tipodocumento: this.state.tipodocumento,
      nrodocumento: this.state.nrodocumento,
      email: this.state.user.email,
      telefono: this.state.telefono,

    };
  
    const dbRef = firebase.database().ref('Documentos'); // DOCUMENTOS ES EL NOMBRE DE LA RAMA PRINCIPAL 
    const newPicture = dbRef.push();
    newPicture.set(record);
    // LIMPIANDO LOS INPUTS LUEGO DE ENVIAR EL FORMULARIO 
    document.getElementById('nrodocumento').value='';  
    document.getElementById('asunto').value=''; 
    document.getElementById('telefono').value=''; 
    document.getElementById('file').value=''; 
    document.getElementById('tiposolicitud').value="" ;
    document.getElementById('tipodocumento').value="" ;

    this.setState({ // EN ESTA PARTE VUELVE AL PROGRESSBAR EN 0
      uploadValue: 0
    })
    swal(
      {
          text: " Se registro correctamente su formulario a mesa de partes.",
          icon: "success",
          button: "Ok",
          timer: "3000",
      });
  
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} Salir`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleUpload(event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`Documentos/${file.name}`);
    const task = storageRef.put(file);

    // Listener que se ocupa del estado de la carga del fichero
    task.on('state_changed', snapshot => {
      // Calculamos el porcentaje de tamaño transferido y actualizamos
      // el estado del componente con el valor
      let percentage = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      //  let percentage = (100*snapshot.getBytesTransferred())/snapshot.getTotalByteCount();
      this.setState({
        uploadValue: percentage
      })
    }, error => {
      // Ocurre un error
      console.error(error.message);
    }, () => {
       swal(
        {
            text: " Se adjunto correctamente su archivo.",
            icon: "success",
            button: "Ok",
            timer: "3000",
        });
    });
  }
// Cuando el usuario quiere acceder debe autenticarse por su cuenta gmail
  renderLoginButton() {
    if (!this.state.user) {
      return (
        <>
          <div className="container text-center">
            <br />
            <div className="jumbotron jumbotron-fluid">
              <div className="container">
              <br /><br />
                <h1 className="display-4">Instrucciones</h1>
                <p className="lead text-white texto" >Primero debe iniciar sesión con su cuenta gmail , para poder realizar su solicitud por mesa de partes.</p>
              </div>
            </div>
            <button onClick={this.handleAuth} className="App-btn">
              <img src={gmail} /> Iniciar sesión Gmail
            </button>
            <br /> <br />
          </div>
        </>
      );
    } else {
      return (
        <>
        <div className="separar">    
        </div> 
        <div className="card col">
          <div className="container">
               <br /> <br /> 
              <strong className="" style={{ color: "#004C4C" }} >¡Hola, <FontAwesomeIcon className="fa-icon" icon={faUser}/> {this.state.user.displayName}!</strong>
              <button onClick={this.handleLogout} className="btn btn-danger" style={{ float: "right" }}> <FontAwesomeIcon className="fa-icon" icon={faTimesCircle}/> Salir</button> 
          </div> 
          <span className="badge bg-info text-white" style={{ marginTop: "10px" }}><FontAwesomeIcon className="fa-icon" icon={faFileAlt}/> Registro de expediente</span>
          <form className="form-group" onSubmit={this.EnviarFirebase}>
            <br />
            <div className="form-row">
              <div className="form-group col-md-7">
                <select id="tiposolicitud" className="form-control" name="tiposolicitud" onChange={(e) => this.setState({ tiposolicitud: e.target.value })} required>
                  <option value="" selected> Seleccione el tipo solicitud </option>
                  <option value="CAS"> CONVOCATORIA CAS </option>
                  <option value="PRACTICAS"> PRACTICAS </option>
                  <option value="TRAMITES"> TRAMITES </option>
                  <option value="OTROS"> OTROS </option>
                </select>
              </div>
              <div className="form-group col-md-5">
                <input type="text" className="form-control" id="asunto" name="asunto" onChange={(e) => this.setState({ asunto: e.target.value })} placeholder="Asunto de la solicitud"   required minLength="4"/>
              </div>
            </div>
            <h5> <FontAwesomeIcon className="fa-icon" icon={faAddressCard}/> Datos Personales  <img  className="imgRedonda"src={this.state.user.photoURL}/> </h5>
            <hr></hr>
            <div className="form-group">
              <label>Nombres y Apellidos</label>
              <input type="text" className="form-control" value={this.state.user.displayName} disabled />
            </div>
            <div className="form-row">
              <div className="form-group col-md-7">
                <select id="tipodocumento" className="form-control" name="tipodocumento" onChange={(e) => this.setState({ tipodocumento: e.target.value })} required>
                  <option value=""> Seleccione el tipo documento </option>
                  <option value="DNI">DNI</option>
                  <option value="CARNET EXTRANJERIA"> Carnet Extranjería </option>
                </select>
              </div>
              <div className="form-group col-md-5">
                <input type="text" className="form-control" id="nrodocumento" name="nrodocumento" placeholder="Nro documento" onChange={(e) => this.setState({ nrodocumento: e.target.value })}   required/>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-7">
                <label>Correo electrónico</label>
                <input type="text" className="form-control" value={this.state.user.email} disabled />
              </div>
              <div className="form-group col-md-5">
                <label >Teléfono</label>
                <input type="text" className="form-control"  id="telefono"  name="telefono" onChange={(e) => this.setState({ telefono: e.target.value })} required/>
              </div>
            </div>
            <FileUpload onUpload={this.handleUpload} uploadValue={this.state.uploadValue} />
            <div className="container text-center">
            <button className="btn btn-success" style={{ marginTop: "-5px" }} > <FontAwesomeIcon className="fa-icon" icon={faCheckCircle}/> Enviar</button>
            </div>
          </form>
        </div>
        <br />
        </>
      );
    }
  }
  render() {
    // animación 
    let tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to('#titulo', {
            duration: 2,
            x: 120,
            ease: 'linear'
   });
   tl.to('#logo', {
   duration: 2,
   rotate: 360
   });
   tl.to('#logo-github', {
    duration: 2,
    rotate: 360
   });
   
    return (
      <section id="inicioSesion">
        <div className="container" style={{padding:"150px"}}>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              {this.renderLoginButton()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default App;