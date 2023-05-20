import { Component, OnInit, Input } from '@angular/core';
import { workExp } from '../workExp';
import { degree } from '../degree';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  @Input() editOn: boolean=false;
  educationList: degree[]=[];
  degree1:degree={
    id:'',
    level: 'Certificate',
    year: '2023-2023',
    title: 'Full Stuck .Net Developer',
    institution: 'Humber College',
    description: 'About about about about about about about about',
  }
  degree2:degree={
    id:'',
    level: 'Master',
    year: '2017-2019',
    title: 'Networking',
    institution: 'York University',
    description: 'About about about about about about about about',
  }
  degree3:degree={
    id:'',
    level: 'Bachelor',
    year: '2013-2017',
    title: 'Computer Science',
    institution: 'York University',
    description: 'About about about about about about about about',
  }
  

  
  ngOnInit(): void {
    this.educationList.push(this.degree1);
    this.educationList.push(this.degree2);
    this.educationList.push(this.degree3);
  }
}
