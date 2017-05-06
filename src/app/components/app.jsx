import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import {observable, computed} from 'mobx'

class OrderLine {
  @observable price = 1
  @observable amount = 2

  @computed get total () {
    return this.price * this.amount
  }
}

const x = new OrderLine()

console.log(x.total)

const muiTheme = getMuiTheme(lightBaseTheme, {
  avatar: {
    borderColor: null
  },
  userAgent: process.versions.chrome
})

const App = props => (
  <MuiThemeProvider muiTheme={muiTheme}>
    { props.children }
  </MuiThemeProvider>
)

export default App
