import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { CallInfoDialogComponent, DialogData } from '../callinfo-dialog/callinfo-dialog.component';
import { switchMap, filter } from 'rxjs/operators';
import { CallService } from '../services/call.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.scss'],
  providers: [CallService],
})
export class RecieverComponent implements OnInit, OnDestroy {
  public isCallStarted$: Observable<boolean>;

  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo') remoteVideo!: ElementRef<HTMLVideoElement>;

  constructor(
    public dialog: MatDialog,
    private callService: CallService,
    // public socket: Socket
  ) {

    this.isCallStarted$ = this.callService.isCallStarted$;
    this.callService.initPeer();
    this.callService.enableCallAnswer();
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

  public endCall() {
    this.callService.closeMediaCall();
  }
}
