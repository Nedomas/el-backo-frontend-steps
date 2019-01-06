import React from 'react'

export default ({
  match: {
    params: {
      playersCount,
    },
  },
}) => (
  <div>
    This will eventually ask for {playersCount} player names to create a game
  </div>
)
