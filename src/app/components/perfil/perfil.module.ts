import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { GitHubService } from '../../shared/services/github.service';
import { PerfilComponent } from './perfil.component';

const routes: Routes = [{ path: '', component: PerfilComponent }];

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ButtonModule,
    DividerModule,
  ],
  exports: [PerfilComponent],
  providers: [GitHubService],
})
export class PerfilModule {}
