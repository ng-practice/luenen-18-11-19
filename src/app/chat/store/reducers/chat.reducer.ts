import { Action } from '@ngrx/store';
import { ChatActions, ChatActionTypes } from '../actions/chat.actions';
import { Message } from '../../models';

export interface ChatSlice {
  entities: { [guid: string]: Message };
}

export const initialState: ChatSlice = {
  entities: {}
};

export function reducer(state = initialState, action: ChatActions): ChatSlice {
  switch (action.type) {
    case ChatActionTypes.LoadChats:
      return state;

    default:
      return state;
  }
}
