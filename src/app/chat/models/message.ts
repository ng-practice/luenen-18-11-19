import { MessageDraft } from './message-draft';
import { Sender } from './sender';

export type Message = MessageDraft & Sender;
