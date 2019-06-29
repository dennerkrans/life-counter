import React, { useState } from 'react'
import { Link } from '@reach/router'
import Range from './components/Range'

const id = () =>
  '_' +
  Math.random()
    .toString(36)
    .substr(2, 9)

function Home() {
  const [playerCount, setPlayerCount] = useState(1)
  const [startingLife, setStartingLife] = useState(20)

  return (
    <div className="home">
      <Range
        name="No. of players"
        options={[1, 2, 3, 4, 5, 6]}
        currentValue={playerCount}
        onSelect={e => setPlayerCount(Number(e.target.value))}
      />
      <Range
        name="Starting life"
        options={[20, 30, 40, 60]}
        currentValue={startingLife}
        onSelect={e => setStartingLife(Number(e.target.value))}
        enableCustomPick={true}
      />
      <Link to={`/session/${id()}?playerCount=${playerCount}&startingLife=${startingLife}`}>
        <button className="play">Play</button>
      </Link>
    </div>
  )
}

export default Home
