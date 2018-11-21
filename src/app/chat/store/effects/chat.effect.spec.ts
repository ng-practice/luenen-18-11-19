import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { ChatMessagesService } from '../../lib';
import { ChatActions } from '../actions/chat.actions';
import { ChatEffects } from './chat.effects';
import { Actions } from '@ngrx/effects';

describe('When a message is sent successfully', () => {
  let effect: ChatEffects;
  let actions$: Observable<ChatActions>;
  let service: ChatMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChatEffects,
        provideMockActions(() => actions$),
        {
          provide: ChatMessagesService,
          useFactory: () => ({ publish: () => {} })
        }
      ]
    });

    effect = TestBed.get(ChatEffects);
    actions$ = TestBed.get(Actions);
    service = TestBed.get(ChatMessagesService);
  });

  it('should provide the message (within an Action)', () => {});
});
