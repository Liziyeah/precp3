const ChosenCard = ({ name, status, species }) => {
  return (
    <div>
      <h2>Chosen Character</h2>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
    </div>
  );
};

export default ChosenCard;
