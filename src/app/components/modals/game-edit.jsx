import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import FolderOpen from 'material-ui/svg-icons/file/folder-open'
import RaisedButton from 'material-ui/RaisedButton'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

const GameEditModal = props => {
  const actions = [
    <FlatButton label='Cancel' primary={false} onTouchTap={console.log} />,
    <FlatButton
      label='Submit'
      primary
      keyboardFocused={false}
      onTouchTap={console.log} />
  ]
  return (
    <Dialog
      actions={actions}
      modal
      contentStyle={{width: '100%'}}
      autoScrollBodyContent
      {...props}>
      <div>
        <TextField
          id='text-field-default'
          defaultValue='Default Value'
          fullWidth
          floatingLabelText='file location' />
        <FolderOpen />
      </div>
      <input type="file" webkitdirectory onChange={(eventw) => {debugger}} />
    </Dialog>
  )
}

export default GameEditModal
