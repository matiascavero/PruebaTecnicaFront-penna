import React from "react";
import { Link } from "react-router-dom";

const Error = () =>{
    return(
        <div className="div-error">
           <div>
            <h1> PAGINA NO ENCONTRADA</h1>
           </div>
           <div>
             
             <Link to="/error" className="Link">
                <h3>volver a inicio</h3>
             </Link>
           </div>

        </div>
    )
}


export default Error