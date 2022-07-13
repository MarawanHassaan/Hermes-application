import { Component, ViewChild } from '@angular/core';
import { NavController, Select, Events, ToastController } from 'ionic-angular';
import { Poi2Page } from './poi2';
import { DatashareProvider } from '../../providers/datashare/datashare';

@Component({
  selector: 'page-poi',
  templateUrl: 'poi.html'
})
export class PoiPage {
  @ViewChild('mySelect1') selectRef1: Select;
  @ViewChild('mySelect2') selectRef2: Select;


  food: boolean = true;
  drink: boolean = true;
  night: boolean = true;
  museum: boolean = true;
  start: string;
  end: string;

  constructor(public navCtrl: NavController, public service: DatashareProvider, public events: Events, private toastCtrl: ToastController) { }

  pushPage() {

    if (this.start == "Your location") {
      this.start = "Via Ariosto, 25";
    }

    if(!this.start || this.start == '') {
      //Show error toast
      let toast = this.toastCtrl.create({
        message: 'Please select an address',
        duration: 3000,
        position: 'bottom',
        cssClass: "custom-class"
      });
      toast.present();
    } else if (this.food == false && this.drink == false && this.night == false && this.museum == false) {
      //Show error toast
      let toast = this.toastCtrl.create({
        message: 'Select at least one service',
        duration: 3000,
        position: 'bottom',
        cssClass: "custom-class"
      });
      toast.present();
    } else {
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.service.setData2(this.food, this.drink, this.night, this.museum, this.start, this.end);
      this.navCtrl.push(Poi2Page);
    }
  }

  useGeolocalization() {
    this.start = "Your location"
  }

}
