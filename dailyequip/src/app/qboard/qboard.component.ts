import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { trigger, state, style, transition, animate, useAnimation } from "@angular/animations";
import { bounce } from 'ng-animate';

@Component({
  selector: 'app-qboard',
  templateUrl: './qboard.component.html',
  styleUrls: ['./qboard.component.scss'],
  animations: [
    // trigger('changeState', [
    //     state('state1', style({
    //       backgroundColor: 'green',
    //       transform: 'scale(1)'
    //     })),
    //     state('state2', style({
    //       backgroundColor: 'red',
    //       transform: 'scale(1.5)'
    //     })),
    //     transition('*=>state1', animate('300ms')),
    //     transition('*=>state2', animate('2000ms'))
    // ]),
    trigger('bounce', [transition('* <=> *', useAnimation(bounce))])
  ]
})
export class QboardComponent implements OnInit {
  bounce: any;
  @Input() currentState;
  switch: boolean;
  answers: any;
  selectedOption: string;
  isOptionSelected: boolean;

  constructor() {
    this.switch = false;
    this.isOptionSelected = false;
    this.answers = {
      Heading: {
        text: "சோழன்"
      },
      Question: {
        text: "தமிழக அரச சார்பில் தஞ்சை பெரிய கோவிலை கட்டியதற்கு ஆயிரமாண்டு நிறைவு விழா நிகழ்த்தப் பெற்றது. மக்களாட்சிக்கு நிகரான நிர்வாகத்தையும், மக்கள் நல திட்டங்களையும் செயல்படுத்திய ராசராசனின் ஆட்சியை போல மத்தியிலும் மாநிலத்திலும் நல்லாட்சி நடைபெறுவதாக காங்கிரசு தலைவர் வாசன் கூறுகிறார். மக்களாட்சியை திறம்பட நடத்தியவன் ராசராசன் என்கிறார் கருணாநிதி. வரி கட்ட முடியாதவர்களின் நிலம் பறிக்கப்பட்டு கருவூலத்தில் சேர்க்கப்பட்டதாகவும் சொல்கிறார். கோவிலை கட்டுவது பெரிதல்ல தொடர்ந்து அதனை நிர்வகிப்பதுதான் சிரமம் என்கிறார் கனிமொழி.",
        image: ""
      },
      Answers: [
        {
          optionId: 1,
          optionText: "sanjai",
          optionDescription: "your name only",
          optionImage: ""
        },
        {
          optionId: 2,
          optionText: "mani",
          optionDescription: "your bro name",
          optionImage: ""
        },
        {
          optionId: 3,
          optionText: "barkavi",
          optionDescription: "your wife name",
          optionImage: ""
        },
        {
          optionId: 4,
          optionText: "vedhavi",
          optionDescription: "your sister name",
          optionImage: ""
        }
      ],
      CorrectOption: 4
    }
  }

  switchState() {
    this.switch = !this.switch;
  }

  selectedAnswer(optionNumber) {
    this.isOptionSelected = true;
    this.selectedOption = this.answers.Answers[optionNumber - 1];
    
  }

  ngOnInit() {
    
  }

}
