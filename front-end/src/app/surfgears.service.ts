import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Surfgear } from './datainterfaces';

@Injectable({
  providedIn: 'root'
})
export class SurfgearsService {
  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getSurfgearsById():Observable<Surfgear[]>{
    return this.http.get<Surfgear[]>(
      `${this.BASE_URL}/api/Surfgears/`
    )
  }
}