import { Component, OnInit,Input } from '@angular/core';
import { workExp } from '../workExp';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit{
  @Input() editOn: boolean=false;
  workExpList: workExp[]=[];
  workExp1:workExp={
    id:'',
    company: 'UDEV',
    year: '2022-now',
    title: 'Web Developer',
    address: 'Toronto',
    description: 'About about about about about about about about about about about about about about about about',
  }
  
  workExp2:workExp={
    id:'',
    company: 'Freelance',
    year: '2021-2022',
    title: 'Web Developer',
    address: 'Ottawa',
    description: 'About about about about about about about about about about about about about about about about',
  }
  

  
  ngOnInit(): void {
    this.workExpList.push(this.workExp1);
    this.workExpList.push(this.workExp2);
  }
}
