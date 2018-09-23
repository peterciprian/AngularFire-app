import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private newItem = {
    name: '',
    price: '',
    amount: ''
  };
  constructor(private db: AngularFirestore) {
    this.itemsCollection = db.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }
  add(item:Item){
    this.itemsCollection.add(item);
    console.log(item);
  }
}
export interface Item { 
  name: string,
  price: number,
  amount: number
   }
