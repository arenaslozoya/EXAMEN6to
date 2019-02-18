import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideogamePage } from './videogame';

@NgModule({
  declarations: [
    VideogamePage,
  ],
  imports: [
    IonicPageModule.forChild(VideogamePage),
  ],
})
export class VideogamePageModule {}
