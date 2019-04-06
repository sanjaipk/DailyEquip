import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { QboardComponent } from './pages/qboard/qboard.component';
import { HeaderComponent } from './pages/layout/header/header.component';
import { FooterComponent } from './pages/layout/footer/footer.component';
import { ScoresComponent } from './pages/layout/header/scores/scores.component';
import { QuestionComponent } from './pages/qboard/question/question.component';
// import { QformComponent } from './pages/qform/qform.component';
import { AnswerSectionComponent } from './pages/qboard/answer-section/answer-section.component';
import { AnswerComponent } from './pages/qboard/answer-section/answer/answer.component';


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
    // QformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
