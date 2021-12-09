import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
// import * as Peer from 'peerjs';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { catchError, retry } from 'rxjs/operators';
import { Socket } from 'ngx-socket-io';
declare var Peer: any;

@Injectable()
export class CallService {


  private peer!: any;
  private mediaCall!: any;

  private localStreamBs: BehaviorSubject<MediaStream> =
    new BehaviorSubject<any>(null);
  public localStream$ = this.localStreamBs.asObservable();
  private remoteStreamBs: BehaviorSubject<MediaStream> =
    new BehaviorSubject<any>(null);
  public remoteStream$ = this.remoteStreamBs.asObservable();

  private isCallStartedBs = new Subject<boolean>();
  public isCallStarted$ = this.isCallStartedBs.asObservable();

  constructor(public socket: Socket, private snackBar: MatSnackBar, private http: HttpClient) { }

  public checkSafari() {
    let seemsChrome = navigator.userAgent.indexOf("Chrome") > -1;
    let seemsSafari = navigator.userAgent.indexOf("Safari") > -1;
    return seemsSafari && !seemsChrome;
  }

  public initPeer(): any {
    let peerJsOptions: any = {};

    if (!this.peer || this.peer.disconnected) {
      peerJsOptions = {
        debug: 3,
        config: {
          iceServers: [
            {
              urls: [
                'stun:stun1.l.google.com:19302',
                'stun:stun2.l.google.com:19302',
              ],
            },
          ],
        },
      };

      if (this.checkSafari()) {
        peerJsOptions.serialization = "json";
      }

      try {
        // this.peer = new Peer(id, peerJsOptions);
        // this.peer = new Peer(undefined, {
        //   path: '/peerjs',
        //   host: '/',
        //   port: '3000'
        // });

        this.peer = new Peer(undefined, { host: 'peerjs-server.herokuapp.com', secure: true, port: 443 })

        this.peer.on('open', (id: any) => {
          console.log(id, 'peer ID')
          this.socket.emit('peerID', { id: id });
        })

      } catch (error) {
        console.error(error);
      }
    }
  }

  public initPeer2(): any {
    let peerJsOptions: any = {};

    if (!this.peer || this.peer.disconnected) {

      peerJsOptions = {
        debug: 3,
        config: {
          iceServers: [
            {
              urls: [
                'stun:stun1.l.google.com:19302',
                'stun:stun2.l.google.com:19302',
              ],
            },
          ],
        },
      };

      if (this.checkSafari()) {
        peerJsOptions.serialization = "json";
      }

      try {
        this.peer = new Peer(undefined, {
          path: '/peerjs',
          host: '/',
          port: '3000'
        });

        this.peer.on('open', (id: any) => {
          this.socket.emit('getId', { id: id });
        })


      } catch (error) {
        console.error(error);
      }
    }
  }

  public async establishMediaCall(remotePeerId: string) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      const connection = this.peer.connect(remotePeerId);
      connection.on('error', (err: any) => {
        console.error(err);
        this.snackBar.open(err, 'Close');
      });

      this.mediaCall = this.peer.call(remotePeerId, stream);
      if (!this.mediaCall) {
        let errorMessage = 'Unable to connect to remote peer';
        this.snackBar.open(errorMessage, 'Close');
        throw new Error(errorMessage);
      }

      console.log(stream, 'make call !!!!!!!!!!!!')
      this.localStreamBs.next(stream);
      this.isCallStartedBs.next(true);

      this.mediaCall.on('stream', (remoteStream: any) => {
        this.remoteStreamBs.next(remoteStream);
      });
      this.mediaCall.on('error', (err: any) => {
        this.snackBar.open(err, 'Close');
        console.error(err);
        this.isCallStartedBs.next(false);
      });
      this.mediaCall.on('close', () => this.onCallClose());
    } catch (ex) {
      console.error(ex);
      this.snackBar.open(ex as any, 'Close');
      this.isCallStartedBs.next(false);
    }
  }

  public async enableCallAnswer() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      console.log(stream, 'answer call !!!!!!!!!!!!')
      this.localStreamBs.next(stream);
      this.peer.on('call', async (call: any) => {
        this.mediaCall = call;
        this.isCallStartedBs.next(true);

        this.mediaCall.answer(stream);
        this.mediaCall.on('stream', (remoteStream: any) => {
          this.remoteStreamBs.next(remoteStream);
        });
        this.mediaCall.on('error', (err: any) => {
          this.snackBar.open(err, 'Close');
          this.isCallStartedBs.next(false);
          console.error(err);
        });
        this.mediaCall.on('close', () => this.onCallClose());
      });
    } catch (ex) {
      console.error(ex);
      this.snackBar.open(ex as any, 'Close');
      this.isCallStartedBs.next(false);
    }
  }

  private onCallClose() {
    this.remoteStreamBs?.value.getTracks().forEach((track) => {
      track.stop();
    });
    this.localStreamBs?.value.getTracks().forEach((track) => {
      track.stop();
    });
    this.snackBar.open('Call Ended', 'Close');
  }

  public closeMediaCall() {
    this.mediaCall?.close();
    if (!this.mediaCall) {
      this.onCallClose();
    }
    this.isCallStartedBs.next(false);
  }

  public destroyPeer() {
    this.mediaCall?.close();
    this.peer?.disconnect();
    this.peer?.destroy();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  public getPeerId(): Observable<any> {
    return this.http
      .get<any>('http://localhost:8889/api/peer-id', this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
    // return this.http.get<any>('http://localhost:8889/api/peer-id')
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
