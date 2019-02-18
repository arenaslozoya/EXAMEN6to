import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { InfoPage } from '../pages/info/info';
import { TabsPage } from '../pages/tabs/tabs';
import { LaptopPage } from '../pages/laptop/laptop';
import { VideogamePage } from '../pages/videogame/videogame';
import { VgInfoPage } from '../pages/vg-info/vg-info';
import { LInfoPage } from '../pages/l-info/l-info';
import { FavPage } from '../pages/fav/fav';
import { SearchPage } from '../pages/search/search';
import { FavoritosProvider } from '../providers/favoritos/favoritos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    TabsPage,
    LaptopPage,
    LInfoPage,
    VgInfoPage,
    VideogamePage,
    FavPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    TabsPage,
    LaptopPage,
    LInfoPage,
    VideogamePage,
    VgInfoPage,
    FavPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
