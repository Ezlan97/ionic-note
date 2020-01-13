import { Component } from '@angular/core';

//import firebase service
import {FirebaseService} from '../service/firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data:any={};

  constructor(public fb:FirebaseService,) {}

  createActivity() {
    let t=new Date();
    this.data.zztimestamp=t.getTime();

    this.fb.create(this.data)
      .then(
        resp=>{
          alert("Note Has Been Saved");
          this.data.title="";
          this.data.details="";
          this.data.reminder="";
        }, err=> {
          console.log("ERROR", err);
        }
      )
  }
  
}
