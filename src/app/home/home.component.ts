import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import {Peer} from 'peerjs';
declare var Peer: any;

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  goToVideoCall() {
    this.router.navigate(['/call-reciever']);
  }
}
