import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  notes = [];
  ref = firebase.database().ref('notes/');

  constructor() {
    this.ref.on('value', resp => {
      this.notes = [];
      this.notes = snapshotToArray(resp);
    });
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });

  return returnArr;
};
