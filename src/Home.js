import React, { useState } from 'react'
import Range from './components/Range'

function Home() {
  const [playerCount, setPlayerCount] = useState(1)
  const [startingLife, setStartingLife] = useState(20)

  return (
    <div className="home">
      <Range
        options={createArrayOfIntegers(1, 6)}
        currentValue={playerCount}
        onSelect={e => setPlayerCount(Number(e.target.value))}
      />
      <Range
        options={createArrayOfIntegers(20, 40, 10)}
        currentValue={startingLife}
        onSelect={e => setStartingLife(Number(e.target.value))}
        enableCustomPick={true}
      />
    </div>
  )
}

const createArrayOfIntegers = (start, end, step = 1) => {
  return Array.from({ length: end / step }, (_, i) => i * step + start)
}

export default Home
