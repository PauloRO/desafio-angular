import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GitHubService } from '../../shared/services/github.service';
import moment from 'moment';

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
    console.log(name);
    this.findGithubPerfil(name);
    this.findRepositoryByUserName(name);
  }

  findGithubPerfil(userName: string): void {
    this.githubService.findGithubByUserNameOs(userName).subscribe((res) => {
      console.log(res);
      this.perfil = res;
    });
  }

  findRepositoryByUserName(userName: string): void {
    this.githubService.findRepositoryByUserName(userName).subscribe((res) => {
      res.forEach((repo: any) => {
        repo.diasPassados = this.getDias(repo?.pushed_at);
      });
      this.repositorys = res;
      console.log(this.repositorys);
    });
  }

  getDias(date: string): number {
    const today = moment();
    const pastDate = moment(date);
    const diffDays = today.diff(pastDate, 'days');
    return diffDays;
  }
}
