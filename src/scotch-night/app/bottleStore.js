// @flow
import {observable} from 'mobx'

let index = 0

class BottleStore {
  @observable list = []

  addBottle (item) {
    this.list.push({
      name: item, 
      items: [],
      index
    })
    index++
  }

  removeBottle (item) {
    this.list = this.list.filter((l) => {
      return l.index !== item.index
    })
  }

  addItem(item, name) {
    this.list.forEach((l) => {
      if (l.index === item.index) {
        l.items.push(name)
      }
    })
  }
}


const bottleStore = new BottleStore();
export default bottleStore;
