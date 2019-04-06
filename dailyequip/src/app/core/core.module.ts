import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Optional, SkipSelf } from '@angular/core';
import { QuizService } from 'src/app/core/quiz.service';
import { Constants } from './constants';

@NgModule({
  imports: [
    CommonModule,
    Constants
  ],
  providers: [
    QuizService
  ],
  declarations: []
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new  Error('you shall not run!');
    }
  }
}
