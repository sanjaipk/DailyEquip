import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/app/core/quiz.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
question: any;
switch: boolean;
  constructor(private apiservice: QuizService) { 
    this.switch = false;
  }

  ngOnInit() {
    this.question = this.apiservice.apiresponses.Question;
  }

  switchState() {
    this.switch = !this.switch;
  }

}
