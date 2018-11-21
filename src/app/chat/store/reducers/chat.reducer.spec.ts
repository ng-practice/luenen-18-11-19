import { Message } from '../../models';
import { PublishMessageSuccess } from '../actions/chat.actions';
import { reducer, ChatSlice } from './chat.reducer';
import { Kentan } from '@kentan-official/core';
import { ForMessage, ForChatSlice } from '../../../test/sketches';

describe('When a message is about to be stored in the store', () => {
  let slice: ChatSlice;
  beforeEach(() => {
    slice = Kentan.sketch(ForChatSlice).model();
  });

  it('should be stored', () => {
    const message = Kentan.sketch(ForMessage).model();
    const action = new PublishMessageSuccess(message);

    const newState = reducer(slice, action);

    expect(newState.entities[message.guid]).toBeDefined();
  });

  it('should not be stored if no guid is present', () => {
    const message: Message = {} as Message;
    const action = new PublishMessageSuccess(message);

    const newState = reducer(slice, action);

    expect(newState.entities[message.guid]).toBeUndefined();
  });

  it('should not be stored if no author is present', () => {
    const message: Message = { guid: '1' } as Message;
    const action = new PublishMessageSuccess(message);

    const newState = reducer(slice, action);

    expect(newState.entities[message.guid]).toBeUndefined();
  });
});
