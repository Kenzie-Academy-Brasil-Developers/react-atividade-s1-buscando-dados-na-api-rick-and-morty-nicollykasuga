import { CharCard } from "../CharCard/index";
import "./style.css";
function Characters({ character }) {
  console.log(character);
  return (
    <>
      <h1>Meus personagens</h1>
      <div className="Container">
        {character.map((char, index) => (
          <CharCard key={index} char={char} />
        ))}
      </div>
    </>
  );
}

export { Characters };
