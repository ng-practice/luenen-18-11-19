import { Action } from '@ngrx/store';
import { Message } from '../../models';

export enum ChatActionTypes {
  LoadChats = '[Chat] Load Chats',
  PublishMessage = '[Chat] Publish Message',
  PublishMessageSuccess = '[Chat] Publish Message Success'
}

export class LoadChats implements Action {
  readonly type = ChatActionTypes.LoadChats;
}

export class PublishMessage {
  readonly type = ChatActionTypes.PublishMessage;

  constructor(public payload: Message) {}
}

export class PublishMessageSuccess {
  readonly type = ChatActionTypes.PublishMessageSuccess;

  constructor(public payload: Message) {}
}

export type ChatActions = LoadChats | PublishMessage | PublishMessageSuccess;
