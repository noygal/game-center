import {observable, computed} from 'mobx'

export class Game {
  @observable name = null
  @observable title = null

  @computed get total () {
    return this.price * this.amount
  }
}
