import { PlanetService } from './../../providers/planet/planet-service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { JeuxPage } from '../jeux/jeux';
import { PlanetInfo } from '../../app/planet-info';



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
      transition('active => inactive', animate('300ms ease-out')),
      transition('inactive => active', animate('1000ms ease-in'))
    ]),

    trigger('fade', [
      state('void', style({ opacity: 0})),

      transition(':enter, :leave', [
     
        animate(4000)
      ]),

    ]),
    trigger('stag', [
      state('void', style({ opacity: 0})),
      transition(':enter , :leave', [
         
          animate('2s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
         
      ])
    ])
  

  ]
})
export class HomePage {

  myStyles = {
 
    'background-color': '',
    }

  flip: string = 'inactive';
  answer:boolean = false;
  index = 0;
  active:number =0;
  onSubmit(data:any,userResponse:number){
    if(userResponse == this.index){
    this.answer = true;
    this.myStyles["background-color"] = (this.myStyles["background-color"] == '' && this.answer == true) ? 'green' : '';
    this.toggleFlip();
   
    
    setTimeout(() => {

      this.toggleFlip();
      this.myStyles["background-color"]= '';
      this.active += 1;
       
      
      
      
     }, 4000);
    
   
    }else{
      this.answer = false;
      this.myStyles["background-color"] = (this.myStyles["background-color"] == '' && this.answer == false) ? 'red' : '';
      this.toggleFlip();
      setTimeout(() => {

        this.toggleFlip();
        this.myStyles["background-color"]= '';
         
         
       }, 4000);
    }
  }
  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
     
  }
  private service:PlanetService;
  public list:PlanetInfo[];
  constructor(public navCtrl: NavController,param_service:PlanetService) {
    this.service = param_service;
    this.list = [];
    
    
  }
 
  checkEnigme(index:number){
     while(index < 4){
       return true
     }
  }
  checkResponse(index:number){
    while(index < 1){
      return true
    }
 }
  public ngOnInit():void {
    //this.list = this.service.getTravels();
    this.service.getPlanets()
      .subscribe(resTravelData => this.list = resTravelData);
      console.log(this.list);
      
  }
   
}

