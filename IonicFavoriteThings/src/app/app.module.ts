import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCm1Xcf0efBLksMjKiC6Ryl79OXN7wkSM8",
  authDomain: "ionic-favorite-things.firebaseapp.com",
  databaseURL: "https://ionic-favorite-things.firebaseio.com",
  projectId: "ionic-favorite-things",
  storageBucket: "ionic-favorite-things.appspot.com",
  messagingSenderId: "850712099140"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
