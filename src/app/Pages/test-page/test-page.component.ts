import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css',
})
export class TestPageComponent {
  questions: any = [
    {
      question: 'What is your name?',
      questiondid: '1',
      options: [
        { option: 'A', label: 'B', correctAnswer: 'C' },
        { option: 'A', label: 'D', correctAnswer: 'C' },
        { option: 'A', label: 'B', correctAnswer: 'C' },
        { option: 'A', label: 'B', correctAnswer: 'C' },
      ],
    },
    {
      question: 'What is your age?',
      questiondid: '2',
      options: [
        { option: 'A', label: 'B', correctAnswer: 'C' },
        { option: 'A', label: 'G', correctAnswer: 'C' },
        { option: 'A', label: 'B', correctAnswer: 'C' },
        { option: 'A', label: 'B', correctAnswer: 'C' },
      ],
    },
    {
      question: 'What is your gender?',
      questiondid: '3',
      options: [
        { option: 'A', label: 'B', correctAnswer: 'C' },
        { option: 'A', label: 'E', correctAnswer: 'C' },
        { option: 'A', label: 'B', correctAnswer: 'C' },
        { option: 'A', label: 'B', correctAnswer: 'C' },
      ],
    },
  ];
  testTiming: number = 30;
  timerClock: string | undefined;
  AnsweredQuestions: any[] | undefined;
  timer: number = 0;
  constructor(private http: HttpClient) {}

  getAllAnsweredQuestions() {
    return this.questions.filter(
      (question: any) => question.selectedOption !== undefined
    );
  }

  onAnswerSelected(question: any, option: any) {
    question.selectedOption = option;
    this.AnsweredQuestions = [
      { question: question.questiondid, option: option.label },
    ];
  }
  onAnswerChanged(question: any, option: any) {
    question.selectedOption = option;
    this.AnsweredQuestions = [
      { question: question.questiondid, option: option.label },
    ];
  }
  OnAnswerSubmitted() {
    const answeredQuestions = this.getAllAnsweredQuestions();
    const requestBody = {
      answeredQuestions: answeredQuestions,
      questionId: this.questions[0].questiondid,
      timerClock: this.timerClock,
    };

    // Make the POST request with the requestBody
    // Example using Angular HttpClient:
    this.http
      .post('/api/answer-questions', requestBody)
      .subscribe((response) => {
        // Handle the response
      });

    // Replace the above example with your actual POST request implementation
  }

  onStartTimer() {
    this.timer = 1800; // 30 minutes in seconds
    // console.log(
    //   `Started ${Math.floor(this.timer / 60)}:${this.timer % 60} minutes.`
    // );
    const interval = setInterval(() => {
      this.timer--;
      const minutes = Math.floor(this.timer / 60);
      const seconds = this.timer % 60;
      this.timerClock = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      console.log(`${minutes}:${seconds < 10 ? '0' : ''}${seconds} minutes.`);
      if (this.timer % 600 === 0) {
        // Prompt user here
        console.log(
          `It has been ${minutes}:${seconds < 10 ? '0' : ''}${seconds} minutes.`
        );
      }
      if (this.timer === 0) {
        clearInterval(interval);
        console.log('Timer completed.');
      }
    }, 1000); // 1 second interval
  }

  onCloseTimer() {}
}
