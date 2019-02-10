import React from 'react'
import MenuContainer from './MenuContainer'
import Button from './Button'

export default () => (
  <MenuContainer>
    <div>
      In Index route here
    </div>

    <Button to='/singleplayer/new'>
      Singleplayer
    </Button>
  </MenuContainer>
)
