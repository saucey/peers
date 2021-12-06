import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'template-root',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
})
export class TemplateComponent {
  constructor(public router: Router) {}

  title = 'UI';

  returnHome() {
    this.router.navigate(['/']);
  }
}
