import React, { useState, useEffect, useCallback } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Player from "./components/Player";

function Session() {
  const { sessionId } = useParams();
  const [searchParams] = useSearchParams();
  const [initialState, setInitialState] = useState(null);
  const [players, setPlayers] = useState(null);

  const getParamAsNumber = useCallback(
    (name) => {
      return Number(searchParams.get(name));
    },
    [searchParams]
  );

  const updateSessionStorage = useCallback(
    (updatedPlayers, updatedInitialState) => {
      const sessionData = {
        ...updatedInitialState,
        players: updatedPlayers,
      };
      sessionStorage.setItem(sessionId, JSON.stringify(sessionData));
    },
    [sessionId]
  );

  useEffect(() => {
    let session = JSON.parse(sessionStorage.getItem(sessionId));
    if (!session) {
      const playerCount = getParamAsNumber("playerCount");
      const startingLife = getParamAsNumber("startingLife");
      const newPlayers = Array.from(Array(playerCount), (_, i) => ({
        id: i,
        name: `Player ${i + 1}`,
        life: startingLife,
      }));
      session = {
        initialState: {
          playerCount,
          startingLife,
        },
        players: newPlayers,
      };
      sessionStorage.setItem(sessionId, JSON.stringify(session));
    }
    setInitialState(session.initialState);
    setPlayers(session.players);
  }, [sessionId, getParamAsNumber]);

  useEffect(() => {
    if (initialState && players) {
      updateSessionStorage(players, initialState);
    }
  }, [players, initialState, updateSessionStorage]);

  const handleUpdateLife = useCallback((id, life) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, life } : player
      )
    );
  }, []);

  const handleUpdateName = useCallback((id, name) => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.id === id ? { ...player, name } : player
      )
    );
  }, []);

  if (!players) {
    return <p>Loading...</p>;
  }

  return (
    <div className="session">
      {players.length > 2 && (
        <div className="horizontal-prompt">
          <h2 className="horizontal-prompt--text">
            Rotate device into horizontal mode
          </h2>
        </div>
      )}
      <div
        className={`players${players.length === 2 ? " players-two" : ""}${
          players.length > 2 ? " players-vertical" : ""
        }`}
      >
        {players.map((player) => (
          <Player
            key={player.id}
            updateLife={handleUpdateLife}
            updateName={handleUpdateName}
            {...player}
          />
        ))}
      </div>
    </div>
  );
}

export default Session;
