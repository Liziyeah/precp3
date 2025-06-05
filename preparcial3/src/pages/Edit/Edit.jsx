import ChosenCard from "../../components/ChosedCard/ChosedCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEditingCharacter } from "../../store/slices/counter/characterSlice";
export const Edit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [character, setCharacter] = useState({
    name: "",
    status: "",
    species: "",
  });
  useEffect(() => {
    fetchCharacter();
  }, [id]);

  const fetchCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const data = await response.json();
    setCharacter({
      name: data.name,
      status: data.status,
      species: data.species,
    });
  };

  const handleChange = (e) => {
    //el valor que esta en el target.name, q seria el de la api, lo cambio por el valor que yo escriba en el input :D
    setCharacter({
      //payload son los datos que se envian al reducer por medio del dispatch
      ...character,
      [e.target.name]: e.target.value,
    });
    console.log(setCharacter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setEditingCharacter(character));
  };
  return (
    <>
      <ChosenCard
        name={character.name}
        status={character.status}
        species={character.species}
      />
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Nombre del personaje"
          onChange={handleChange}
        />
        <input
          name="status"
          type="text"
          placeholder="Estado"
          value={character.status}
          onChange={handleChange}
        />
        <input
          name="species"
          type="text"
          placeholder="Especie"
          value={character.species}
          onChange={handleChange}
        />

        <button type="submit">Guardar Cambios</button>
      </form>
    </>
  );
};
