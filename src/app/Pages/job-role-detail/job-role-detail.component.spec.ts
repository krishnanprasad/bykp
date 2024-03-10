import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRoleDetailComponent } from './job-role-detail.component';

describe('JobRoleDetailComponent', () => {
  let component: JobRoleDetailComponent;
  let fixture: ComponentFixture<JobRoleDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobRoleDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobRoleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
