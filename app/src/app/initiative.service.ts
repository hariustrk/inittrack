import { Injectable } from '@angular/core';
import { Initiativelist } from './initiativelist';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InitiativeService {

  constructor(private http: HttpClient) { }
  dataUrl = 'http://localhost:3000'; //localtest
  
  getInit() : Observable<Initiativelist> {    

    console.log("get initiative");
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.get<Initiativelist>( this.dataUrl + "/initiative");

  }
  setInit(name:string,init:number): Observable<any> {
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.get<Initiativelist>( this.dataUrl + "/addplayer?name="+name+"&init="+init);
  }
  clearInit(): Observable<any> {
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.get<Initiativelist>( this.dataUrl + "/remove?all=true");
  }
  removePlayer(name:string): Observable<any> {
    const options = {headers: {'Content-Type': 'application/json'}};
    return this.http.get<Initiativelist>( this.dataUrl + "/remove?name="+name);
  }
}
