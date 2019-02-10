import React from 'react'
import MenuContainer from './MenuContainer'

export default ({
  match: {
    params: {
      playersCount,
    },
  },
}) => (
  <MenuContainer>
    This will eventually ask for {playersCount} player names to create a game
  </MenuContainer>
)
