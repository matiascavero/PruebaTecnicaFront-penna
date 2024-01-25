import React, { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    numero: "",
    fecha: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/prueba/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json(); // Parse the response as JSON
        console.log("Solicitud exitosa", data);
      } else {
        console.error("Error en la solicitud", response);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <div>
      <div className="div-formulario">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <br />
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Apellido:
            <br />
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Telefono:
            <br />
            <input
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Fecha de Nacimiento:
            <br />
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleInputChange}
              required
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
};

export default FormData;
