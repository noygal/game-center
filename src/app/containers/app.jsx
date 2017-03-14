
// Tap events
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
// App
import React, { Component } from 'react'
import App from '../components/app'
import MainView from '../components/main-view'
import Game from '../components/game'
import AddGame from '../components/add-game'


const scrapper = require('thegamesdb')



class AppContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {games: []}
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
    scrapper.getGame({id: 1})
    .then(game => this.setState({games: this.state.games.concat([game])}))
  }

  render () {
    const {games = []} = this.state
    return (
      <App>
        <MainView>
          {
            games.map((game, i) => <Game key={i} {...game} />)
          }
          <AddGame newGame={this.newGame.bind(this)} />
        </MainView>
      </App>
    )
  }
}

export default AppContainer
