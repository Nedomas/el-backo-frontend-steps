import React from 'react'
import _ from 'lodash'

export default ({
  data: {
    game: {
      players,
    },
  },
}) => (
  <div>
    {_.map(players, ({ id, name }) => (
      <div key={id}>
        {name}
      </div>
    ))}
  </div>
)
