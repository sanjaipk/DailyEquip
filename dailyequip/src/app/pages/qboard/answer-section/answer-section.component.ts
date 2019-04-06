import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/app/core/quiz.service";
import { Input, SimpleChanges, OnChanges } from "@angular/core";

@Component({
  selector: 'app-answer-section',
  templateUrl: './answer-section.component.html',
  styleUrls: ['./answer-section.component.scss']
})
export class AnswerSectionComponent implements OnInit, OnChanges {
  @Input() Answers: any;
  @Input() CorrectAnswer: any;
  answers:any;
  constructor(public apires: QuizService) { }
  ngOnInit() {
   // this.answers = this.Answers;
   // console.log('Answers', this.Answers);
  }
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes);
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      if(cur != prev) {
        this.answers = chng.currentValue;
        console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }
}
}
