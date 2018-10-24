import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { QuizService } from "src/app/core/quiz.service";
import { OnChanges } from "@angular/core";
import { SimpleChanges } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {

  title = 'angularanimation01';
  toState = 'state1';
  hdrObj;
  QObj;
  AObj;
  CorAnswer;
  currentIdx;
  listOfIds = [];

  changeState(state: any) {
    this.toState = state;
  }

  constructor(private api: QuizService,
    private cd:ChangeDetectorRef) {
    this.currentIdx = 0;
  }

  prev() {
    console.log(this.currentIdx < this.listOfIds.length);
    if (this.currentIdx > 0) {
      this.currentIdx--;
      this.fetchapi(this.listOfIds[this.currentIdx].id);
    }
    this.api.currentSelection = '';
  }

  next() {
    console.log(this.currentIdx,this.listOfIds);
    if (this.currentIdx < this.listOfIds.length) {
      this.currentIdx++;
      this.fetchapi(this.listOfIds[this.currentIdx].id);
    }
    this.api.currentSelection = '';
  }

  ngOnInit() {
    // throw new Error("Method not implemented.");
    // this.api.initFetches();

    this.api.getQuestionIds().subscribe((data: [any]) => {
      console.log('response ids', data);
      data.forEach(element => {
        this.listOfIds.push(element);
      });
      this.fetchapi(data[this.currentIdx].id);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes',changes);
  }

  private fetchapi(idx){
      this.api.getQuestion(idx).subscribe((data: {}) => {
        console.log('response single questions', data);
        this.api.apiresponses = data;
        this.hdrObj = data['Heading'];
        this.QObj = data['Question'];
        this.AObj = data['Answers'];
        this.CorAnswer = data['CorrectOption'];
        console.log('input fields', this.hdrObj, this.QObj, this.AObj);
        this.cd.detectChanges();
      });
      
  }
  /*
  Answers: Array(4)
  CorrectOption: "3"
  Heading:
  text: "f5e05a71-940b-43b0-a808-467760b2d640"
  __proto__: Object
  Question:
  image: ""
  text: "question"
  __proto__: Object
  */
}
