import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Surfboard } from './datainterfaces';

@Injectable({
  providedIn: 'root'
})
export class SurfboardsService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getSurfboards():Observable<Surfboard[]>{
    return this.http.get<Surfboard[]>(
      `${this.BASE_URL}/api/surfboards/`
    )
  }
}