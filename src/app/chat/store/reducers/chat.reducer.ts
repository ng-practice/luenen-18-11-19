import { Message } from '../../models';
import { ChatActions, ChatActionTypes } from '../actions/chat.actions';

export interface Dictionary<T> {
  [guid: string]: T;
}

export interface ChatSlice {
  // entities: { [guid: string]: Message };
  entities: Dictionary<Message>;
  isMessagePending: boolean;
}

export const initialSlice: ChatSlice = {
  entities: {},
  isMessagePending: false
};

export function reducer(slice = initialSlice, action: ChatActions): ChatSlice {
  switch (action.type) {
    case ChatActionTypes.PublishMessage:
      return {
        ...slice,
        isMessagePending: true
      };

    case ChatActionTypes.PublishMessageSuccess:
      return {
        ...slice,
        entities: {
          ...slice.entities,
          [action.payload.guid]: action.payload
        },
        isMessagePending: false
      };

    case ChatActionTypes.ChatMessageDelivered:
      return {
        ...slice,
        entities: {
          ...slice.entities,
          [action.payload.guid]: action.payload
        },
        isMessagePending: false
      };

    case ChatActionTypes.ChatHistoryReceived:
      return {
        ...slice,
        entities: action.payload.reduce(
          (dictionary, message) => ({
            ...dictionary,
            [message.guid]: message
          }),
          {}
        )
      };

    default:
      return slice;
  }
}
