import { Component, ViewChild } from '@angular/core';
import { NavController, Select, Events, ToastController, LoadingController } from 'ionic-angular';
import { Search2Page } from './search2';
import { DatashareProvider } from '../../providers/datashare/datashare';

declare var google;

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  @ViewChild('mySelect1') selectRef1: Select;
  @ViewChild('mySelect2') selectRef2: Select;

  foot: boolean = true;
  car: boolean = true;
  bus: boolean = true;
  taxi: boolean = true;
  start: string;
  end: string;
  loading: any;

  directionsService;

  constructor(public navCtrl: NavController,
              public service: DatashareProvider,
              public events: Events,
              private toastCtrl: ToastController,
              public loadingController: LoadingController) { }

  pushPage() {

    if (this.start == "Your location") {
      this.start = "Via Ariosto, 25";
    }

    this.loading = this.loadingController.create({
      content: 'Please wait...'
    });
    this.loading.present();

    this.evaluateAddresses(function() {
      this.redirectPage();
      this.loading.dismiss();
    }.bind(this));
  }

  useGeolocalization() {
    this.start = "Your location"
  }

  redirectPage() {
    if(this.foot == false && this.car == false && this.bus == false && this.taxi == false) {
      //Show error toast
      let toast = this.toastCtrl.create({
        message: 'Select at least one service',
        duration: 3000,
        position: 'bottom',
        cssClass: "custom-class"
      });
      toast.present();
      this.loading.dismiss();

    } else {
      //push another page onto the history stack
      //causing the nav controller to animate the new page in
      this.service.setData(this.foot, this.car, this.bus, this.taxi, this.start, this.end);
      this.navCtrl.push(Search2Page);
    }
  }

  evaluateAddresses(callback) {
    this.directionsService = new google.maps.DirectionsService;

    if(!this.start || this.start == '' || this.end == '' || !this.end) {
      //Show error toast
      let toast = this.toastCtrl.create({
        message: 'Please fill starting and destination addresses',
        duration: 3000,
        position: 'bottom',
        cssClass: "custom-class"
      });
      toast.present();
      this.loading.dismiss();
    } else {
      // Geocode the address
      this.directionsService.route({
        origin: this.start,
        destination: this.end,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          callback();
        } else {
          //Show error toast
          let toast = this.toastCtrl.create({
            message: 'Address not valid',
            duration: 3000,
            position: 'bottom',
            cssClass: "custom-class"
          });
          toast.present();
          this.loading.dismiss();
        }
      });
    }

  }
}
