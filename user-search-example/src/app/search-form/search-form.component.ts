import { Component, OnInit } from '@angular/core';
import { GitHubUserService } from '../git-hub-user.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  userName: string;
  totalUsers: number;
  totalPagesArray = [];
  userArray = [];

  submitted = false;

  constructor(private userService: GitHubUserService) { }

  onSubmit() {
    this.submitted = true;
    console.log('form submitting');
    this.userService.getUsers(this.userName,1).subscribe(
      (resp:any) => {
        let users:any = resp.body;
        this.userArray = users.items;
        let paginationLink = resp.headers.get('link');

        this.updateTotalUsers(users.total_count);
        this.calculatePages(paginationLink);

      }
    );
  }

  updateTotalUsers(count) {
    this.totalUsers = parseInt(count,10);
  }

  changePage(newPage) {
    console.log('change page to = ', newPage);
    this.userService.getUsers(this.userName,newPage).subscribe(
      (resp:any) => {
        let users:any = resp.body;
        this.userArray = users.items;
        let paginationLink = resp.headers.get('link');

        this.updateTotalUsers(users.total_count);

      }
    );
  }

  calculatePages(linkStr) {
    if(linkStr.indexOf(',')) {
      let lastLink = linkStr.split(',')[1];
      let lastPageIndex = lastLink.lastIndexOf('page=');
      let closingTagIndex = lastLink.lastIndexOf('>');
      let totalPageCount = parseInt(lastLink.substring(lastPageIndex + 5, closingTagIndex),10); // should be the last page numer
      for( let i = 1; i <= totalPageCount; i++) {
        this.totalPagesArray.push(i);
      }
      console.log("total page = ", this.totalPagesArray);
    }
  }

  ngOnInit(): void {}

}
