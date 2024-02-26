import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'job-roles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-roles.component.html',
  styleUrl: './job-roles.component.css',
})
export class JobRolesComponent {
  filterlist: any = [
    {
      id: 1,
      name: 'Work From Home',
      selected: false,
    },
    { id: 2, name: 'Full Time', selected: false },
    { id: 3, name: 'Part Time', selected: false },
    { id: 4, name: 'Freelance', selected: false },
    { id: 5, name: 'Contract', selected: false },
    { id: 6, name: 'Internship', selected: false },
    { id: 7, name: 'Temporary', selected: false },
    { id: 8, name: 'Volunteer', selected: false },
    { id: 9, name: 'Commission', selected: false },
    { id: 10, name: 'Apprenticeship', selected: false },
    { id: 11, name: 'Seasonal', selected: false },
    { id: 12, name: 'Per Diem', selected: false },
    { id: 13, name: 'Other', selected: false },
    { id: 14, name: 'Remote', selected: false },
  ];

  selectedrole: any = {
    title: 'Hello',
    description: '',
    certification: '',
    salary: 0,
    averageopeningperyear: 0,
  };
  jobroles = [
    // Removed 'any' type declaration
    {
      RoleName: 'Business Analyst',
      RoleId: 'BA001',
      WhatIs:
        'Business Analysts analyze and interpret business data to provide insights and recommendations for improving processes, strategies, and overall business performance.',
      SkillsRequired: [
        'Data Analysis',
        'Requirements Gathering',
        'Business Process Modeling',
        'Communication',
      ],
      Workflow: [
        'Requirements Gathering: Collaborating with stakeholders to understand and document business needs.',
        'Data Analysis: Analyzing and interpreting data to identify trends, patterns, and insights.',
        'Business Process Modeling: Creating models to represent and optimize business processes.',
        'Communication: Effectively communicating findings and recommendations to both technical and non-technical stakeholders.',
      ],
      Certification: 'Certified Business Analysis Professional (CBAP)',
      QualificationRequired:
        "Bachelor's degree in Business, Information Technology, or a related field.",
      AverageSalary: {
        Minimum: 500000,
        Maximum: 1200000,
      },
      DifferentRoleTerms: [
        'Business Systems Analyst',
        'Business Process Analyst',
        'Requirements Analyst',
      ],
      RoleCategory: 'Development/Sales/Marketing/Finance/Accounts/HR',
      Shift: 'Day',
      Industry: 'All',
    },
    {
      RoleName: 'Data Analyst',
      RoleId: 'BA002',
      WhatIs:
        'Data Analysts work with data to extract valuable insights and support decision-making processes within an organization.',
      SkillsRequired: ['Data Analysis', 'SQL', 'Excel', 'Data Visualization'],
      Workflow: [
        'Data Collection: Gathering data from various sources, including databases, spreadsheets, and external APIs.',
        'Data Cleaning and Processing: Cleaning and organizing raw data to ensure accuracy and consistency.',
        'Data Analysis: Performing statistical analysis and using data analysis tools to identify trends and patterns.',
        'Report Generation: Preparing and presenting reports to communicate findings to stakeholders.',
      ],
      Certification: 'Certified Analytics Professional (CAP)',
      QualificationRequired:
        "Bachelor's degree in a relevant field such as Statistics, Mathematics, Computer Science, or Business.",
      AverageSalary: {
        Minimum: 400000,
        Maximum: 1000000,
      },
      DifferentRoleTerms: ['Business Analyst', 'Analytics Specialist'],
      RoleCategory: 'Development/Sales/Marketing/Finance/Accounts/HR',
      Shift: 'Day',
      Industry: 'All',
    },
    {
      RoleName: 'Angular Front End Developer',
      RoleId: 'BA003',
      WhatIs:
        'Angular Front End Developers design and develop user interfaces for web applications using the Angular framework.',
      SkillsRequired: [
        'Angular',
        'HTML',
        'CSS',
        'JavaScript',
        'Responsive Design',
      ],
      Workflow: [
        'UI/UX Design: Collaborating with designers to create visually appealing and user-friendly interfaces.',
        'Angular Development: Writing code using Angular to implement interactive features and components.',
        'Testing: Conducting unit testing and debugging to ensure the functionality and performance of the application.',
        'Collaboration: Working closely with back-end developers and other team members to integrate front-end components with back-end services.',
      ],
      Certification: 'Angular Certified Developer',
      QualificationRequired:
        "Bachelor's degree in Computer Science, Information Technology, or a related field.",
      AverageSalary: {
        Minimum: 600000,
        Maximum: 1500000,
      },
      DifferentRoleTerms: [
        'Front End Developer',
        'Angular Developer',
        'UI Developer',
      ],
      RoleCategory: 'Development',
      Shift: 'Day',
      Industry: 'All',
    },
    {
      RoleName: 'React Front End Developer',
      RoleId: 'BA004',
      WhatIs:
        'React Front End Developers design and implement user interfaces for web applications using the React.js library.',
      SkillsRequired: [
        'React.js',
        'JavaScript',
        'HTML',
        'CSS',
        'Responsive Design',
      ],
      Workflow: [
        'UI/UX Design: Collaborating with design teams to create visually appealing and intuitive user interfaces.',
        'React Development: Writing code in React.js to build interactive and dynamic web applications.',
        'State Management: Implementing state management solutions for efficient data handling within the application.',
        'Collaboration: Working closely with back-end developers and other team members to integrate front-end components with back-end services.',
      ],
      Certification: 'React Developer Certification',
      QualificationRequired:
        "Bachelor's degree in Computer Science, Information Technology, or a related field.",
      AverageSalary: {
        Minimum: 600000,
        Maximum: 1500000,
      },
      DifferentRoleTerms: [
        'Front End Developer',
        'React Developer',
        'UI Developer',
      ],
      RoleCategory: 'Development',
      Shift: 'Day',
      Industry: 'All',
    },
    {
      RoleName:
        'DEIB Officer (Diversity, Equity, Inclusion, and Belonging Officer)',
      WhatIs:
        'A DEIB Officer, or Diversity, Equity, Inclusion, and Belonging Officer, is responsible for fostering a diverse, equitable, and inclusive workplace environment. They develop and implement strategies, policies, and programs to promote diversity and inclusion within an organization, aiming to create a culture where all employees feel valued, respected, and supported.',
      SkillsRequired:
        'Strong communication and interpersonal skills, cultural competence, knowledge of diversity and inclusion best practices, ability to develop and deliver training programs, experience in policy development and implementation, and a passion for social justice and equity.',
      Workflow:
        "In a Pizza Shop analogy, a DEIB Officer would be akin to the manager who ensures that the pizza shop is welcoming to people from all backgrounds. They develop recipes (policies and programs) that cater to diverse tastes, train staff (employees) on cultural sensitivity, and create an inclusive atmosphere where everyone feels like they belong. They collaborate with HR (headquarters) to address any concerns and continuously improve the shop's diversity and inclusion efforts.",
      Certification: 'Certified Diversity Professional (CDP)',
      QualificationRequired:
        "Bachelor's degree in Human Resources, Organizational Psychology, Social Sciences, or a related field. Additional certifications or training in diversity, equity, and inclusion are often preferred.",
      AverageSalary: { Minimum: 800000, Maximum: 1500000 },
      DifferentRoleTerms: [
        'Diversity Officer',
        'Inclusion Officer',
        'Belonging Officer',
      ],
      RoleCategory: 'HR',
      Shift: 'Day',
      Industry: 'All',
    },
  ];
  showJobRoleDetails(role: any) {
    debugger;
    this.selectedrole = this.jobroles.filter(
      (x) => x.RoleId === role.RoleId
    )[0];
  }
}
