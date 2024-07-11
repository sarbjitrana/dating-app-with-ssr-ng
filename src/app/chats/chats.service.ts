import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  private socket: any;
  messages: string[] = [];

  constructor() {
    this.socket = io('http://localhost:3031');
    this.socket.on('new message', (message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage(message: string) {
    this.socket.emit('new message', message);
  }
}
