import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfile: Users;

  constructor(
    private apiService: ApiService,
    private routerActive: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe(name => {
      console.log(name.user)
      this.apiService.getUser(name.user)
        .subscribe(user => {
          this.userProfile = user;
          console.log(this.userProfile);
        })

    })

  }

}
