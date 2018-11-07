import { Message } from '../../models';
import { ChatActions, ChatActionTypes } from '../actions/chat.actions';

export interface ChatSlice {
  // Data State
  entities: { [guid: string]: Message };
  // Progress State
  isMessagePending: boolean;
}

export const initialState: ChatSlice = {
  entities: {},
  isMessagePending: false
};

export function reducer(slice = initialState, action: ChatActions): ChatSlice {
  switch (action.type) {
    case ChatActionTypes.PublishMessageSuccess:
      return {
        ...slice,
        entities: {
          ...slice.entities,
          [action.payload.guid]: action.payload
        },
        isMessagePending: true
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
          (loadedMessages, message) => ({
            ...loadedMessages,
            [message.guid]: message
          }),
          {}
        )
      };

    default:
      return slice;
  }
}
