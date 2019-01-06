import React from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <div>
      In new singleplayer route here
    </div>

    {_.map(_.range(2, 7), (n) => (
      <Link key={n} to={`/singleplayer/new/${n}`}>
        {n}
      </Link>
    ))}
  </div>
)
