import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { trigger, state, style, transition, animate, useAnimation } from "@angular/animations";
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-qboard',
  templateUrl: './qboard.component.html',
  styleUrls: ['./qboard.component.scss'],
  animations: [
    // trigger('changeState', [
    //     state('state1', style({
    //       backgroundColor: 'green',
    //       transform: 'scale(1)'
    //     })),
    //     state('state2', style({
    //       backgroundColor: 'red',
    //       transform: 'scale(1.5)'
    //     })),
    //     transition('*=>state1', animate('300ms')),
    //     transition('*=>state2', animate('2000ms'))
    // ]),
    trigger('bounce', [transition('* <=> *', useAnimation(bounce))])
  ]
})
export class QboardComponent implements OnInit {
  bounce: any;
  @Input() currentState;
  switch: boolean;
  
  constructor() { 
    this.switch = false;
  }

  switchState() {
    this.switch = !this.switch;
  }

  ngOnInit() {
  }

}
