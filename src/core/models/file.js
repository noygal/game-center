import {observable, action, computed} from 'mobx'
const fs = require('fs-extra')

export class File {
  @observable path = ''
  @observable stats = {}

  @action loadStats () {
    return fs
  }
}
