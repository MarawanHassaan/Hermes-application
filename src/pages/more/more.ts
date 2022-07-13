import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SlidePage } from '../more/slide';
import { AtacPage } from './atac';
import { MetroPage } from './metro';
import { UberPage } from './uber';
import { CarPage } from './car';


@Component({
  templateUrl: 'more.html'
})
export class MorePage {
  constructor(public navCtrl: NavController){}
   goToSlidePage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(SlidePage);
   };
   goToCarPage() {
    this.navCtrl.push(CarPage);
   }; 
   goToAtacPage() {
    this.navCtrl.push(AtacPage);
   }; 
   goToUberPage() {
    this.navCtrl.push(UberPage);
   };   
   goToMetroPage() {
    this.navCtrl.push(MetroPage);
   };  
  items = [
    'Atac',
    'Metro',
    'Uber/My taxi',
    'Car sharing',   
  ];
   itemSelected(item: string) {
    console.log("Selected Item", item);
  }
}