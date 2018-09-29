import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private items = [{
    name: 'asd',
    price: 100,
    amount: 7

  }, {
    name: 'fg',
    price: 101,
    amount: 9

  }, {
    name: 'hgfnbfg',
    price: 9,
    amount: 1
  }
];
  private newItem = {
    name: '',
    price: '',
    amount: ''
  };
  constructor() { }
  get() {
    return this.items;
  }

  add(item) {
    this.items.push(item);
    this.newItem = {
      name: '',
      price: '',
      amount: ''
  };
}

  delete(name) {
    const arr = this.items.filter(e => e.name !== name);
    this.items = arr;
  }

 update(item) {
   for (const i in this.items) {
     if (this.items[i].name === item.name) {
       this.items[i] = item;
     }
   }
 }
}
