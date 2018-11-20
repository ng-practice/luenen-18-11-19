import { Inject, Injectable } from '@angular/core';
import { Ducks } from '@co-it/ngrx-ducks';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ChatMessagesService } from '../../lib';
import * as Chat from '../actions/chat.actions';
import { ChatActionTypes } from '../actions/chat.actions';
import { ChatDucks } from '../ducks/chat.ducks';

@Injectable()
export class ChatEffects {
  @Effect()
  publishMessage$ = this._actions$.pipe(
    ofType<Chat.PublishMessage>(ChatActionTypes.PublishMessage),
    switchMap(({ payload: draft }) => this._messages.publish(draft)),
    map(message => new Chat.PublishMessageSuccess(message))
  );

  @Effect()
  loadChatHistory$ = this._actions$.pipe(
    ofType<Chat.LoadChatHistory>(this._ducks.loadHistory.type),
    switchMap(() => this._messages.history()),
    map(messages => new Chat.ChatHistoryReceived(messages))
  );

  @Effect()
  listenForIncomingMessage$ = this._actions$.pipe(
    ofType<Chat.ListenForIncomingMessage>(
      ChatActionTypes.ListenForIncomingMessage
    ),
    switchMap(() => this._messages.receiveMessage()),
    map(message => new Chat.ChatMessageDelivered(message))
  );

  constructor(
    private _actions$: Actions,
    private _messages: ChatMessagesService,
    @Inject(ChatDucks) private _ducks: Ducks<ChatDucks>
  ) {}
}
