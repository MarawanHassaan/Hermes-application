import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite, /*SQLiteObject*/ } from '@ionic-native/sqlite';
import { MyApp } from './app.component';
import { App } from 'ionic-angular';
 //import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PoiPage } from '../pages/poi/poi';
//import { SharedData } from '../pages/home/shareddata';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { ReservationPage } from '../pages/reservation/reservation';
import { MorePage } from '../pages/more/more';
import { Search2Page } from '../pages/search/search2';
import { Search3Page } from '../pages/search/search3';
import { Poi2Page} from '../pages/poi/poi2';
import { SlidePage } from '../pages/more/slide';
import { CarPage } from '../pages/more/car';
import { AtacPage } from '../pages/more/atac';
import { MetroPage } from '../pages/more/metro';
import { UberPage } from '../pages/more/uber';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { DatashareProvider } from '../providers/datashare/datashare';

@NgModule({
  declarations: [
    //FormsModule,
    MyApp,
    MorePage,
    ReservationPage,
    PoiPage,
    Poi2Page,
    CarPage,
    AtacPage,
    MetroPage,
    UberPage,
    SlidePage,
    SearchPage,
    Search2Page,
    Search3Page,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    //HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollPadding: false,
      scrollAssist: false,
      autoFocusAssist: false
  }),
    IonicStorageModule.forRoot()
  ],
bootstrap: [IonicApp/*, SharedData*/],
  entryComponents: [
    MyApp,
    PoiPage,
    ReservationPage,
    MorePage,
    Search2Page,
    Search3Page,
    SlidePage,
    CarPage,
    AtacPage,
    MetroPage,
    UberPage,
    SearchPage,
    TabsPage,
    Poi2Page,
  ],
  providers: [
    StatusBar,
    SQLite,
    SplashScreen,
    AlertController,
    App,
    DatashareProvider,
    //PoiPage,
    //HomePage,
    //SharedData,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
