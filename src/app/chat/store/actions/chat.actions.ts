import { Action } from '@ngrx/store';
import { Message, MessageDraft } from '../../models';

export enum ChatActionTypes {
  LoadChatHistory = '[Chat] Load Chat History',
  ChatHistoryReceived = '[Chat/API] Load Chat History Success',
  ListenForIncomingMessage = '[Chat] Listen For New Messages',
  ChatMessageDelivered = '[Chat/API] Chat Message delivered',
  PublishMessage = '[Chat] Publish Message',
  PublishMessageSuccess = '[Chat/API] Publish Message Success'
}

export class LoadChatHistory implements Action {
  readonly type = ChatActionTypes.LoadChatHistory;
}

export class ListenForIncomingMessage implements Action {
  readonly type = ChatActionTypes.ListenForIncomingMessage;
}

export class ChatHistoryReceived implements Action {
  readonly type = ChatActionTypes.ChatHistoryReceived;

  constructor(public payload: Message[]) {}
}

export class ChatMessageDelivered implements Action {
  readonly type = ChatActionTypes.ChatMessageDelivered;

  constructor(public payload: Message) {}
}

export class PublishMessage {
  readonly type = ChatActionTypes.PublishMessage;

  constructor(public payload: MessageDraft) {}
}

export class PublishMessageSuccess {
  readonly type = ChatActionTypes.PublishMessageSuccess;

  constructor(public payload: Message) {}
}

// Step 3
export type ChatActions =
  | LoadChatHistory
  | PublishMessage
  | PublishMessageSuccess
  | ChatMessageDelivered
  | ChatHistoryReceived;
