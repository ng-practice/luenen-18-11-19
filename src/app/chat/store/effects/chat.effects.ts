import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ChatMessagesService } from '../../lib';
import {
  ChatActionTypes,
  PublishMessage,
  PublishMessageSuccess
} from '../actions/chat.actions';

@Injectable()
export class ChatEffects {
  @Effect()
  publishMessage$ = this._actions$.pipe(
    ofType<PublishMessage>(ChatActionTypes.PublishMessage),
    switchMap(({ payload: draft }) => this._messages.publish(draft)),
    map(message => new PublishMessageSuccess(message))
  );

  constructor(
    private _actions$: Actions,
    private _messages: ChatMessagesService
  ) {}
}
