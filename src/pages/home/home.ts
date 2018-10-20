import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JeuxPage } from '../jeux/jeux';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class HomePage {
  flip: string = 'inactive';
  answer:boolean = false;
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
    this.answer = true;
  }
  constructor(public navCtrl: NavController) {
    
  }
  onGoToJeux(){
    this.navCtrl.push(JeuxPage);
  }
}
