import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  Inject
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChatMessagesService } from '../../lib';
import { Message, MessageDraft } from '../../models';
import {
  ListenForIncomingMessage,
  LoadChatHistory,
  PublishMessage
} from '../../store/actions/chat.actions';
import * as fromChat from '../../store/reducers';
import { Ducks } from '@co-it/ngrx-ducks';
import { ChatDucks } from '../../store/ducks/chat.ducks';

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
    private _chatMessages: ChatMessagesService,
    @Inject(ChatDucks) private _ducks: Ducks<ChatDucks>
  ) {
    // Ducks Sneak Peak
    // this._ducks.loadHistory.dispatch();
    // this._ducks.setHistory.plain();
    this._store.dispatch(new LoadChatHistory());
    this._store.dispatch(new ListenForIncomingMessage());

    this.messages$ = this._store.pipe(
      select(fromChat.all),
      tap(messages => (this.noMessagesInChatRoom = messages.length === 0))
    );

    this.isBusy$ = this._store.pipe(select(fromChat.isMessagePending));
  }

  ngAfterViewChecked(): void {
    if (!this.chatHistory || !this.chatHistory.nativeElement) {
      return;
    }

    this.chatHistory.nativeElement.scrollTop = this.chatHistory.nativeElement.scrollHeight;
  }

  publishMessage(draft: MessageDraft) {
    this._store.dispatch(new PublishMessage(draft));
  }

  clearChatHistory() {
    this._chatMessages.clear();
  }
}
