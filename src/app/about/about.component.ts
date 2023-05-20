import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  @Input() editOn: boolean=false;

  about: string = 'About about about about about about about about about about about about about about about about';
  email: string = 'abc@gmail.com';
  phone: string = '(123) 456 7890';
  address: string = 'Toronto';
  language: string = 'English, French';
}
