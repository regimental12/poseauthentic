import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-couples',
  templateUrl: 'couples.html'
})
export class CouplesPage {
  flipped: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        
  }

  
}
