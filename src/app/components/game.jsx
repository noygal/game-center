import React from 'react'
import Paper from 'material-ui/Paper'
import styles from './styles'


const Game = props => console.log(props) || (
  <div style={styles.grid.box}>
    <Paper style={Object.assign({
      backgroundImage: `url(http://thegamesdb.net/banners${props.images[6].url})`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }, styles.game.container)}>
      {props.title}
    </Paper>
  </div>
)

export default Game
