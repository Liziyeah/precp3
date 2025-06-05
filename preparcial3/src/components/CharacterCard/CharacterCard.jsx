import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCustomCharacter } from "../../store/slices/counter/characterSlice";
const CharacterCard = ({ id, name, status, species }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="character-card">
        <h2 className="character-name">{name}</h2>
        <p className="character-status">Status: {status}</p>
        <p className="character-species">Species: {species}</p>
      </div>
      <div>
        <button onClick={() => navigate(`/edit/${id}`)}>Editar</button>
        <button onClick={() => dispatch(deleteCustomCharacter(id))}>
          Delete
        </button>
      </div>
    </>
  );
};
export default CharacterCard;
