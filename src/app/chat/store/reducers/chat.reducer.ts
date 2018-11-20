import { Message } from '../../models';
import { ChatActions, ChatActionTypes } from '../actions/chat.actions';

import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface ChatSlice extends EntityState<Message> {
  isMessagePending: boolean;
}

export const adapter = createEntityAdapter<Message>({
  selectId: message => message.guid
});

export const initialSlice = adapter.getInitialState({
  isMessagePending: false
});

export function reducer(slice = initialSlice, action: ChatActions): ChatSlice {
  switch (action.type) {
    case ChatActionTypes.PublishMessage:
      return {
        ...slice,
        isMessagePending: true
      };

    case ChatActionTypes.ChatMessageDelivered:
    case ChatActionTypes.PublishMessageSuccess:
      const newSlice = adapter.addOne(action.payload, slice);
      newSlice.isMessagePending = false;
      return newSlice;

    case ChatActionTypes.ChatHistoryReceived:
      return adapter.addAll(action.payload, slice);

    default:
      return slice;
  }
}
