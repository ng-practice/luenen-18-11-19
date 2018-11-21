import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { combineReducers, StoreModule, Store } from '@ngrx/store';
// import { reducers } from '@chat';
import { reducers } from '../../store/reducers';
import { ChatRoomComponent } from './chat-room.component';
import { MessageCardComponent } from '../../components/message-card/message-card.component';
import { PublishMessageComponent } from '../../components/publish-message/publish-message.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Kentan } from '@kentan-official/core';
import { ForChatSlice, ForMessage } from 'src/app/test/sketches';
import { By } from '@angular/platform-browser';
import { WrappedSocket } from 'ngx-socket-io/src/socket-io.service';
import { PublishMessageSuccess } from '../../store/actions/chat.actions';

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
      const messages = _getMessagesFrom(chatRoom);
      expect(messages.length).toBe(10);
    });

    it('should display a new message', () => {
      const message = Kentan.sketch(ForMessage).model();
      store.dispatch(new PublishMessageSuccess(message));

      const before = _getMessagesFrom(chatRoom);
      chatRoom.detectChanges();
      const after = _getMessagesFrom(chatRoom);

      expect(after.length).toBe(before.length + 1);
    });
  });
});

function _getMessagesFrom<T>(fixture: ComponentFixture<T>) {
  return fixture.debugElement.queryAll(By.css('eb-message-card'));
}
