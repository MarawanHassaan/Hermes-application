import {Component, OnInit} from '@angular/core';
import { DatashareProvider } from '../../providers/datashare/datashare';
//import { NavController } from "ionic-angular";

@Component({
  selector: 'page-poi2',
  templateUrl: 'poi2.html'
})
export class Poi2Page implements OnInit {

  selTab = '';
  food = this.service.food;
  drink = this.service.drink;
  night = this.service.night;
  museum = this.service.museum;

  constructor(public service: DatashareProvider){}

  ngOnInit() {
    if (this.food) {
      this.selTab = 'food';
    } else if (this.drink) {
      this.selTab = 'drink';
    } else if (this.night) {
      this.selTab = 'night';
    } else if (this.museum) {
      this.selTab = 'museum';
    }
  }
}
