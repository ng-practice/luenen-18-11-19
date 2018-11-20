import { Message } from '../../models';
import { PublishMessageSuccess } from '../actions/chat.actions';
import { reducer, ChatSlice } from './chat.reducer';

describe('When a message is about to be stored in the store', () => {
  let slice: ChatSlice;
  beforeEach(() => {
    slice = {
      ids: [],
      entities: {},
      isMessagePending: false
    };
  });

  it('should be stored', () => {
    const message: Message = { guid: '1', writtenBy: '1' } as Message;
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
