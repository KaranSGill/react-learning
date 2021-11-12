import React from 'react'
import SlotM from './SlotM';

const Game = () => {
  return (
    <>
      <h2 className="heading_style">
        🎰 Welcome to <span style={{ fontWeight: " bold" }}>Slot machine</span>
        game 🎰
      </h2>
      <div className="slotmachine">
        <SlotM x="🙂" y="🙂" z="🙂" />
        <SlotM x="🙂" y="🎅" z="🙂" />
        <SlotM x="👮🏻‍♀️" y="👮🏻‍♀️" z="👮🏻‍♀️" />
        <SlotM x='🌹' y='🌹' z='🍿' />
      </div>
    </>
  )
}

export default Game;
