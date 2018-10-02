import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/app/core/quiz.service";

@Component({
  selector: 'app-answer-section',
  templateUrl: './answer-section.component.html',
  styleUrls: ['./answer-section.component.scss']
})
export class AnswerSectionComponent implements OnInit {
  selectedOption: any;

  answers:any
  constructor(public apires:QuizService) { }

  ngOnInit() {
    this.answers = this.apires.apiresponses.Answers;
  }

}
