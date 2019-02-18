import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the VgInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vg-info',
  templateUrl: 'vg-info.html',
})
export class VgInfoPage {
vg= {};
imgs = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fav: FavoritosProvider) {
    this.vg = this.navParams.get('videogame');
    
    if(this.vg.ad.hasOwnProperty('images')){
          this.imgs = this.vg.ad.images;
        }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VgInfoPage');
  }
  favoritos(videogame) {
    this.fav.addFavoritos(videogame);
  }
}
