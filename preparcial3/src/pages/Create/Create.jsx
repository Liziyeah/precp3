import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCustomCharacter } from "../../store/slices/counter/characterSlice";
import { v4 as uuid } from "uuid";
export const Create = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    status: "",
    species: "",
  });

  const handleChange = (e) => {
    setNewCharacter({
      ...newCharacter,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCustomCharacter({
        ...newCharacter,
        id: uuid(),
      })
    );
    setSuccessMessage("¡Personaje creado exitosamente!");
    setNewCharacter({ name: "", status: "", species: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Nombre"
          onChange={handleChange}
        />
        <input
          name="status"
          type="text"
          placeholder="Estado"
          onChange={handleChange}
        />
        <input
          name="species"
          type="text"
          placeholder="Especie"
          onChange={handleChange}
        />
        <button type="submit">Crear personaje</button>
      </form>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <button type="button" onClick={() => navigate("/")}>
        Volver al Home
      </button>
    </>
  );
};
