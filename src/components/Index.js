import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <div>
      In Index route here
    </div>

    <Link to='/singleplayer/new'>
      Singleplayer
    </Link>
  </div>
)
