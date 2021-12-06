import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RecieverComponent } from './reciever.component';

export const homeRoutes: Route[] = [
  {
    path: '',
    component: RecieverComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
})
export class RecieverRoutingModule {}
