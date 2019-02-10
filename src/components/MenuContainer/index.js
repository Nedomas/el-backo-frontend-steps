import React from 'react'
import Logo from '../Logo'
import styles from './index.module.css'

export default ({ children }) => (
  <div className={styles.container}>
    <Logo />
    {children}
  </div>
)
