import React from 'react'
import _ from 'lodash'

export default ({
  data: {
    game: {
      spaces,
    },
  },
}) => (
  <div>
    {_.map(spaces, (space) => (
      <div key={space.id}>
        Space {space.index}
      </div>
    ))}
  </div>
)
