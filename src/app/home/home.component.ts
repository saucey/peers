import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import {Peer} from 'peerjs';
declare var Peer: any;
// import { Socket } from 'ngx-socket-io';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public router: Router) {


    // socket.on('user-connected', function (data: any) {
    //   console.log(data);
    // });

    // this.socket.emit('join-room', uuidv4());

  }

  ngOnInit(): void { }

  goToVideoCall() {
    this.router.navigate(['/call-sender']);
  }

  goToHostCam() {
    this.router.navigate(['/call-reciever']);
  }
}
