import { Kentan, Sketch } from '@kentan-official/core';
import { ChatState } from 'src/app/chat/store/reducers';
import { ForMessage } from '../model/message.sketch';

export class ForChat extends Sketch<ChatState> {
  constructor() {
    super({
      history: {
        entities: toDictionary(
          Kentan.sketch(ForMessage)
            .take(10)
            .models({ guid: index => `${index}` }),
          message => message.guid
        ),
        isMessagePending: false
      }
    });
  }
}

function toDictionary<T>(source: T[], getId: (model: T) => string | number) {
  return source.reduce(
    (dictionary, item) => ({ ...dictionary, [getId(item)]: item }),
    {}
  );
}
