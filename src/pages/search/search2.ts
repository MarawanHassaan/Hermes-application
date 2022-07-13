import {Component, ViewChild, ElementRef, OnInit, ChangeDetectorRef} from '@angular/core';
import { DatashareProvider } from '../../providers/datashare/datashare';
import { NavController } from "ionic-angular";
import { Search3Page } from './search3';

declare var google;

@Component({
  selector: 'page-seach2',
  templateUrl: 'search2.html'
})
export class Search2Page implements OnInit {

  mapDisplaying = false;
  currentService = '';
  footDirections;
  carDirections;
  busDirections;

  foot = this.service.foot;
  car = this.service.car;
  bus = this.service.bus;
  taxi = this.service.taxi;

  sortingType = "Time";
  uberTime;
  uberDistance;
  uberCost;
  myTaxiTime;
  myTaxiDistance;
  myTaxiCost;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  start = this.service.start;
  end = this.service.end;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;

  constructor(public service: DatashareProvider, public navCtrl: NavController, private cd: ChangeDetectorRef){ }

  pushPage() {

    if (this.start == "Your location") {
      this.start = "Via Ariosto, 25";
    }

    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.service.setData(this.foot, this.car, this.bus, this.taxi, this.start, this.end);
    this.navCtrl.push(Search3Page);
  }

  ionViewDidLoad(){
    this.initMap();
  }

  ngOnInit() {
    this.calculateRoute();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 17,
      center: {lat: 41.890940, lng: 12.503780}
    });

    this.directionsDisplay.setMap(this.map);
  }

  //Note: possible travel modes: DRIVING, WALKING, BICYCLING, TRANSIT
  calculateAndDisplayRoute(travelMode) {

    if (this.start == "Your location") {
      this.start = "Via Ariosto, 25";
    }

    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: travelMode
    }, (response, status) => {
      if (status === 'OK') {
        this.directionsDisplay.setDirections(response);
        this.cd.detectChanges();
        console.log(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  calculateRoute() {

    if (this.start == "Your location") {
      this.start = "Via Ariosto, 25";
    }

    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'WALKING'
    }, (response, status) => {
      if (status === 'OK') {
        this.footDirections = response;
        this.cd.detectChanges();
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
    }, (response, status) => {
      if (status === 'OK') {
        this.carDirections = response;

        //Evaluate uber and taxi performances
        this.uberDistance = this.carDirections.routes[0].legs[0].distance.text;
        var tempDistance =  Number(this.uberDistance.replace(/[^0-9\.]+/g,""));
        this.uberDistance = (tempDistance + tempDistance/10).toFixed(2);
        this.myTaxiDistance = (tempDistance + tempDistance/7).toFixed(2);
        this.uberTime = this.carDirections.routes[0].legs[0].duration.text;
        var tempTime = Number(this.uberTime.replace(/[^0-9\.]+/g,""));
        this.uberTime = (tempTime + tempTime/10).toFixed(0);
        this.myTaxiTime = (tempTime + tempTime/7).toFixed(0);
        this.uberCost = ((this.uberTime * 0.60) + 3).toFixed(1);
        this.myTaxiCost = ((this.myTaxiTime * 0.50) + 2).toFixed(1);

        this.cd.detectChanges();
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'TRANSIT'
    }, (response, status) => {
      if (status === 'OK') {
        this.busDirections = response;
        this.cd.detectChanges();
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  displayRoute(travelMode) {

    if (this.start == "Your location") {
      this.start = "Via Ariosto, 25";
    }

    if (travelMode == 'WALKING') {
      this.directionsService.route({
        origin: this.start,
        destination: this.end,
        travelMode: 'WALKING'
      }, (response, status) => {
        if (status === 'OK') {
          this.footDirections = response;

          this.directionsDisplay.setDirections(this.footDirections);
          this.currentService = 'WALKING';
          this.cd.detectChanges();

        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
    if (travelMode == 'DRIVING') {
      this.directionsService.route({
        origin: this.start,
        destination: this.end,
        travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          this.carDirections = response;

          this.directionsDisplay.setDirections(this.carDirections);
          this.currentService = 'DRIVING';
          this.cd.detectChanges();

        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
    if (travelMode == 'TRANSIT') {
      this.directionsService.route({
        origin: this.start,
        destination: this.end,
        travelMode: 'TRANSIT'
      }, (response, status) => {
        if (status === 'OK') {
          this.busDirections = response;

          this.directionsDisplay.setDirections(this.busDirections);
          this.currentService = 'TRANSIT';
          this.cd.detectChanges();

        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    }
    this.mapDisplaying = !this.mapDisplaying;
  }

  segmentChanged($event) {
    this.sortingType = $event.value;
    this.cd.detectChanges();
  }

  swapFromAndTo() {
    var temp = this.start;
    this.start = this.end;
    this.end = temp;

    if(!this.mapDisplaying) this.calculateRoute();
    else this.calculateAndDisplayRoute(this.currentService);
  }

  useGeolocalization() {
    this.start = "Your location"
    this.cd.detectChanges();
  }

  changeSearchView() {
    this.mapDisplaying=!this.mapDisplaying;
    this.cd.detectChanges();
  }
}
