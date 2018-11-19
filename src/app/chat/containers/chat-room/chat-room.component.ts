import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ElementRef,
  AfterViewChecked
} from '@angular/core';
import { Observable } from 'rxjs';
import { ChatMessagesService } from '../../lib';
import { Message, MessageDraft } from '../../models';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { newGuid } from 'ts-guid';
import { PublishMessage } from '../../store/actions/chat.actions';

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
        text: draft.text,
        writtenAt: draft.writtenAt,
        writtenBy: 'Anonymus'
      })
    );
  }

  clearChatHistory() {
    this._chatMessages.clear();
  }
}
