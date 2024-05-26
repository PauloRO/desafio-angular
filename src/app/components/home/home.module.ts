import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { GitHubService } from '../../shared/services/github.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TooltipModule } from 'primeng/tooltip';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    TooltipModule,
  ],
  providers: [GitHubService],
  exports: [HomeComponent],
})
export class HomeModule {}
