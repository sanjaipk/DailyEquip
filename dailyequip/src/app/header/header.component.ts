import { Component, OnInit } from '@angular/core';
import { QuizService } from "src/app/core/quiz.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  apiresponse: any
  constructor(private apiservice: QuizService) { }

  ngOnInit() {
    this.apiresponse = this.apiservice.apiresponses.Heading
  }

}
