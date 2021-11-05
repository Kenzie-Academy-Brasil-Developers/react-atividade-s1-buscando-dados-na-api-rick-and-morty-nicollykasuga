import "./style.css";
function CharCard({ char }) {
  return (
    <>
      <div
        className={char.status === "Alive" ? "aliveCard" : "deadCard"}
        key={char.id}
      >
        <p>{char.name}</p>
        <img className="image" src={char.image} alt={char.name}></img>
      </div>
    </>
  );
}

export { CharCard };
