import { Action } from '@ngrx/store';

export enum ChatActionTypes {
  LoadChats = '[Chat] Load Chats'
}

export class LoadChats implements Action {
  readonly type = ChatActionTypes.LoadChats;
}

export type ChatActions = LoadChats;
