import React, { useState } from 'react'
import Range from './components/Range'

function Home() {
  const [playerCount, setPlayerCount] = useState(1)
  const [startingLife, setStartingLife] = useState(20)

  return (
    <div className="home">
      <Range
        options={[1, 2, 3, 4, 5, 6]}
        currentValue={playerCount}
        onSelect={e => setPlayerCount(Number(e.target.value))}
      />
      <Range
        options={[20, 30, 40]}
        currentValue={startingLife}
        onSelect={e => setStartingLife(Number(e.target.value))}
        enableCustomPick={true}
      />
    </div>
  )
}

export default Home
