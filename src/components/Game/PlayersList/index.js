import React from 'react'
import _ from 'lodash'
import Logo from '../../Logo'
import styles from './index.module.css'

export default ({
  data: {
    game: {
      players,
    },
  },
}) => (
  <div className={styles.container}>
    <Logo />

    {_.map(players, ({ id, name, color }) => (
      <div key={id} className={styles.player}>
        <div className={styles.dot} style={{ backgroundColor: color }} /> {name}
      </div>
    ))}
  </div>
)
