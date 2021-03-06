import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor() { }
  
  create(entry) {
    return new Promise((resolve, reject)=>{
      let post_key = firebase.database().ref().child('abcabc').push().key;

      firebase.database().ref('notes/'+post_key+'/').set(entry)
      .then(
      resp=>{
        resolve("OK");
      },err=>{
        reject(err);
      })
    })
  }
}
