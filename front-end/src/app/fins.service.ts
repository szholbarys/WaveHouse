import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fin } from './datainterfaces';

@Injectable({
  providedIn: 'root'
})
export class FinsService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getFins():Observable<Fin[]>{
    return this.http.get<Fin[]>(
      `${this.BASE_URL}/api/fins/`
    )
  }
}
