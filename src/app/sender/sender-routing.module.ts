import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SenderComponent } from './sender.component';

export const homeRoutes: Route[] = [
  {
    path: '',
    component: SenderComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
})
export class SenderRoutingModule {}
