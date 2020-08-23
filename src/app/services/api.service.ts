import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://api.github.com/';

  constructor(private http: HttpClient) { }
  getUser(userName): Observable<Users> {
    return this.http.get<Users>(this.apiUrl + 'users/' + userName);
  }
  getUsers(): Observable<Array<Users>> {
    return this.http.get<Array<Users>>(this.apiUrl + 'users?');
  }

}
