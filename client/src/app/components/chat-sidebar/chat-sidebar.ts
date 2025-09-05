import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../services/auth';
import { Router } from '@angular/router';
import { NgClass, TitleCasePipe } from '@angular/common';
import { Chat } from '../../services/chat';
import { User } from '../../models/user';
import { TypingIndicator } from '../typing-indicator/typing-indicator';

@Component({
  selector: 'app-chat-sidebar', 
  imports: [MatButtonModule, MatIconModule, MatMenuModule, TitleCasePipe, TypingIndicator, NgClass],
  templateUrl: './chat-sidebar.html',
  styles: ``
})
export class ChatSidebar implements OnInit {

  authService = inject(AuthService)
  chatService = inject(Chat)
  router = inject(Router);

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    this.chatService.disConnectConnection();
  }

  ngOnInit(): void {
    this.chatService.startConnection(this.authService.getAccessToken!);
  }

  openChatWindow(user: User){
    this.chatService.currentOpenedChat.set(user);
    this.chatService.loadMessages(1);
  }
}
