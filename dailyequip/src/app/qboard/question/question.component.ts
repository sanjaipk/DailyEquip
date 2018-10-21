import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/app/core/quiz.service";
import { Input } from "@angular/core";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
question: any;
switch: boolean;
@Input() Questions: any;
  constructor(private apiservice: QuizService) { 
    this.switch = false;
  }

  ngOnInit() {

  }

  switchState() {
    this.switch = !this.switch;
  }

}
