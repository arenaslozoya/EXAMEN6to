import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LInfoPage } from './l-info';

@NgModule({
  declarations: [
    LInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LInfoPage),
  ],
})
export class LInfoPageModule {}
