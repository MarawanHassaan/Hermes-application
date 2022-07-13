import {ChangeDetectorRef, Component} from '@angular/core';
import { NavController, Events, ToastController } from 'ionic-angular';
import { DatashareProvider } from '../../providers/datashare/datashare';
import {ReservationPage} from "../reservation/reservation";

@Component({
  selector: 'page-search3',
  templateUrl: 'search3.html'
})
export class Search3Page {

  foot: boolean = true;
  car: boolean = true;
  bus: boolean = true;
  taxi: boolean = true;
  date: any;
  time: any;
  phone: any;
  email: any;

  start = this.service.start;
  end = this.service.end;

  constructor(public navCtrl: NavController, public service: DatashareProvider, private cd: ChangeDetectorRef) { }

  pushPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.service.setData(this.foot, this.car, this.bus, this.taxi, this.start, this.end);
    this.navCtrl.push(ReservationPage);
  }

  useLastDetails() {
    this.date = "2019-06-24";
    this.date = new Date().toISOString();
    this.time = "21:00";
    this.phone = "+39 3381226554";
    this.email = "l.balzoni@gmail.com";
    this.cd.detectChanges();
  }
}
