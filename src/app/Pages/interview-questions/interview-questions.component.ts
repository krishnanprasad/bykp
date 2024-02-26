import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'interviewquestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interview-questions.component.html',
  styleUrl: './interview-questions.component.css',
})
export class InterviewQuestionsComponent {
  interviewQuestions: any = [
    {
      title: 'Angular - Test 1',
      id: '1',
      description:
        'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.',
      difficulty: 'easy',
      questionurl: 'https://www.interviewbit.com/angular-interview-questions/',
    },
  ];
  constructor(private router: Router) {}
  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
