import React from "react";
import DatosImgs from "./DatosImgs";
import DatosUsers from "./DatosUsers";
import DatosPdfs from "./DatosPdfs";

const ItemListContainer = ()=>{
   

    return(
        <div>
           <h2>Datos cargados</h2>
           <div className="div-datos-get">
              <div className="div-datos-components">
                 <DatosUsers/>
              </div>
              <div className="div-datos-components">
                <DatosPdfs/>
              </div>
              
           </div>
           <div className="div-datos-components">
                <DatosImgs/>
              </div>
        </div>
    )
}


export default ItemListContainer