import React from 'react'
import _ from 'lodash'
import styles from './index.module.css'

export default ({
  data: {
    game: {
      spaces,
    },
  },
}) => (
  <div>
    {_.map(spaces, (space) => (
      <div key={space.id} className={styles.space} />
    ))}
  </div>
)
