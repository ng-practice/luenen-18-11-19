import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import { WrappedSocket } from 'ngx-socket-io/src/socket-io.service';
import { MessageCardComponent } from '../../components/message-card/message-card.component';
import { PublishMessageComponent } from '../../components/publish-message/publish-message.component';
import { Message } from '../../models';
import { PublishMessageSuccess } from '../../store/actions/chat.actions';
import { ChatState, reducers } from '../../store/reducers';
import { ChatRoomComponent } from './chat-room.component';
import { CardModule } from 'primeng/card';

describe('<chat-room>', () => {
  describe('When a message is stored', () => {
    let chatRoomFixture: ComponentFixture<ChatRoomComponent>;
    let store: Store<ChatState>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            chat: combineReducers(reducers)
          } as any)
        ],
        providers: [
          {
            provide: WrappedSocket,
            useValue: {
              emit: () => {},
              fromEvent: () => {}
            }
          }
        ],
        declarations: [
          ChatRoomComponent,
          MessageCardComponent,
          PublishMessageComponent
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();

      chatRoomFixture = TestBed.createComponent(ChatRoomComponent);
      store = TestBed.get(Store);
    }));

    it('should display one message', () => {
      store.dispatch(
        new PublishMessageSuccess({ guid: '1', text: 'huhuh' } as Message)
      );
      chatRoomFixture.detectChanges();

      const messages = chatRoomFixture.debugElement.queryAll(
        By.css('eb-message-card')
      );

      expect(messages.length).toBe(1);
    });
  });
});
