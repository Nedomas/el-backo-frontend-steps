import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

export default () => (
  <div>
    <div>
      In Index route here
    </div>

    <Button to='/singleplayer/new'>
      Singleplayer
    </Button>
  </div>
)
