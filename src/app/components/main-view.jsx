import React from 'react'
import styles from './styles'

const MainView = props => (
  <div style={styles.grid.wrapper}>
    { props.children }
  </div>
)

export default MainView
