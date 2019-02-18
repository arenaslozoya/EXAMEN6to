import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaptopPage } from './laptop';

@NgModule({
  declarations: [
    LaptopPage,
  ],
  imports: [
    IonicPageModule.forChild(LaptopPage),
  ],
})
export class LaptopPageModule {}
