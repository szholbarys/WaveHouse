import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wetsuit } from './datainterfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getWetsuits():Observable<Wetsuit[]>{
    return this.http.get<Wetsuit[]>(
      `${this.BASE_URL}/api/users`
    )
  }

  

}
