import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommaToArrayPipe } from '../../Filters/comma-to-array.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  imports: [CommonModule, CommaToArrayPipe, FormsModule],
})
export class ProjectsComponent {
  filteredProject: any;
  showDropDownDiv: boolean = false;
  filteredTechStackList: string[] | undefined;
  filterTechStackValues: string[] = [];
  seachTech: any;
  checkboxes = [
    { label: 'Easy', checked: false },
    { label: 'Normal', checked: false },
    { label: 'Hard', checked: false },
  ];
  projectList: any = [];
  checkDropDownDiv() {
    if (this.seachTech.length > 0) {
      this.showDropDownDiv = true;
    } else {
      this.showDropDownDiv = false;
    }
  }
  ngOnInit() {
    this.getProjectJson();
  }
  constructor(private http: HttpClient, private router: Router) {}
  getProjectJson() {
    this.http.get<any[]>('assets/json/projects.json').subscribe((data) => {
      this.projectList = data;
      this.filteredProject = this.projectList;
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
  filterTechStack(value: string) {
    this.filteredTechStackList = this.techStackList.filter((tech: string) => {
      return tech.toLowerCase().includes(value.toLowerCase());
    });
  }
  filterProject(string: string) {
    this.filteredProject = this.projectList.filter((project: any) => {
      return project.projectname.toLowerCase().includes(string.toLowerCase());
    });
  }
  removeFilter(value: string) {
    this.filterTechStackValues = this.filterTechStackValues.filter(
      (tech: string) => tech !== value
    );
    this.runfilterProject();
    this.filterfilteredProjectBasedonCheckbox();
  }
  clearFilter() {
    this.filterTechStackValues = [];
    this.seachTech = '';
    this.checkDropDownDiv();
  }
  filterProjectList(value: string) {
    // Push the value into filterTechStackValues
    this.filterTechStackValues.push(value);
    this.runfilterProject();
  }
  runfilterProject() {
    this.seachTech = '';
    this.checkDropDownDiv();
    // Filter ProjectList
    this.filteredProject = this.filteredProject.filter((project: any) => {
      // Split the techstack string into an array
      const techStackArray = project.techstack
        .split(',')
        .map((val: any) => val.trim());
      // Check if every value in filterTechStackValues is included in techStackArray
      return this.filterTechStackValues.every((val) =>
        techStackArray.includes(val)
      );
    });
  }

  showProjectDetails(project: any) {
    // Navigate to project detail page
    this.router.navigate(['/projectdetail', project.id]);
  }

  onCheckboxChange(index: number, event: Event) {
    const target = event.target as HTMLInputElement;
    this.checkboxes[index].checked = target.checked;
    this.filterfilteredProjectBasedonCheckbox();
  }
  filterfilteredProjectBasedonCheckbox() {
    const checkedCheckboxes = this.checkboxes.filter(
      (checkbox) => checkbox.checked
    );
    if (this.filteredProject.length === 0) {
      this.filteredProject = this.projectList;
    }
    if (checkedCheckboxes.length === 0) {
      this.filteredProject = this.projectList;
      return;
    }
    this.filteredProject = this.filteredProject.filter((project: any) => {
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
    });
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
}
