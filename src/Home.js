import React, { useState } from "react";
import { Link } from "react-router-dom";
import Range from "./components/Range";

const generateId = () => "_" + Math.random().toString(36).substr(2, 9);

function Home() {
  const [playerCount, setPlayerCount] = useState(1);
  const [startingLife, setStartingLife] = useState(20);

  const handlePlayerCountChange = (e) => {
    setPlayerCount(Number(e.target.value));
  };

  const handleStartingLifeChange = (e) => {
    setStartingLife(Number(e.target.value));
  };

  return (
    <div className="home">
      <Range
        name="No. of players"
        options={[1, 2, 3, 4, 5, 6]}
        currentValue={playerCount}
        onSelect={handlePlayerCountChange}
      />
      <Range
        name="Starting life"
        options={[20, 30, 40, 60]}
        currentValue={startingLife}
        onSelect={handleStartingLifeChange}
        enableCustomPick={true}
      />
      <Link
        to={`/session/${generateId()}?playerCount=${playerCount}&startingLife=${startingLife}`}
      >
        <button className="play">Play</button>
      </Link>
    </div>
  );
}

export default Home;
