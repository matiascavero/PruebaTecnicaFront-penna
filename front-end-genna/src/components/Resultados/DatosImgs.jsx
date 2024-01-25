import React, {useState, useEffect} from "react";
const DatosImgs = () =>{
    const [datos, setDatos] = useState([])

    useEffect(()=>{
     fetch('http://localhost:3001/api/prueba/image')
     .then((r)=> r.json())
     .then((data)=> setDatos(data.images))
    }, [])
    return(
        <div className="">
           <div className="">
            <h2>IMAGENES</h2>
           </div>
           <div className="datos">
           {  
            datos.map((item)=>(
                <div key={item.id} className="div-dato">
                    <ul>
                        <li>Nombre: {item.titulo}</li>
                        <br></br>
                        <img src={item.imagePath} alt={item.imagePath}/>
                        <br></br>
                            <a href={item.imagePath} download={item.imagePath}>
                                <button>
                                    Descargar
                                </button>
                            </a>
                    </ul>
                </div>
            ))
           }
           </div>
        </div>
    )
}


export default DatosImgs


