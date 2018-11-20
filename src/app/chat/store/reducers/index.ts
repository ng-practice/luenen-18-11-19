import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { ChatActions } from '../actions/chat.actions';
import * as fromChat from './chat.reducer';
import * as fromRoot from '@root';

export const name = 'chat';

/* You will consolidate all future state slices in this interface */
export interface ChatState {
  history: fromChat.ChatSlice;
}

/* This interface is needed since "chat" is the name of the feature we have generated before */
export interface State extends fromRoot.State {
  chat: ChatState;
}

export const reducers: ActionReducerMap<ChatState, ChatActions> = {
  history: fromChat.reducer
};

const visitChat = createFeatureSelector<ChatState>('chat');

export const entities = createSelector(visitChat, c => c.history.entities);

export const all = createSelector(visitChat, c =>
  Object.values(c.history.entities)
);

export const isMessagePending = createSelector(
  visitChat,
  c => c.history.isMessagePending
);

export const currentMessage = createSelector(
  entities,
  fromRoot.activatedRoute,
  (messages, route) => messages[route.params.guid]
);
