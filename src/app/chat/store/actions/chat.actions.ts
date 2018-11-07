import { Action } from '@ngrx/store';
import { Message, MessageDraft } from '../../models';

export enum ChatActionTypes {
  LoadChats = '[Chat] Load Chats',
  // Step 1
  PublishMessage = '[Chat] Publish Message',
  PublishMessageSuccess = '[Chat/API] Publish Message Success'
}

export class LoadChats implements Action {
  readonly type = ChatActionTypes.LoadChats;
}

// Step 2
export class PublishMessage implements Action {
  readonly type = ChatActionTypes.PublishMessage;

  constructor(public payload: MessageDraft) {}
}

export class PublishMessageSuccess implements Action {
  readonly type = ChatActionTypes.PublishMessageSuccess;

  constructor(public payload: Message) {}
}

// Step 3
export type ChatActions = LoadChats | PublishMessage | PublishMessageSuccess;
