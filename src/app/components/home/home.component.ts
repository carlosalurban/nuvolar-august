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
  wrongInput: boolean = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUsersFromApi();

    this.apiService.getUsers().subscribe((userApi: Array<Users>) => {
      console.log(userApi);
    });
    this.apiService.getUsers().subscribe((userApi: Array<Users>) => {
      console.log(userApi);
    });

  }

  /**
   * Subscription from getter users of GitHub API 
   */
  getUsersFromApi() {
    this.apiService.getUsers().subscribe((usersApi: Array<Users>) => this.users = usersApi);
  }

  /**
   * Navigation with param selected with mousevent of autocomplete
   * @param user 
   */
  selectEvent(user) {
    this.router.navigate(['/profile', user.login]);
  }

  /**
   * Set Boolean global property when the wrong search change
   */
  onChangeSearch() {
    this.wrongInput = false;
  }

  /**
   * Navigate with url param to profile component in case the search match, if no set Boolean global property and activate Alert
   * @param inputUser 
   */
  onSubmit(inputUser) {
    this.users.forEach(user => {
      if (inputUser.name === user.login) {
        this.router.navigate(['/profile', inputUser.name]);
      } else {
        this.wrongInput = true;
      }
    });
  }

}
