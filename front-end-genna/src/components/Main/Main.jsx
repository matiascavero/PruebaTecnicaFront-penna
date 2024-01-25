import React from "react";
import Formularios from "../Forms/Formularios";
import ItemListContainer from "../Resultados/itemListContainer";


const Main = () =>{
    return(
        <main>
          <div className="div-main">
             <Formularios/>
             <ItemListContainer/>
          </div>
        </main>
    )
}


export default Main