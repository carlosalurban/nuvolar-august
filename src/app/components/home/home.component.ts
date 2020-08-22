import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Users } from '../../models/users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Array<Users> = [];

  constructor(private apiService: ApiService) { }
  s
  ngOnInit(): void {
    this.getUsersFromApi();

  }

  getUsersFromApi() {
    this.apiService.getUsers().subscribe((usersApi: Array<Users>) => {
      this.users = usersApi;
      console.log(this.users[0].id);
    });
  }

}
