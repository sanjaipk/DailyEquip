import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/core/quiz.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() headerObject: any;
  apiresponse: any;
  constructor(private apiservice: QuizService) { }

  ngOnInit() {
    if (this.apiservice.apiresponses) {
     this.apiresponse = this.apiservice.apiresponses.Heading;
    } else {
      this.apiresponse = '';
    }
  }

}
