import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from "angularfire2";
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public favoriteColor: string

  constructor(private af: AngularFire) {

  }

  ngOnInt(): void {
    firebase.database().ref().child("color").on("value", 
    (snapshot: firebase.database.DataSnapshot) => {
      this.favoriteColor = snapshot.val();
    })
  }

  setColor(selectedColor: string) {
    console.log("TODO: Set the color in Firebase to " + selectedColor);
    firebase.database().ref().child("color").set(selectedColor);
  }

}
