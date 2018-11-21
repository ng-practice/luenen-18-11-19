import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { combineReducers, StoreModule, Store } from '@ngrx/store';
// import { reducers } from '@chat';
import { reducers } from '../../store/reducers';
import { ChatRoomComponent } from './chat-room.component';
import { MessageCardComponent } from '../../components/message-card/message-card.component';
import { PublishMessageComponent } from '../../components/publish-message/publish-message.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Kentan } from '@kentan-official/core';
import { ForChatSlice } from 'src/app/test/sketches';
import { By } from '@angular/platform-browser';
import { WrappedSocket } from 'ngx-socket-io/src/socket-io.service';

describe('<chat-room>', () => {
  describe('When a message is sent', () => {
    let chatRoom: ComponentFixture<ChatRoomComponent>;
    let store: Store<any>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot(
            {
              chat: combineReducers(reducers)
            } as any,
            {
              initialState: {
                chat: { history: Kentan.sketch(ForChatSlice).model() }
              }
            }
          )
        ],
        declarations: [
          ChatRoomComponent,
          MessageCardComponent,
          PublishMessageComponent
        ],
        schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();

      chatRoom = TestBed.createComponent(ChatRoomComponent);
      store = TestBed.get(Store);

      chatRoom.detectChanges();
    }));

    it('should have 10 messages initially', () => {
      const messages = chatRoom.debugElement.queryAll(
        By.css('eb-message-card')
      );
      store.select(s => s.chat.history.entities).subscribe(s => console.log(s));
      // console.log(chatRoom.debugElement);

      expect(messages.length).toBe(10);
    });

    it('should display a new message', () => {});
  });
});
