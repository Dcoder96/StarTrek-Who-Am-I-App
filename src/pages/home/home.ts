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
      transition('active => inactive', animate('1000ms ease-out')),
      transition('inactive => active', animate('1000ms ease-in'))
    ])
  ]
})
export class HomePage {

  myStyles = {
 
    'background-color': '',
    }

  flip: string = 'inactive';
  answer:boolean = false;
  onSubmit(userResponse:number){
    if(userResponse == 1){
    this.answer = true;
    this.myStyles["background-color"] = (this.myStyles["background-color"] == '' && this.answer == true) ? 'green' : '';
    this.toggleFlip();
    }else{
      this.answer = false;
      this.myStyles["background-color"] = (this.myStyles["background-color"] == '' && this.answer == false) ? 'red' : '';
      this.toggleFlip();
    }
  }
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
     
  }
  constructor(public navCtrl: NavController) {
    
  }
  onGoToJeux(){
    this.navCtrl.push(JeuxPage);
  }
}
