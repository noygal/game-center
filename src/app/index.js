const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./containers/app').default
// const State = require('./state').State
// const Baobab = require('baobab')

const state = null
// new Baobab({
//   games: []
// })

// console.log(state)

// var uid = parseInt(process.env.SUDO_UID);
// // Set our server's uid to that user
// if (uid) process.setuid(uid);
// console.log('Server\'s UID is now ' + process.getuid());

ReactDOM.render(
  React.createElement(App, {state}),
  window.document.getElementById('app')
)
