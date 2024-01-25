import React, { useState } from "react";

const FormPdf = () => {
  const [formData, setFormData] = useState({
    titulo: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { name, files } = e.target;

    if (name === "file") {
      const file = files[0];
      setFormData({
        ...formData,
        file: file,
      });
    } else {
      setFormData({
        ...formData,
        [name]: e.target.value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("titulo", formData.titulo);
      formDataToSend.append("file", formData.file);

      const response = await fetch("http://localhost:3001/api/prueba/pdf", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Formulario enviado exitosamente", data);
      } else {
        console.error("Error al enviar el formulario", response);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error.message, error);
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
            Archivo pdf:
            <br />
            <input
              type="file"
              name="file"
              accept=".pdf"
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

export default FormPdf;
