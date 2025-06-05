import { useNavigate } from "react-router-dom";

const CharacterCard = ({ id, name, status, species }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="character-card">
        <h2 className="character-name">{name}</h2>
        <p className="character-status">Status: {status}</p>
        <p className="character-species">Species: {species}</p>
      </div>
      <div>
        <button onClick={() => navigate(`/edit/${id}`)}>Editar</button>
      </div>
    </>
  );
};
export default CharacterCard;
