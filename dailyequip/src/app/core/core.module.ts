import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Optional, SkipSelf } from "@angular/core";
import { QuizService } from "src/app/core/quiz.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    QuizService
  ],
  declarations: []
})
export class CoreModule { 
  constructor (@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new  Error('you shall not run!')
    }
  }
}
