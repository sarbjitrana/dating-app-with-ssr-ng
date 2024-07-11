import { Component } from '@angular/core';
import{ ChatsService } from '../chats/chats.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {
  newMessage: string = '';

  constructor(public chatService: ChatsService) {}

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
