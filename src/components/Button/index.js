import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

export default (props) => (
  <Link className={styles.container} {...props} />
)
