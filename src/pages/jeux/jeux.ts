import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TotalPage } from './total/total';


@Component({
  selector: 'page-jeux',
  templateUrl: 'jeux.html',
})
export class JeuxPage {

  constructor(private navCtrl: NavController) {}
  onLoadAnswer(name: string){
    if (name != '3600'){

      name = "Faux! va réviser!!"
    }else{

      name="Bravo champion!"
    }

    this.navCtrl.push(TotalPage, {userName: name});
    
  }
}
