import { Message } from '../../models';

export class EmptyMessage implements Message {
  constructor(
    public text = '',
    public writtenAt = new Date(),
    public sender = { name: '' }
  ) {}
}
