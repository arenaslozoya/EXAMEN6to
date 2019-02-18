import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VgInfoPage } from './vg-info';

@NgModule({
  declarations: [
    VgInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(VgInfoPage),
  ],
})
export class VgInfoPageModule {}
