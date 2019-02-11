import React from 'react'

export default ({
  match: {
    params: {
      gameId,
    },
  },
}) => (
  <div>
    This is a game with id {gameId}
  </div>
)
