import { MessageDraft } from './message-draft';
import { SenderName } from './sender-name';

export type Message = MessageDraft & SenderName;
