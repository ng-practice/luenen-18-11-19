import { TestBed } from '@angular/core/testing';
import { Kentan } from '@kentan-official/core';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, throwError } from 'rxjs';
import { marbles } from 'rxjs-marbles';
import { ForMessage } from 'src/app/test/sketches';
import { ChatMessagesService } from '../../lib';
import {
  ChatActions,
  PublishMessageSuccess,
  PublishMessage,
  PublishMessageError
} from '../actions/chat.actions';
import { ChatEffects } from './chat.effects';

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

  it(
    'should provide the message (within an Action)',
    marbles(m => {
      const message = Kentan.sketch(ForMessage).model();
      const triggeringAction = new PublishMessage(message);
      const successAction = new PublishMessageSuccess(message);

      const expected = m.cold('---e', { e: successAction });

      actions$ = m.hot('-t', { t: triggeringAction });
      service.publish = jest.fn(() => m.cold('--m', { m: message }));

      m.expect(effect.publishMessage$).toBeObservable(expected);
    })
  );

  it.skip(
    'should provide the an error message if sending fails',
    marbles(m => {
      const message = Kentan.sketch(ForMessage).model();
      const error = new Error('WS ERROR');
      const triggeringAction = new PublishMessage(message);
      const errorAction = new PublishMessageError(error);

      const expected = m.cold('----e', { e: errorAction });

      actions$ = m.hot('-t', { t: triggeringAction });
      service.publish = jest.fn(() => m.cold('---#', {}, error));

      m.expect(effect.publishMessage$).toBeObservable(expected);
    })
  );
});
