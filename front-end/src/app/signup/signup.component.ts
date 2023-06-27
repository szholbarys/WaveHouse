import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import {User} from '../datainterfaces'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  implements OnInit{
  name : String | undefined
  number : Number | undefined
  email : String | undefined
  password : String | undefined

  users:  any;
  constructor(private userData: SignupService){
    
  }
  ngOnInit(): void {
  
  }
  getUserFormUser(data : User){
    console.log(data) // empty
    // creaate form data, formdata.append('email', data.email), formdata.append('password', data.password)
    this.userData.saveUser(data)
  
  }
  save(){{
    window.open("localhost:4200")
  }
  }
}