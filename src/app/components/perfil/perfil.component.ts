import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import moment from 'moment';

import { GitHubService } from '../../shared/services/github.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss',
})
export class PerfilComponent implements OnInit {
  perfil: any = null;
  repositorys: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private githubService: GitHubService
  ) {}

  ngOnInit(): void {
    const name =
      this.activatedRoute.snapshot.paramMap.get('userName')?.toString() || '';
    this.findGithubPerfil(name);
    this.findRepositoryByUserName(name);
  }

  findGithubPerfil(userName: string): void {
    this.githubService.findGithubByUserNameOs(userName).subscribe((res) => {
      this.perfil = res;
    });
  }

  findRepositoryByUserName(userName: string): void {
    this.githubService.findRepositoryByUserName(userName).subscribe((res) => {
      res.forEach((repo: any) => {
        repo.diasPassados = this.getDias(repo?.pushed_at);
      });
      res.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
      this.repositorys = res;
    });
  }

  getDias(date: string): number {
    const today = moment();
    const pastDate = moment(date);
    const diffDays = today.diff(pastDate, 'days');
    return diffDays;
  }

  goToRepository(repo: any) {
    if (repo) {
      const linkRepository = `https://github.com/${repo.owner.login}/${repo.name}`;
      window.open(linkRepository, '_blank');
    }
  }

  goToTwitter(perfil: any) {
    if (perfil) {
      const linkTwitter = `https://x.com/${perfil.twitter_username}`;
      window.open(linkTwitter, '_blank');
    }
  }
  goToBlog(perfil: any) {
    if (perfil) {
      const linkBlog = `https://${perfil.blog}`;
      window.open(linkBlog, '_blank');
    }
  }

  goToGithub(perfil: any) {
    if (perfil) {
      const linkGithub = `https://github.com/${perfil.login}`;
      window.open(linkGithub, '_blank');
    }
  }
}
