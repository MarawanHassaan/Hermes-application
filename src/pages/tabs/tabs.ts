import { Component } from '@angular/core';

import { SearchPage } from '../search/search';
import { PoiPage } from '../poi/poi';
import { MorePage } from '../more/more';
import { ReservationPage } from '../reservation/reservation';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SearchPage;
  tab2Root = PoiPage;
  tab3Root = ReservationPage;
  tab4Root = MorePage;

  constructor() {

  }
}
