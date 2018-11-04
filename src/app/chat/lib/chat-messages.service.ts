import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, merge, Observable } from 'rxjs';
import { map, tap, mergeMapTo } from 'rxjs/operators';
import { newGuid } from 'ts-guid';
import { Message, MessageDraft } from '../models';

export enum ChatEvent {
  RequestHistory = '[Chat:Client] Load messages from history',
  HistoryLoaded = '[Chat] All past messages have been loaded',
  PublishMessage = '[Chat:Client] Publish message to the channel',
  MessageReceived = '[Chat] A new message has been published',
  ClearHistory = '[Chat:Client] Remove messages from history'
}

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {
  _incomingMessage$: Observable<Message>;
  _history$: Observable<Message[]>;

  private _messages$$ = new BehaviorSubject<Message[]>([]);

  constructor(private _socket: Socket) {
    this._history$ = this._socket.fromEvent(ChatEvent.HistoryLoaded);
    this._incomingMessage$ = this._socket.fromEvent(ChatEvent.MessageReceived);
  }

  connect(): Observable<Message[]> {
    this._socket.emit(ChatEvent.RequestHistory);

    return merge(this._history$, this._incomingMessage$).pipe(
      tap<Message | Message[]>(singleOrCollection => {
        Array.isArray(singleOrCollection)
          ? this._messages$$.next(singleOrCollection)
          : this._messages$$.next([
              ...this._messages$$.value,
              singleOrCollection
            ]);
      }),
      mergeMapTo(this._messages$$.asObservable())
    );
  }

  publish(draft: MessageDraft): void {
    this._socket.emit(ChatEvent.PublishMessage, {
      guid: newGuid(),
      ...draft,
      writtenBy: 'nobody'
    } as Message);
  }

  clear(): void {
    this._socket.emit(ChatEvent.ClearHistory);
    this._messages$$.next([]);
  }
}
