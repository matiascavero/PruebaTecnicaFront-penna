import React, {useState, useEffect} from "react";

const DatosPdfs = () =>{
    const [datos, setDatos] = useState([])

    useEffect(()=>{
     fetch('http://localhost:3001/api/prueba/pdf')
     .then((r)=> r.json())
     .then((data)=> setDatos(data.files))
    }, [])
    return(
        <div  className="div-pdfs">
           <div className="">
            <h2>PDFS</h2>
           </div>
           <div className="datos divv">
           {  
            datos.map((item)=>(
                <div key={item.id} className="div-dato">
                    <ul>
                        <li>Nombre: {item.titulo}</li>
                        <br></br>
                        <img src={item.path} alt={item.title}/>
                        <br></br>
                            <a href={item.path} download={item.title}>
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


export default DatosPdfs