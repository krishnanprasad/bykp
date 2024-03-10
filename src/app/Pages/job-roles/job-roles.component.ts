import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'job-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-roles.component.html',
  styleUrl: './job-roles.component.css',
})
export class JobRolesComponent implements OnInit {
  jobroles: any[] = [];
  ngOnInit() {
    this.getJobRoles();
  }
  constructor(private http: HttpClient) {}
  getJobRoles() {
    this.http.get<any[]>('assets/json/jobroles.json').subscribe((data) => {
      this.jobroles = data;
    });
  }

  selectedrole: any = {
    title: 'Hello',
    description: '',
    certification: '',
    salary: 0,
    averageopeningperyear: 0,
  };

  showJobRoleDetails(role: any) {
    this.selectedrole = this.jobroles.filter(
      (x) => x.RoleId === role.RoleId
    )[0];
  }
}
