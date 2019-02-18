import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { LInfoPage } from '../l-info/l-info';
import { SearchPage } from '../search/search';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
import { FavPage } from '../fav/fav';

/**
 * Generated class for the LaptopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laptop',
  templateUrl: 'laptop.html',
})
export class LaptopPage {
laptops = [];
linfopage = LInfoPage;
searchpage = SearchPage;
favpage = FavPage;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe(data => 
      {
      console.log(JSON.stringify(data, null ,3));
      if(data.hasOwnProperty('list_ads')){
        this.laptops = data['list_ads'];
      }
      },
      error => {
        console.log(JSON.stringify(error));
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaptopPage');
  }
  VerLaptop(laptop) {
    this.navCtrl.push(this.linfopage, { laptop: laptop });
  }
  buscar(){
    this.navCtrl.push(this.searchpage, { mascota: this.laptops});
  }
  favoritos(){
    this.navCtrl.push(this.favpage, { mascota: this.laptops});
  }
}

