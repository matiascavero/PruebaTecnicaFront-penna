import React from "react"
import Main from "./Main/Main"
import Carrusel from "./Carrusel/Carrusel"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./NavBar/NavBar"
import Error from "./Error/Error"
const App =()=>{
  return(
    <BrowserRouter>
      <NavBar/>
     <Routes>
     
      <Route path="/" element={<Main/>}/>
      <Route path="/carrusel" element={<Carrusel/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
    </BrowserRouter>
  )
}
/*
Rutas
api/prueba/users
api/prueba/image
api/prueba/pdf
*/
export default App