import { Component, OnInit ,Input} from '@angular/core';
import { skill } from '../skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  @Input() editOn: boolean=false;
  skillList: skill[]=[];
  skill1:skill={id:'', skill: 'Angular', level: '50%'}
  skill2:skill={id:'', skill: 'C#', level: '80%'}
  skill3:skill={id:'', skill: 'SQL', level: '60%'}
  
  

  
  ngOnInit(): void {
    this.skillList.push(this.skill1);
    this.skillList.push(this.skill2);
    this.skillList.push(this.skill3);
  }
}
