import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  apiresponses: any;
  currentSelection: any;
  globalStyle: string;
  private tagMap = {};
  listOfIds = [];

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
    this.globalStyle = 'btn answerButton btn-danger';
  }

  getQuestion(id) {
    console.log('question id requested:', id);
    return this.httpClient.get(Constants.API.getQ + '/GetQuestionDetail-DailyEquip?qid=' + id);
  }

  getQuestionIds() {
    return this.httpClient.get(Constants.API.getIds + '/GetAppQuestionsIds-DailyEquip');
  }
  
  private initMap() {
    this.apiresponses.Answers.forEach(answer => {
      this.tagMap[answer.optionId] = answer;
    });
  }

  getAnswer(OptionId) {
    return this.tagMap[OptionId];
  }

}
