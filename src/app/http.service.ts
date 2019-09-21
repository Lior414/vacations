import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {vacation} from './vacation.model';

const httpClient = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
  // withCredentials: true
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  vacations: vacation[] = [];

  constructor(private http: HttpClient) { }

  login2service(body){
    return this.http.post('http://localhost:3000/users/login', body, httpClient);
  }

  register2server(body){
    return this.http.post('http://localhost:3000/users/register', body, httpClient);
  }

  vacation2server(body){
    return this.http.post('http://localhost:3000/vacations/newVacation', body, httpClient);
  }

  getVacations(): Observable<vacation[]>{
    return this.http.get<vacation[]>('http://localhost:3000/vacations/getVacations', httpClient);
  }

  vacationID(id): Observable<vacation[]> {
    return this.http.get<vacation[]>(`http://localhost:3000/vacations/getVacations/${id}`, httpClient);
  }

  removeVacation(id){
    return this.http.delete(`http://localhost:3000/vacations/removeVacation/${id}`, httpClient);
  }

  editVacation(id){
    return this.http.put(`http://localhost:3000/vacations/editVacation/${id}`, httpClient);
  }
}
