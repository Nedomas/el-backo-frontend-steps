import React from 'react'
import _ from 'lodash'
import Button from './Button'
import MenuContainer from './MenuContainer'

export default () => (
  <MenuContainer>
    <div>
      In new singleplayer route here
    </div>

    {_.map(_.range(2, 7), (n) => (
      <Button key={n} to={`/singleplayer/new/${n}`}>
        {n}
      </Button>
    ))}
  </MenuContainer>
)
