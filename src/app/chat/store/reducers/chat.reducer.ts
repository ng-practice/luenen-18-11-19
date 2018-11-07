import { Message } from '../../models';
import { ChatActions, ChatActionTypes } from '../actions/chat.actions';

export interface ChatSlice {
  entities: { [guid: string]: Message };
}

export const initialState: ChatSlice = {
  entities: {}
};

export function reducer(slice = initialState, action: ChatActions): ChatSlice {
  switch (action.type) {
    case ChatActionTypes.PublishMessageSuccess:
      return {
        ...slice,
        entities: {
          ...slice.entities,
          [action.payload.guid]: action.payload
        }
      };

    default:
      return slice;
  }
}
