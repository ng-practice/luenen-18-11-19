import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { newGuid } from 'ts-guid';
import { ChatMessagesService } from '../../lib';
import { Message, MessageDraft } from '../../models';
import { PublishMessage } from '../../store/actions/chat.actions';

import * as fromChat from '../../store/reducers';

@Component({
  selector: 'eb-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatRoomComponent implements AfterViewChecked {
  noMessagesInChatRoom = true;

  @ViewChild('chatHistory')
  chatHistory: ElementRef<HTMLDivElement> | null = null;

  messages$: Observable<Message[]>;
  isBusy$: Observable<boolean>;

  constructor(
    private _store: Store<fromChat.State>,
    private _chatMessages: ChatMessagesService
  ) {
    this.messages$ = this._store.pipe(
      select(state => Object.values(state.chat.history.entities))
    );

    this.isBusy$ = this._store.pipe(
      select(state => state.chat.history.isMessagePending)
    );

    // this._chatMessages
    //   .connect()
    //   .pipe(
    //     tap(messages => (this.noMessagesInChatRoom = messages.length === 0))
    //   );
  }

  ngAfterViewChecked(): void {
    if (!this.chatHistory || !this.chatHistory.nativeElement) {
      return;
    }

    this.chatHistory.nativeElement.scrollTop = this.chatHistory.nativeElement.scrollHeight;
  }

  publishMessage(draft: MessageDraft) {
    this._chatMessages.publish(draft).subscribe();
    this._store.dispatch(new PublishMessage(draft));
  }

  clearChatHistory() {
    this._chatMessages.clear();
  }
}
