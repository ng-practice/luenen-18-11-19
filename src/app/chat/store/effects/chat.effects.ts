import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ChatActionTypes } from '../actions/chat.actions';

@Injectable()
export class ChatEffects {
  @Effect()
  loadFoos$ = this.actions$.pipe(ofType(ChatActionTypes.LoadChats));

  constructor(private actions$: Actions) {}
}
