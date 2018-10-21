import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { QuizService } from "src/app/core/quiz.service";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {
  selectedOption: any;
  buttonStyle: string;
  @Input() answer: any;
  showDescription: boolean;
  style: string;

  constructor(public quizService: QuizService) { }

  ngOnInit() {
    console.log(this.answer);
    this.showDescription = false;
    this.buttonStyle = this.chooseButtonStyle();
    this.CalculateShowDescription();
    
  }

  selectedAnswer(optionNumber) {
    this.showDescription = true;
    this.selectedOption = this.answer;
    this.quizService.currentSelection = this.answer;
    this.buttonStyle = this.chooseButtonStyle();
    this.CalculateShowDescription();
   
  }

  private chooseButtonStyle() {
    console.log(this.quizService.apiresponses.CorrectOption);
   
    if (this.quizService.currentSelection) {
     
      if (this.quizService.currentSelection.optionId === Number(this.quizService.apiresponses.CorrectOption)) {
        this.quizService.globalStyle = 'btn answerButton btn-info';
        this.style = 'localStyle';
        return 'btn answerButton btn-success';
      }
      if (this.quizService.currentSelection.optionId === this.answer.optionId) {
        this.style = 'localStyle';
        return 'btn answerButton btn-warning';
      }  
        this.style = 'globalStyle';
        return 'btn answerButton btn-danger';
    } else {
      this.style = 'globalStyle';
      return 'btn answerButton btn-danger';
    }
  }
  private CalculateShowDescription() {
    if (this.quizService.currentSelection) {
      return this.quizService.currentSelection.optionId === this.answer.optionId;
    } else {
      return false;
    }
  }
}
