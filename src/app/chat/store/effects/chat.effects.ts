import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, exhaustMap } from 'rxjs/operators';
import { ChatMessagesService } from '../../lib';
import * as Chat from '../actions/chat.actions';
import { ChatActionTypes } from '../actions/chat.actions';

@Injectable()
export class ChatEffects {
  @Effect()
  publishMessage$ = this._actions$.pipe(
    ofType<Chat.PublishMessage>(ChatActionTypes.PublishMessage),
    exhaustMap(({ payload: draft }) => this._messages.publish(draft)),
    map(message => new Chat.PublishMessageSuccess(message))
  );

  @Effect()
  loadChatHistory$ = this._actions$.pipe(
    ofType<Chat.LoadChatHistory>(ChatActionTypes.LoadChatHistory),
    exhaustMap(() => this._messages.history()),
    map(messages => new Chat.ChatHistoryReceived(messages))
  );

  @Effect()
  listenForIncomingMessage$ = this._actions$.pipe(
    ofType<Chat.ListenForIncomingMessage>(
      ChatActionTypes.ListenForIncomingMessage
    ),
    exhaustMap(() => this._messages.receiveMessage()),
    map(message => new Chat.ChatMessageDelivered(message))
  );

  constructor(
    private _actions$: Actions,
    private _messages: ChatMessagesService
  ) {}
}
