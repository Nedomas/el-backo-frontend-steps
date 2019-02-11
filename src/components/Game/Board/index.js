import React from 'react'
import _ from 'lodash'
import { SizeSensor } from 'libreact/lib/SizeSensor'
import position from './lib/position'
import scalingFactor from './lib/scalingFactor'
import styles from './index.module.css'

export default ({
  data: {
    game: {
      spaces,
    },
  },
}) => (
  <SizeSensor>
    {(size) => (
      <div className={styles.container}>
        {_.map(spaces, (space) => (
          <div
            key={space.id}
            className={styles.space}
            style={{ ...position(space, scalingFactor(size)) }}
          />
        ))}
      </div>
    )}
  </SizeSensor>
)