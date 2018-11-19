import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { ChatMessagesService } from '../../lib';
import {
  ChatActionTypes,
  PublishMessage,
  PublishMessageSuccess
} from '../actions/chat.actions';

@Injectable()
export class ChatEffects {
  @Effect()
  loadFoos$ = this._actions$.pipe(ofType(ChatActionTypes.LoadChats));

  @Effect()
  publishMessage = this._actions$.pipe(
    ofType<PublishMessage>(ChatActionTypes.PublishMessage),
    map(action => {
      this._messages.publish(action.payload);
      return new PublishMessageSuccess(action.payload);
    })
  );

  constructor(
    private _actions$: Actions,
    private _messages: ChatMessagesService
  ) {}
}
