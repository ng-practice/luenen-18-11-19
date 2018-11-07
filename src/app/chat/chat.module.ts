import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SocketIoModule } from 'ngx-socket-io';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ChatRoutingModule } from './chat-routing.module';
import { ClearHistoryComponent } from './components/clear-history/clear-history.component';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { PublishMessageComponent } from './components/publish-message/publish-message.component';
import { ChatRoomComponent } from './containers/chat-room/chat-room.component';
import { ChatEffects } from './store/effects/chat.effects';
import * as fromChat from './store/reducers';

@NgModule({
  imports: [
    CommonModule,

    SocketIoModule.forRoot({ url: 'ws://localhost:3000' }),
    ButtonModule,
    CardModule,
    InputTextareaModule,
    ChatRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('chat', fromChat.reducers),
    EffectsModule.forFeature([ChatEffects])
  ],
  declarations: [
    PublishMessageComponent,
    MessageCardComponent,
    ChatRoomComponent,
    ClearHistoryComponent
  ]
})
export class ChatModule {}
