import React from 'react';
import icon from '../assets/logogithub.png';
function Footer() {
      
    return (
        <footer id="footer" className="padded">
                    <div className="container">
                        <h6 className="text-center text-white"> 2021 - Todos los derechos reservados </h6>
                        <div className="col text-center">
                            <h4 id="name" className="text-center text-white" >
                                <span> P</span><span className="name_animation transparent">e</span><span className="name_animation transparent">d</span><span className="name_animation transparent">r</span><span className="name_animation transparent">o</span> 
                                <span> M</span><span className="name_animation transparent">a</span><span className="name_animation transparent">n</span><span className="name_animation transparent">u</span><span className="name_animation transparent">e</span><span className="name_animation transparent">l</span>
                                <span> A</span><span className="name_animation transparent">n</span><span className="name_animation transparent">t</span><span className="name_animation transparent">o</span><span className="name_animation transparent">n</span><span className="name_animation transparent">i</span><span className="name_animation transparent">o</span>
                                <span> J</span><span className="name_animation transparent">u</span><span className="name_animation transparent">r</span><span className="name_animation transparent">a</span><span className="name_animation transparent">d</span><span className="name_animation transparent">o</span>
                                <span> M</span><span className="name_animation transparent">o</span><span className="name_animation transparent">r</span><span className="name_animation transparent">e</span><span className="name_animation transparent">n</span><span className="name_animation transparent">o </span>
                                <a href="https://github.com/PedroManuelJM" target="_blank"><img id="logo-github" src={icon} /></a>
                            </h4>    
                        </div>
                    </div>
                </footer>

    );
}

export default Footer;