import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Message } from '../../models';
import * as fromChat from '@chat';

@Component({
  selector: 'eb-chat-message-details',
  templateUrl: './chat-message-details.component.html',
  styleUrls: ['./chat-message-details.component.scss']
})
export class ChatMessageDetailsComponent {
  message$: Observable<Message>;
  // import * as fromChat from '../../store/reducers';
  constructor(private _store: Store<fromChat.State>) {
    this.message$ = this._store.pipe(select(fromChat.currentMessage));
  }
}
