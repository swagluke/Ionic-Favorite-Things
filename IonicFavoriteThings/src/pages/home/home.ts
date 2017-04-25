import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from "angularfire2";
import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public favoriteColor: string
  public favoriteNumber = 0
  constructor(private af: AngularFire) {

  }

  ngOnInit(): void {
    firebase.database().ref().child("color").on("value",
      (snapshot: firebase.database.DataSnapshot) => {
        this.favoriteColor = snapshot.val();
      })
    firebase.database().ref().child("number").on("value",
      (snapshot: firebase.database.DataSnapshot) => {
        this.favoriteNumber = snapshot.val();
      })
  }

  setColor(selectedColor: string) {
    console.log("TODO: Set the color in Firebase to " + selectedColor);
    firebase.database().ref().child("color").set(selectedColor);
  }

  changeNumberby(amount: number) {
    this.setNumberInFirebase(amount + this.favoriteNumber);
  }

  setNumberInFirebase(newValue: number) {
    firebase.database().ref().child("number").set(newValue);
  }

}
