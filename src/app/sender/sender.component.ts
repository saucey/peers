import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { CallInfoDialogComponent, DialogData } from '../callinfo-dialog/callinfo-dialog.component';
import { switchMap, filter } from 'rxjs/operators';
import { CallService } from '../services/call.service';

@Component({
  selector: 'sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss'],
  providers: [CallService],
})
export class SenderComponent implements OnInit, OnDestroy {
  public isCallStarted$: Observable<boolean>;
  private peerId: string;
  public serverPeerId: any;

  @ViewChild('localVideo') localVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('remoteVideo') remoteVideo!: ElementRef<HTMLVideoElement>;

  constructor(public dialog: MatDialog, private callService: CallService) {
    this.isCallStarted$ = this.callService.isCallStarted$;
    this.peerId = this.callService.initPeer();
    console.log(this.peerId, 'here');
    this.callService.peerIdOfdReciever;
    console.log(this.callService.peerIdOfdReciever, 'THE STORE')

    this.callService.getPeerId().subscribe((response: any) => {
      this.serverPeerId = response.peerID;
    })
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

  public showModal(joinCall: boolean): void {
    let dialogData: DialogData = joinCall
      ? { peerId: null, joinCall: true }
      : { peerId: this.peerId, joinCall: false };
    const dialogRef = this.dialog.open(CallInfoDialogComponent, {
      width: '250px',
      data: dialogData,
    });

    dialogRef
      .afterClosed()
      .pipe(
        switchMap((peerId) =>
          joinCall
            ? // sets the ID TO CONNECT TOO
              of(this.callService.establishMediaCall(peerId))
            : of(this.callService.enableCallAnswer())
        )
      )
      .subscribe((_) => {});
  }

  public endCall() {
    this.callService.closeMediaCall();
  }
}
