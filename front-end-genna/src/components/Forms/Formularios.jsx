import React from "react";
import FormData from "./FormData";
import FormImg from "./FormImg";
import FormPdf from "./FormPdf";
const Formularios = () =>{
    return(
       <div>
         <div>
            <h2>Carga de datos</h2>
         </div>
         <div className="div-formularios">
         <FormData/>
         <FormImg/>
         <FormPdf/>
        </div>
       </div>
    )
}


export default Formularios