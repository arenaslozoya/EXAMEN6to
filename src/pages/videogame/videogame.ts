import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { VgInfoPage } from '../vg-info/vg-info';
import { SearchPage } from '../search/search';
import { FavPage } from '../fav/fav';

/**
 * Generated class for the VideogamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-videogame',
  templateUrl: 'videogame.html',
})
export class VideogamePage {
videogame = [];
vginfo = VgInfoPage;
searchpage = SearchPage;
favpage = FavPage;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
      .subscribe(data => {
        console.log(JSON.stringify(data, null, 3));
        if (data.hasOwnProperty('list_ads')) {
          this.videogame = data['list_ads'];
        }
      },
        error => {
          console.log(JSON.stringify(error));
        });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideogamePage');
  }
  VerVG(videogame) {
  this.navCtrl.push(this.vginfo, { videogame: videogame });
}
  buscar() {
    this.navCtrl.push(this.searchpage, { mascota: this.videogame });
  }
  favoritos() {
    this.navCtrl.push(this.favpage, { mascota: this.videogame });
  }
}
