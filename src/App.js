// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// Data
import { wordsList } from "./data/words";

// Components
import StarScreen from "./components/StartScreen";
import Game from "./components/Game";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  console.log(words);

  return (
    <div className="App">
      {gameStage === "start" && <StarScreen />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <StarScreen />}
    </div>
  );
}

export default App;
