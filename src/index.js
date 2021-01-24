import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import firebase from 'firebase';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { HashRouter,Route, Switch} from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyDQABJCfmJGDqUFmxBvnSJX0jGy4TktQME",
  authDomain: "mesapartesvirtual-4c0bf.firebaseapp.com",
  projectId: "mesapartesvirtual-4c0bf",
  storageBucket: "mesapartesvirtual-4c0bf.appspot.com",
  messagingSenderId: "87526428300",
  appId: "1:87526428300:web:3e4c3b6f1348434531f5a9"
});

ReactDOM.render(
  <React.StrictMode>
  <HashRouter  basename={process.env.PUBLIC_URL + "/"}>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={App}/>
    </Switch>
    <Footer/>
  </HashRouter>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
