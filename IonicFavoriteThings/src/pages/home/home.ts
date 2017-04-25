import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  setColor(selectedColor: string) {
    console.log("TODO: Set the color in Firebase to " + selectedColor);
  }

}
