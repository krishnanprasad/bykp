import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommaToArrayPipe } from '../../Filters/comma-to-array.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'interviewquestions',
  standalone: true,
  imports: [CommonModule, FormsModule, CommaToArrayPipe],
  templateUrl: './interview-questions.component.html',
  styleUrl: './interview-questions.component.css',
})
export class InterviewQuestionsComponent {
  interviewQuestions: any = [];
  goToLink(url: string) {
    window.open(url, '_blank');
  }
  ngOnInit() {
    this.getInterviewQuestionJSON();
  }

  constructor(private http: HttpClient) {}
  getInterviewQuestionJSON() {
    this.http
      .get<any[]>('assets/json/interviewquestions.json')
      .subscribe((data) => {
        this.interviewQuestions = data;
        this.filteredinterviewQuestions = this.interviewQuestions;
      });
  }
  techStackList: string[] = [
    'HTML',
    'CSS',
    'TypeScript',
    'Angular',
    'React',
    'Vue',
    'NodeJS',
    'SQL',
    'MongoDB',
    'ExpressJS',
    'Java',
    'DOT NET',
    'Python',
  ];
  filteredinterviewQuestions: any;
  showDropDownDiv: boolean = false;
  filteredTechStackList: string[] | undefined;
  filterTechStackValues: string[] = [];
  seachTech: any;
  checkboxes = [
    { label: 'Easy', checked: false },
    { label: 'Normal', checked: false },
    { label: 'Hard', checked: false },
  ];
  onCheckboxChange(index: number, event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkboxes[index].checked = target.checked;
  }
  checkDropDownDiv() {
    if (this.seachTech.length > 0) {
      this.showDropDownDiv = true;
    } else {
      this.showDropDownDiv = false;
    }
  }
  filterInterviewListList(value: string) {
    // Push the value into filterTechStackValues
    this.filterTechStackValues.push(value);
    this.runfilterInterviewQuestion();
  }
  runfilterInterviewQuestion() {
    this.seachTech = '';
    this.checkDropDownDiv();
    // Filter ProjectList
    this.filteredinterviewQuestions = this.filteredinterviewQuestions.filter(
      (project: any) => {
        // Split the techstack string into an array
        const techStackArray = project.techstack
          .split(',')
          .map((val: any) => val.trim());
        // Check if every value in filterTechStackValues is included in techStackArray
        return this.filterTechStackValues.every((val) =>
          techStackArray.includes(val)
        );
      }
    );
  }
  searchProject(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    value.length > 0
      ? (this.showDropDownDiv = true)
      : (this.showDropDownDiv = false);
    if (value.length > 0) {
      this.filterTechStack(value);
    }
  }
  filterTechStack(value: string) {
    this.filteredTechStackList = this.techStackList.filter((tech: string) => {
      return tech.toLowerCase().includes(value.toLowerCase());
    });
  }
  removeFilter(value: string) {
    this.filterTechStackValues = this.filterTechStackValues.filter(
      (tech: string) => tech !== value
    );
    this.runfilterInterviewQuestion();
    this.filterfilteredInterviewQuestionBasedonCheckbox();
  }
  filterfilteredInterviewQuestionBasedonCheckbox() {
    const checkedCheckboxes = this.checkboxes.filter(
      (checkbox) => checkbox.checked
    );
    if (this.filteredinterviewQuestions.length === 0) {
      this.filteredinterviewQuestions = this.interviewQuestions;
    }
    if (checkedCheckboxes.length === 0) {
      this.filteredinterviewQuestions = this.interviewQuestions;
      return;
    }
    this.filteredinterviewQuestions = this.filteredinterviewQuestions.filter(
      (project: any) => {
        return checkedCheckboxes.some((checkbox: any) => {
          if (checkbox.label === 'Easy') {
            return project.difficulty === 'Easy';
          }
          if (checkbox.label === 'Normal') {
            return project.difficulty === 'Normal';
          }
          if (checkbox.label === 'Hard') {
            return project.difficulty === 'Hard';
          }

          return false; // Add a default return statement
        });
      }
    );
  }
}
