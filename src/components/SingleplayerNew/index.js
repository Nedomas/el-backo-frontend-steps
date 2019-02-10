import React from 'react'
import _ from 'lodash'
import Button from '../Button'
import MenuContainer from '../MenuContainer'
import styles from './index.module.css'

export default () => (
  <MenuContainer>
    <div>
      In new singleplayer route here
    </div>

    <div className={styles.buttons}>
      {_.map(_.range(2, 7), (n) => (
        <Button key={n} to={`/singleplayer/new/${n}`}>
          {n}
        </Button>
      ))}
    </div>
  </MenuContainer>
)
