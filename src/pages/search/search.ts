import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InfoPage } from '../info/info';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
mascota = [];
items = [];
mascotainfo = InfoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mascota = this.navParams.get('mascota');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  getItems(ev: any){
    console.log(ev.target.value);
    this.items = this.mascota.filter( mascota=> {
      return mascota.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase())
     
    })
  }
  verMascota(item){
    this.navCtrl.push(this.mascotainfo, { mascota: item});
  }

}
