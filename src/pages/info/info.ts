import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
mascota = {};
imgs = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fav: FavoritosProvider) {
    
    this.mascota = this.navParams.get('mascota');
    
    if (this.mascota.ad.hasOwnProperty('images')) {
      this.imgs = this.mascota.ad.images;
  }


}
  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  favoritos(mascota) {
    this.fav.addFavoritos(mascota);
  }
}
