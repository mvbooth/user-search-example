import { TestBed } from '@angular/core/testing';

import { GitHubUserService } from './git-hub-user.service';

describe('GitHubUserService', () => {
  let service: GitHubUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
