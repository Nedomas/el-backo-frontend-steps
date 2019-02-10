import React from 'react'
import _ from 'lodash'
import Button from './Button'

export default () => (
  <div>
    <div>
      In new singleplayer route here
    </div>

    {_.map(_.range(2, 7), (n) => (
      <Button key={n} to={`/singleplayer/new/${n}`}>
        {n}
      </Button>
    ))}
  </div>
)
