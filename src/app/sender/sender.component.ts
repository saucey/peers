import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { CallInfoDialogComponent, DialogData } from '../callinfo-dialog/callinfo-dialog.component';
import { switchMap, filter } from 'rxjs/operators';
import { CallService } from '../services/call.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss'],
  providers: [CallService],
})
export class SenderComponent implements OnInit, OnDestroy {
  public isCallStarted$: Observable<boolean>;
  public serverPeerId: any;

  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo') remoteVideo!: ElementRef<HTMLVideoElement>;

  constructor(public socket: Socket, public dialog: MatDialog, private callService: CallService) {
    this.isCallStarted$ = this.callService.isCallStarted$;
    this.callService.initPeer2();

    this.socket.on('message', (msg: any) => {
      this.serverPeerId = msg
    });

  }

  ngOnInit(): void {
    this.callService.localStream$
      .pipe(filter((res) => !!res))
      .subscribe(
        (stream: any) => (this.localVideo.nativeElement.srcObject = stream)
      );
    this.callService.remoteStream$
      .pipe(filter((res) => !!res))
      .subscribe(
        (stream: any) => (this.remoteVideo.nativeElement.srcObject = stream)
      );
  }

  ngOnDestroy(): void {
    this.callService.destroyPeer();
  }

  public makeCall() {
    this.callService.establishMediaCall(this.serverPeerId);
  }

  public endCall() {
    this.callService.closeMediaCall();
  }
}
