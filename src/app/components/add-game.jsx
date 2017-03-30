import React from 'react'
import Paper from 'material-ui/Paper'
import styles from './styles'
import LibAdd from 'material-ui/svg-icons/av/library-add'


const AddGame = props => (
  <div style={styles.grid.addBox}>
    <Paper style={styles.game.container}>
      <LibAdd style={{width: '7rem', height: '7rem', marginLeft: '3.5rem', marginTop: '7rem'}}
        onTouchTap={props.newGame} />
    </Paper>
  </div>
)

export default AddGame
