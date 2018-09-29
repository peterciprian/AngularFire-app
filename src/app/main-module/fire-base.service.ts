import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

export interface Item {
  id: number;
  name: string;
  price: number;
  amount: number;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class FireBaseService {
  loginData: {email: string, pass: string} = {
    email: '',
    pass: ''
  };
  user: any;
  itemRef: AngularFireObject<any>;
  item: Observable<Item>;
  newItem = {id: Math.floor( Math.random() * 10000001 ), name: null, price: null, amount: null, image: null};
  tableData: Array<{key: string, values: Item}> = [];

  constructor(protected afAuth: AngularFireAuth, protected db: AngularFireDatabase) {

    this.itemRef = db.object('Items');
    this.itemRef.valueChanges().subscribe(
      values => {
        this.tableData = [];
        // tslint:disable-next-line:forin
        for (const k in values) {
           this.tableData.push({key: k, values: values[k]/*{
            id: values.id,
            name: values.name,
            price: values.price,
            amount: values.amount,
            picture: values.image
           }*/
          });
        }
        console.log(this.tableData[0].values);
      }
    );
  }
  /*login(): void {
    this.afAuth.auth.signInWithEmailAndPassword(
      this.loginData.email,
      this.loginData.pass
    ).then(
      value => console.log(value),
      error => console.error(error)
    );
  }
  loggedIn() {
    this.afAuth.authState.subscribe(
      user => this.user = user,
      error => console.error(error)
    );
  }
*/
  update(row): void {
    // Rámutatok a távoli adatbázisban az adott kulcsú student-re.
    // Erre hívom meg az update metódust, aminek átadom az új adatokat.
    this.db.object('Items/' + row.key).update(row.values);
  }

  delete(key: string): void {
    // Rámutatok a távoli adatbázisban az adott kulcsú student-re.
    // Erre hívom meg a remove metódust.
    this.db.object('Items/' + key).remove();
  }
  add(record: any) {
    // A studnet listát lekérem és bele-pusholom az új rekordot.
    // Ha sikeres választ kaptam a szerverről, kiürítéem az új rekordok objektumát.
    this.db.list('Items').push(record).then(
      r => this.newItem = {id: Math.floor( Math.random() * 1000001 ), name: null, price: null, amount: null, image: null}
    );
  }
}
