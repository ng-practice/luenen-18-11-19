import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { PublishMessageComponent } from './components/publish-message/publish-message.component';
import { ChatRoomComponent } from './containers/chat-room/chat-room.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule } from 'ngx-socket-io';

@NgModule({
  imports: [
    CommonModule,

    SocketIoModule.forRoot({ url: 'ws://localhost:3000' }),
    ButtonModule,
    CardModule,
    InputTextareaModule,
    ChatRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PublishMessageComponent,
    MessageCardComponent,
    ChatRoomComponent
  ]
})
export class ChatModule {}
