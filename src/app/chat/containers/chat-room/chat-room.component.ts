import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { newGuid } from 'ts-guid';
import { ChatMessagesService } from '../../lib';
import { Message, MessageDraft } from '../../models';
import { PublishMessage } from '../../store/actions/chat.actions';

// import * as fromChat from '../../store/reducers/chat.reducer';

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

  constructor(
    private _store: Store<any>,
    private _chatMessages: ChatMessagesService
  ) {
    this.messages$ = this._chatMessages
      .connect()
      .pipe(
        tap(messages => (this.noMessagesInChatRoom = messages.length === 0))
      );
  }

  ngAfterViewChecked(): void {
    if (!this.chatHistory || !this.chatHistory.nativeElement) {
      return;
    }

    this.chatHistory.nativeElement.scrollTop = this.chatHistory.nativeElement.scrollHeight;
  }

  publishMessage(draft: MessageDraft) {
    this._chatMessages.publish(draft).subscribe();
    this._store.dispatch(
      new PublishMessage({
        guid: newGuid(),
        writtenBy: 'Someone',
        ...draft
      })
    );
  }

  clearChatHistory() {
    this._chatMessages.clear();
  }
}
