import { useEffect, useState } from "react";
//dispatch es para hacer algo y useSelector es para obtener o seleccionar algo del store
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  setApiCharacters,
  setSearchQuery,
} from "../../store/slices/counter/characterSlice";
import CharacterCard from "../../components/CharacterCard/CharacterCard";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiCharacters = useSelector((state) => state.characters.apiCharacters);
  console.log("personajes: ", apiCharacters);

  const customCharacters = useSelector(
    (state) => state.characters.customCharacters
  );
  const searchQuery = useSelector((state) => state.characters.searchQuery);
  const userType = useSelector((state) => state.characters.userType);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${valueInput.toLowerCase()}`
      );
      if (!response.ok) {
        throw new Error("No se encontraron personajes con ese nombre");
      }
      const data = await response.json();
      const characters = data.results.slice(0, 20);
      dispatch(setApiCharacters(characters)); // Aquí guardamos en Redux
    } catch (error) {
      setError(error.message);
      dispatch(setApiCharacters([]));
    } finally {
      setLoading(false);
    }
  };

  const filteredCharacters = [...apiCharacters, ...customCharacters].filter(
    (character) =>
      character.name.toLowerCase().includes(valueInput.toLowerCase())
  );

  return (
    <>
      <div className="home">
        <h1>Rick and Morty Characters</h1>
        <input
          type="text"
          value={valueInput}
          onChange={(e) => {
            setValueInput(e.target.value);
            dispatch(setSearchQuery(e.target.value));
          }}
          placeholder="Busca a un personaje por su nombre"
        />
        {userType === "admin" && (
          <button onClick={() => navigate("/create")}>Crear personaje</button>
        )}
        <button onClick={fetchData}>Buscar Personaje</button>

        {loading && <p>Cargando...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="characters-container">
          {filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              id={character.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};
