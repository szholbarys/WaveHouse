import { Component } from '@angular/core';
import { fins, Fin } from '../products';

@Component({
  selector: 'app-fins',
  templateUrl: './fins.component.html',
  styleUrls: ['./fins.component.css']
})
export class FinsComponent {
  fins:Fin[] = fins;
  ngOnInit(): void {
    console.log(fins);  
  }
}
