import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  constructor(private mainService : MainService) { }

  ngOnInit(){
  }
  onsubmit(textval: any){
    console.log (textval);
    this.mainService.setInputEvent(textval);
  }
  
}
