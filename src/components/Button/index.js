import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

export default ({
  component,
  ...props
}) => {
  // allow specifying component to use; default to Link
  const Component = component || Link

  return <Component className={styles.container} {...props} />
}
