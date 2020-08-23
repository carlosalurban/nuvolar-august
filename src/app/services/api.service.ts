import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/users.model';
import { UserProfile } from '../models/userprofile.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = 'https://api.github.com/';

  constructor(private http: HttpClient) { }
  getUser(userName): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.apiUrl + 'users/' + userName);
  }
  getUsers(): Observable<Array<Users>> {
    return this.http.get<Array<Users>>(this.apiUrl + 'users?');
  }

}
