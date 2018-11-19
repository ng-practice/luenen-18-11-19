import { Message } from '../../models';
import { ChatActions, ChatActionTypes } from '../actions/chat.actions';

export interface Dictionary<T> {
  [guid: string]: T;
}

export interface ChatSlice {
  // entities: { [guid: string]: Message };
  entities: Dictionary<Message>;
}

export const initialSlice: ChatSlice = {
  entities: {}
};

export function reducer(state = initialSlice, action: ChatActions): ChatSlice {
  switch (action.type) {
    case ChatActionTypes.LoadChats:
      return state;

    default:
      return state;
  }
}
