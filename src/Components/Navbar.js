import React from 'react';
import icon from '../assets/icon.png';
import { gsap } from "gsap";

function Navbar() {
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
     
        <nav id="nav-color" className="navbar navbar-light bg-light fixed-top ">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img id="logo" src={icon} alt="" width="48" height="48" className="d-inline-block align-top margen logo" style={{marginTop:"-10px"}} />
                <label id="titulo" className="text-white"> Mesa Partes Virtual </label> 
            </a>
        </div>
    </nav>
    );
}
export default Navbar;