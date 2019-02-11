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

    {_.map(players, ({ id, name }) => (
      <div key={id} className={styles.player}>
        {name}
      </div>
    ))}
  </div>
)
