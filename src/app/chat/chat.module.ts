import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { SocketIoModule } from 'ngx-socket-io';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ChatRoutingModule } from './chat-routing.module';
import { ClearHistoryComponent } from './components/clear-history/clear-history.component';
import { MessageCardComponent } from './components/message-card/message-card.component';
import { PublishMessageComponent } from './components/publish-message/publish-message.component';
import { ChatRoomComponent } from './containers/chat-room/chat-room.component';
import { ChatEffects } from './store/effects/chat.effects';
import * as fromChat from './store/reducers';
import { ChatDucks, chatDucks } from './store/ducks/chat.ducks';
import { createDucks } from '@co-it/ngrx-ducks';

@NgModule({
  imports: [
    CommonModule,

    SocketIoModule.forRoot({ url: 'ws://localhost:3000' }),
    ButtonModule,
    CardModule,
    InputTextareaModule,
    ChatRoutingModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromChat.name, fromChat.reducers),
    EffectsModule.forFeature([ChatEffects])
  ],
  declarations: [
    PublishMessageComponent,
    MessageCardComponent,
    ChatRoomComponent,
    ClearHistoryComponent
  ],
  providers: [
    {
      provide: ChatDucks,
      useFactory(store: Store<any>) {
        return createDucks(chatDucks, store);
      },
      deps: [Store]
    }
  ]
})
export class ChatModule {}
