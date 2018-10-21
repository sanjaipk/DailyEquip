import { Component } from '@angular/core';
import { OnInit } from "@angular/core";
import { QuizService } from "src/app/core/quiz.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'angularanimation01';
  toState = 'state1';
  hdrObj;
  QObj;
  AObj;
  CorAnswer;

  changeState(state: any) {
    this.toState = state;
  }

constructor(private api:QuizService){

}


  ngOnInit() {
    // throw new Error("Method not implemented.");
    this.api.initFetches();

    this.api.getQuestionIds().subscribe( (data : [any]) => {
      console.log('response ids', data);
      data.forEach(element => {
        // this.listOfIds = element;
      });
      this.api.getQuestion(data[1].id).subscribe( (data : {}) => {
        console.log('response single questions', data);
        this.api.apiresponses = data;
        this.hdrObj = data['Heading'];
        this.QObj = data['Question'];
        this.AObj = data['Answers'];
        this.CorAnswer = data['CorrectOption'];
        console.log('input fields', this.hdrObj,  this.QObj,this.AObj );
      });
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
