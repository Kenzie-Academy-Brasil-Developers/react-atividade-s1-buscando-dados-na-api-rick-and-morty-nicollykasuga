import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then(response => setCharacterList(response.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Characters character={characterList} />
      </header>
    </div>
  );
}

export default App;
