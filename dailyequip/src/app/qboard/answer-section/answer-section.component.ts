import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/app/core/quiz.service";
import { Input } from "@angular/core";

@Component({
  selector: 'app-answer-section',
  templateUrl: './answer-section.component.html',
  styleUrls: ['./answer-section.component.scss']
})
export class AnswerSectionComponent implements OnInit {
  @Input() Answers: any;
  @Input() CorrectAnswer: any;
  answers:any;
  constructor(public apires: QuizService) { }
  ngOnInit() {
    this.answers = this.Answers;
    console.log('Answers', this.Answers);
  }
}
