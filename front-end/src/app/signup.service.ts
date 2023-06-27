import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  url = 'http://localhost:8000/api/users/register/';

  constructor(private http: HttpClient) { }
  users(){
    return this.http.get(this.url);
  }
  saveUser(data: any){
    return this.http.post(this.url, data).subscribe((result) =>{
      console.warn("result", result);
    })
    console.warn(data);
  }
}