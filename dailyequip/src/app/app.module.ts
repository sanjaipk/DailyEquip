import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QboardComponent } from './qboard/qboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ScoresComponent } from "src/app/header/scores/scores.component";
import { QuestionComponent } from "src/app/qboard/question/question.component";
import { AnswerComponent } from "src/app/qboard/answer-section/answer/answer.component";
import { AnswerSectionComponent } from "src/app/qboard/answer-section/answer-section.component";


@NgModule({
  declarations: [
    AppComponent,
    QboardComponent,
    HeaderComponent,
    FooterComponent,
    ScoresComponent,
    QuestionComponent,
    AnswerComponent,
    AnswerSectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
