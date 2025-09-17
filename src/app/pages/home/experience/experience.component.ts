import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Job } from './job';

@Component({
  selector: 'web-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  jobs: Job[] = [
    {
      headerColor: '#41516C',
      companyName: 'Foiwe Info Global Solutions',
      companyUrl: 'https://www.foiwe.com/',
      period: 'Jan. 2019 - May 2023',
      position: 'System Analyst',
      techStack: 'Python , Django , Angular, SQL Server'
    },
    {
      headerColor: '#FBCA3E',
      companyName: 'Sakeesoft Pvt Ltd',
      companyUrl: 'https://www.sakeesoft.com/',
      period: 'Apr. 2018 - Dec. 2018',
      position: 'Jr Software Developer',
      techStack: 'Dart, Flutter, Entity Framework, Java MVC, SQL Server'
    },
    {
      headerColor: '#E24A68',
      companyName: 'Ducat',
      companyUrl: 'https://www.ducatindia.com/',
      period: 'Mar. 2023 - Sep. 2023',
      position: 'Full Stack Developer Intern',
      techStack: 'Java, JavaScript, JQuery, HTML, CSS, SQL Server'
    },
  ];
}
