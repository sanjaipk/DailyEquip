import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/app/core/quiz.service";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
question: any
  constructor(private apiservice: QuizService) { }

  ngOnInit() {
    this.question = this.apiservice.apiresponses.Question;
  }

}
