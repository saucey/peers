import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!: any;
  peerID!: string;

  public openWebSocketWithPeerID(peerId: string): any {
    this.webSocket = new WebSocket('ws://localhost:8889')

    this.webSocket.onopen = (event: any) => {
      this.webSocket.send(peerId);
    }

    this.webSocket.onmessage = (event: any) => {
      // this.peerID = JSON.parse(event.data)
    };

    this.webSocket.onclose = (event: any) => {
      console.log('Close', event)
    }
  }

  public sendPeerID(peerID: string) {
    this.webSocket.send(JSON.stringify(peerID))
  }

  public closeWebSocket() {
    this.webSocket.close();
  }




}
