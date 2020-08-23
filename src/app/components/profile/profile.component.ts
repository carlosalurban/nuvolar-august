import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { UserProfile } from 'src/app/models/userprofile.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$: Observable<UserProfile>;
  constructor(
    private apiService: ApiService,
    private routerActive: ActivatedRoute
  ) { }
  /**
   * Call to take users from Api
   */
  ngOnInit(): void {
    this.user$ = this.routerActive.params.pipe(
      switchMap(name => this.apiService.getUser(name.user))
    );
  }


}
