import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the LInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-l-info',
  templateUrl: 'l-info.html',
})
export class LInfoPage {
laptop = {};
imgs = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fav: FavoritosProvider) {
    this.laptop = this.navParams.get('laptop');

    if(this.laptop.ad.hasOwnProperty('images')){
      this.imgs = this.laptop.ad.images;
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LInfoPage');
  }
  favoritos(laptop) {
    this.fav.addFavoritos(laptop);
  }
}
