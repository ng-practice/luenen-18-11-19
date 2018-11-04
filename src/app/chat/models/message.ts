import { MessageDraft } from './message-draft';

export type Message = MessageDraft & {
  guid: string;
  writtenBy: string;
};
