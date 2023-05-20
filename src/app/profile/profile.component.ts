import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() editOn: boolean=false;
  name: string = 'John Luc';
  title: string = 'Full Stuck Developer';
  photo: string = 'assets/background.png';

}
