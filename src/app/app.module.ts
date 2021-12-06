import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { TemplateModule } from './template/template.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const mainRoute: Route[] = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'call-reciever',
        loadChildren: () =>
          import('./reciever/reciever.module').then((m) => m.RecieverModule),
      },
      {
        path: 'call-sender',
        loadChildren: () =>
          import('./sender/sender.module').then((m) => m.SenderModule),
      },
    ],
  },
];
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TemplateModule,
    RouterModule.forRoot(mainRoute),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
