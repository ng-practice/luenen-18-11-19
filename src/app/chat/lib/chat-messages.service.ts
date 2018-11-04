import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Message, MessageDraft } from '../models';

import { newGuid } from 'ts-guid';

export enum ChatEvent {
  RequestHistory = '[Chat:Client] Load messages from history',
  HistoryLoaded = '[Chat] All past messages have been loaded',
  PublishMessage = '[Chat:Client] Publish message to the channel',
  MessageReceived = '[Chat] A new message has been published'
}

@Injectable({
  providedIn: 'root'
})
export class ChatMessagesService {
  _incomingMessage$: Observable<Message>;
  _history$: Observable<Message[]>;

  constructor(private _socket: Socket) {
    this._history$ = this._socket.fromEvent(ChatEvent.HistoryLoaded);
    this._incomingMessage$ = this._socket.fromEvent(ChatEvent.MessageReceived);
  }

  connect(): Observable<Message[]> {
    this._socket.emit(ChatEvent.RequestHistory);

    return this._history$.pipe(
      mergeMap(messages =>
        this._incomingMessage$.pipe(map(message => [...messages, message]))
      )
    );
  }

  send(draft: MessageDraft): void {
    this._socket.emit(ChatEvent.PublishMessage, {
      guid: newGuid(),
      ...draft,
      writtenBy: 'nobody'
    } as Message);
  }
}
