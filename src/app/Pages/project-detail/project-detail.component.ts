import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'projectdetail',
  standalone: true,
  imports: [],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css',
})
export class ProjectDetailComponent implements OnInit {
  projectId: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    debugger;
    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id');
      // Use the projectId as needed
    });
  }
}
