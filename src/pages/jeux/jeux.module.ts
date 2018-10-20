import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JeuxPage } from './jeux';

@NgModule({
  declarations: [
    JeuxPage,
  ],
  imports: [
    IonicPageModule.forChild(JeuxPage),
  ],
})
export class JeuxPageModule {}
