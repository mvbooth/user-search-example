import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubUserService {

  gitUserSearchUrl = 'https://api.github.com/search/users';

  constructor(private http: HttpClient) { }

  getUsers(userString, toPage) {
    return this.http.get(`${this.gitUserSearchUrl}`,{
      params: {
        q: userString,
        per_page: '50',
        page: toPage
      },
      observe: 'response'
    });
  }
}
