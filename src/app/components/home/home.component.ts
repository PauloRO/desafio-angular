import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  searchInput: string = '';

  constructor(private router: Router) {}

  findUser(username: string) {
    if (username && username !== '')
      this.router.navigate([`/perfil/${username}`]);
  }
}
