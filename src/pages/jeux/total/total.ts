import { Component } from "@angular/core";
import { NavParams } from "ionic-angular";

@Component({
    selector:'page-total',
    templateUrl:'total.html'
})
export  class TotalPage{

    name: string;

    constructor(private navParams: NavParams) {}

    ngOnInit(){

        this.name = this.navParams.get('userName');
    }

}