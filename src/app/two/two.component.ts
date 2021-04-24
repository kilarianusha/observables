import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  dispalyval ='';
  constructor( private mainService : MainService) { }

  ngOnInit(): void {
    this.mainService.getInputEvent().subscribe((textval) =>{
      console.log (textval)
      this.dispalyval=textval;
    })
  
  }


}
