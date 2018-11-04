import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { PublishMessageComponent } from './components/publish-message/publish-message.component';
import { ChatRoomComponent } from './containers/chat-room/chat-room.component';

@NgModule({
  imports: [CommonModule, ButtonModule, InputTextareaModule],
  declarations: [
    PublishMessageComponent,
    MessageCardComponent,
    ChatRoomComponent
  ]
})
export class ChatModule {}
