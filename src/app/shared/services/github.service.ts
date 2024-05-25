import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import axios from 'axios';

@Injectable()
export class GitHubService {
  constructor(private http: HttpClient) {}

  /* findGithubByUserName(userName: string):Promise<any> {
    const linkGithub = `https://api.github.com/users/${userName}`
    try {
        const response = await 
    } catch (error) {
        
    }
  } */

  findGithubByUserNameOs(userName: string): Observable<any> {
    const linkGithub = `https://api.github.com/users/${userName}`;
    return this.http.get(linkGithub);
  }

  findRepositoryByUserName(userName: string): Observable<any> {
    const linkRepository = `https://api.github.com/users/${userName}/repos`;
    return this.http.get(linkRepository);
  }
}
