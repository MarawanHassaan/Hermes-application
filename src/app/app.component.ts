import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, /*SQLiteObject*/ } from '@ionic-native/sqlite';
import { TabsPage } from '../pages/tabs/tabs';
import { SlidePage } from '../pages/more/slide';
//import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SlidePage;
  //rootPage:any = TabsPage;
  //pages: Array<{ title: string, component: any }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, sqlite: SQLite) {

      splashScreen.show();
/*
      sqlite.create({
        name: 'data.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
      
      
          db.executeSql('create table Driver(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name CHAR, Age DECIMAL, Phone NUMERIC, Car CHAR, Targa CHAR)', )
          db.executeSql('insert into Driver VALUES (?,?,?,?,?,?)', [1, 'Mark Anderson', 31, 3468127946, 'Mercedes E Class', 'EL268ZP'])
          db.executeSql('insert into Driver VALUES (?,?,?,?,?,?)', [2, 'Paul Mcfly', 29, 3529876149, 'Mercedes C Class', 'BC658NE'])
          db.executeSql('insert into Driver VALUES (?,?,?,?,?,?)', [3, 'Ronald Watson', 35, 3526981782, 'Mercedes S Class', 'CZ951IL'])
          db.executeSql('insert into Driver VALUES (?,?,?,?,?,?)', [4, 'Gerard Hoffman', 43, 3952684794, 'Mercedes E Class', 'DA158TY'])
          db.executeSql('insert into Driver VALUES (?,?,?,?,?,?)', [5, 'Hendrik Le', 37, 3592687195, 'Mercedes C Class', 'DH298LJ'])
          db.executeSql('create table Reservation("From" CHAR, "To" CHAR, Passengers DECIMAL, "date" DATE, "time" DATETIME)', )

            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e));
      
        })
        .catch(e => console.log(e));

      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });*/
  }
}
