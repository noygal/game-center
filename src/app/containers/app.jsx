
// Tap events
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
// App
import React, { Component } from 'react'
import App from '../components/app'
import MainView from '../components/main-view'
import Game from '../components/game'
import AddGame from '../components/add-game'
import GameEditModal from '../components/modals/game-edit'


const scrapper = require('thegamesdb')



class AppContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {games: [], editGame: false}
  }

  componentDidMount () {
    console.log('hi')
    // this._onUpdate = (state) => this.forceUpdate()
    // this.props.State.on('update', this._onUpdate)
  }

  componentWillUnmount () {
    // this.props.State.off('update', this._onUpdate)
  }

  newGame () {
    this.setState({gameEdit: true})
    scrapper.getGame({id: 1})
    .then(game => this.setState({games: this.state.games.concat([game])}))
  }

  render () {
    const {games = [], gameEdit} = this.state
    return (
      <App>
        <div>
          <GameEditModal
            title='Add Game'
            open={gameEdit || false}
            onRequestClose={this.handleClose} />
          <MainView>
            {
              games.map((game, i) => <Game key={i} {...game} />)
            }
            <AddGame newGame={this.newGame.bind(this)} />
          </MainView>
        </div>
      </App>
    )
  }
}

export default AppContainer
