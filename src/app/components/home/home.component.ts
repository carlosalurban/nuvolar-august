import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Users } from '../../models/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  keyword: string = 'login';
  users: Array<Users> = [];


  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getUsersFromApi();

  }

  getUsersFromApi() {
    this.apiService.getUsers().subscribe((usersApi: Array<Users>) => {
      console.log(usersApi);
      this.users = usersApi;
    });
  }


  selectEvent(user) {
    this.router.navigate(['/profile', user.login]);
  }

}
