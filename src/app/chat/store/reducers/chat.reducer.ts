import { Action } from '@ngrx/store';
import { ChatActions, ChatActionTypes } from '../actions/chat.actions';

export interface State {}

export const initialState: State = {};

export function reducer(state = initialState, action: ChatActions): State {
  switch (action.type) {
    case ChatActionTypes.LoadChats:
      return state;

    default:
      return state;
  }
}
