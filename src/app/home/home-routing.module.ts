import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
})
export class HomeRoutingModule {}
