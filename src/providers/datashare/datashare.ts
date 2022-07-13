import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
  //{providedIn: 'root',}
)

export class DatashareProvider {

  public foot: any;
  public car: any;
  public bus: any;
  public taxi: any;
  public start: any;
  public end: any;
  public food: any;
  public drink: any;
  public night: any;
  public museum: any;

  constructor(public http: HttpClient) {
    console.log('Hello DatashareProvider Provider');
    }
    setData(foot:any, car:any, bus:any, taxi:any, start: any, end: any) {
      this.foot = foot;
      this.car = car;
      this.bus = bus;
      this.taxi = taxi;
      this.start = start;
      this.end = end;
    }
    setData2(food:any, drink:any, night:any, museum:any, start: any, end: any) {
      this.food = food;
      this.drink = drink;
      this.night = night;
      this.museum = museum;
      this.start = start;
      this.end = end;
    }
}
