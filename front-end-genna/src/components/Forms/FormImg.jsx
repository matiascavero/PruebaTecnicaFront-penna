import React, { useState } from "react";

const FormImg = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    imagePath: null,
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "imagePath" && files.length ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:3001/api/prueba/image";
    const formDataToSend = new FormData();
    formDataToSend.append("titulo", formData.titulo);
    formDataToSend.append("image", formData.imagePath);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        console.log("Formulario enviado exitosamente");
        // Puedes realizar acciones adicionales si el envío fue exitoso
      } else {
        console.error("Error al enviar el formulario");
        // Puedes manejar el error de alguna manera
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
            Título:
            <br />
            <input
              type="text"
              name="titulo"
              value={formData.titulo}
              onChange={handleInputChange}
              required
            />
          </label>
          <label className="label-img-pdf">
            Imagen:
            <br />
            <input
              type="file"
              name="imagePath"
              accept="image/png, image/jpeg, image/jpg"
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

export default FormImg;
