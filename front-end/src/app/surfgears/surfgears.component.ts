import { Component } from '@angular/core';
import { surfgears, Surfgear } from '../products';

@Component({
  selector: 'app-surfgears',
  templateUrl: './surfgears.component.html',
  styleUrls: ['./surfgears.component.css']
})
export class SurfgearsComponent {
  surfgears:Surfgear[] = surfgears;
  ngOnInit(): void {
    console.log(surfgears);  
  }
}