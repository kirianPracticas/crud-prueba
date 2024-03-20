import React, { useState } from "react";

function Form({ setVisible, savedProduct }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSaveProduct = () => {
    
    const newProduct = {
      title: title,
      description: description,
      status: status,
    };
    savedProduct(newProduct);
    setTitle("");
    setDescription("");
    setStatus("");
  };

  return (
    <>
      {setVisible ? (
        <div className="w-full bg-gray-400 h-96 flex justify-center items-center">
          <div className="flex flex-col bg-orange-200 w-64 h-56 rounded-md items-center">
            <h1 className="mt-4">Añadir producto</h1>
            <input
              className="border-solid mt-4 mb-2 w-5/6 rounded-md"
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="border-solid m-2 w-5/6 rounded-md"
              type="text"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="border-solid m-2 w-5/6 rounded-md"
              type="text"
              placeholder="Estado"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
            <button onClick={handleSaveProduct}>Guardar</button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Form;
