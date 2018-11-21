import { Sketch, Kentan } from '@kentan-official/core';
import { ChatSlice } from '../../chat/store/reducers/chat.reducer';
import { ForMessage } from './message.sketch';

export class ForChatSlice extends Sketch<ChatSlice> {
  constructor() {
    super({
      isMessagePending: false,
      ids: [],
      entities: toDictionary(
        Kentan.sketch(ForMessage)
          .take(10)
          .models(),

        message => message.guid
      )
    });
  }
}

function toDictionary<T>(
  models: T[],
  getId: (model: T) => string
): { [key: string]: T } {
  return models.reduce(
    (dictionary, model) => ({
      ...dictionary,
      [getId(model)]: model
    }),
    {}
  );
}
