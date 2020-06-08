import { Component, OnInit } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  userName: string;

  submitted = false;

  constructor(private userService: GitHubUserService) { }

  onSubmit() {
    this.submitted = true;
    console.log('form submitting');
    this.userService.getUsers(this.userName).subscribe(
      resp => {
        console.log(resp);
        console.log(resp.headers.get('link'));

      }
    )
  }

  ngOnInit(): void {
  }

}
