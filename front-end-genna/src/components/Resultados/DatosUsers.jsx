import React, { useEffect, useState } from "react";

const DatosUsers = () =>{
    const [datos, setDatos] = useState([])

    useEffect(()=>{
     fetch('http://localhost:3001/api/prueba/users')
     .then((r)=> r.json())
     .then((data)=> setDatos(data.users))
    }, [])
    return(
        <div className="div-datosUsers">
           <div className="div-datos-title">
            <h2>USUARIOS</h2>
           </div>
           <div className="datos">
           {  
            datos.map((item)=>(
                <div key={item.id} className="div-dato">
                    <ul>
                        <li>Nombre: {item.nombre}</li>
                        <li>Apellido: {item.apellido}</li>
                        <li>Telefono: {item.numero}</li>
                        <li>Fecha: {item.fecha}</li>
                    </ul>
                </div>
            ))
           }
           </div>
        </div>
    )
}


export default DatosUsers