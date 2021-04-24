import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private InputEvent : Subject <string> = new Subject();
  setInputEvent(textinput:string):void{
    this.InputEvent.next(textinput);

  }
 getInputEvent(): Observable<string>{
   return this.InputEvent.asObservable();
 }
 
  constructor() { }
}
