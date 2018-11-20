import { effect, wireUpActions } from '@co-it/ngrx-ducks';
import { ChatSlice } from '../reducers/chat.reducer';
import { Message } from '../../models';

export class ChatDucks {
  loadHistory = effect('[DUCKS/LOAD-HISTORY] Triggered');

  setHistory(slice: ChatSlice, payload: Message[]) {
    return {
      ...slice,
      entities: payload.reduce(
        (dictionary, message) => ({
          ...dictionary,
          [message.guid]: message
        }),
        {}
      )
    };
  }
}

export const chatDucks = wireUpActions(ChatDucks, {
  setHistory: '[DUCKS/SET-HISTORY] EXECUTED'
});
