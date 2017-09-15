import React from 'react'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

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
