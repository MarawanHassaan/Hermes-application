import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { App } from 'ionic-angular';

@Component({
  templateUrl: 'slide.html'
})

export class SlidePage {
  constructor(public appCtrl: App) { }
  pushPage() {
    this.appCtrl.getRootNav().push(TabsPage);
  }
  slides = [
    {
      title: "In the 1st tab",
      description: "You can find all your <b>reservation</b> with your driver and the option to call him or see more information about him.",
      image: "assets/img/1.png",
    }
  ];
}