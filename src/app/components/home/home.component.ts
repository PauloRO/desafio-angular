import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GitHubService } from '../../shared/services/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searchInput: string = '';

  constructor(private githubService: GitHubService, private router: Router) {}

  findUser(username: string) {
    /* this.githubService.findGithubByUserNameOs(username).subscribe((data) => {
      console.log(data);
    }); */

    this.router.navigate([`/perfil/${username}`]);
  }
}
