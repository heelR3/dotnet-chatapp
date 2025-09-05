import { Component, inject, OnInit, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { VideoChatService } from './services/video-chat';
import { AuthService } from './services/auth';
import { MatDialog } from '@angular/material/dialog';
import { VideoChat } from './video-chat/video-chat';

@Component({
  selector: 'app-root',
  imports: [
    MatSlideToggleModule,
    RouterOutlet,

],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('client');

  private signalRService = inject(VideoChatService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog)

  ngOnInit(): void {
      if(!this.authService.getAccessToken) return;
      this.signalRService.startConnection();
      this.startOfferReceive();
  }

  startOfferReceive(){
    this.signalRService.offerReceived.subscribe(async(data)=>{
      if(data){
        let audio = new Audio('assets/phone-ring.mp3');
        audio.play();
        this.dialog.open(VideoChat, {
          width:"400px",
          height:"600px",
          disableClose:false,
        });
        this.signalRService.remoteUserId = data.senderId;
        this.signalRService.incomingCall = true;
      }
    })
  }
}
