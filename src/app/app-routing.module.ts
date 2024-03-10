import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewQuestionsComponent } from './Pages/interview-questions/interview-questions.component';
import { TestPageComponent } from './Pages/test-page/test-page.component';
import { JobRolesComponent } from './Pages/job-roles/job-roles.component';
import { HomeComponent } from './Pages/home/home.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { ProjectDetailComponent } from './Pages/project-detail/project-detail.component';
import { JobRoleDetailComponent } from './Pages/job-role-detail/job-role-detail.component';

const routes: Routes = [
  {
    path: 'interviewquestions',
    loadChildren: () =>
      import('./Pages/interview-questions/interview-questions.module').then(
        (m) => m.InterviewQuestionsModule
      ),
    component: InterviewQuestionsComponent,
  },
  {
    path: 'testpage/:id',
    loadChildren: () =>
      import('./Pages/test-page/test-page.module').then(
        (m) => m.TestPageModule
      ),
    component: TestPageComponent,
  },
  {
    path: 'jobroles',
    component: JobRolesComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'projectdetail/:id',
    component: ProjectDetailComponent,
  },
  {
    path: 'jobroledetail/:id',
    component: JobRoleDetailComponent,
  },
  {
    path: '#',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'interviewquestions',
    redirectTo: 'interviewquestions',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
