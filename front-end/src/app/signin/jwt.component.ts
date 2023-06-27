import { Component } from '@angular/core';

@Component({
  selector: 'app-jwt',
  templateUrl: './jwt.component.html',
  styleUrls: ['./jwt.component.css']
})
export class JwtComponent {
  email : String | undefined
  password : String | undefined

}
