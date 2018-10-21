
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import {map } from "rxjs/operators";
import { PlanetInfo } from '../../app/planet-info';

@Injectable()

export class PlanetService {

  private myHttpService:Http;
  constructor(param_http_service:Http) {
    this.myHttpService = param_http_service;
  }
    public getPlanets():Observable<PlanetInfo[]>{
      return this.myHttpService.get("assets/planet.json").pipe(
        map( 
          (param_response:Response) => {
             return param_response.json() as PlanetInfo[];

          }
        )
      )
   }
}
