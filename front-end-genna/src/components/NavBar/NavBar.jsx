import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav>
          <div className="div-nav-ul">
            <ul>
                <Link to="/" className="Link-li">
                  <li>
                     Inicio
                  </li>
                </Link>
                <Link to='/carrusel' className="Link-li">
                  <li>
                    Carrusel
                  </li>
                </Link>
            </ul>
          </div>
        </nav>
    )
}


export default NavBar