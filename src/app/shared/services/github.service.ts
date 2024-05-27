import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GitHubService {
  constructor(private http: HttpClient) {}

  findGithubByUserNameOs(userName: string): Observable<any> {
    const linkGithub = `https://api.github.com/users/${userName}`;
    return this.http.get(linkGithub);
  }

  findRepositoryByUserName(userName: string): Observable<any> {
    const linkRepository = `https://api.github.com/users/${userName}/repos`;
    return this.http.get(linkRepository);
  }
}
