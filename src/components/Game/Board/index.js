import React from 'react'
import _ from 'lodash'
import position from './lib/position'
import styles from './index.module.css'

export default ({
  data: {
    game: {
      spaces,
    },
  },
}) => (
  <div className={styles.container}>
    {_.map(spaces, (space) => (
      <div
        key={space.id}
        className={styles.space}
        style={{ ...position(space) }}
      />
    ))}
  </div>
)
