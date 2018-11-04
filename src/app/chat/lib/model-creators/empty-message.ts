import { Message } from '../../models';

export class EmptyMessage implements Message {
  constructor(
    public guid = '',
    public text = '',
    public writtenAt = new Date(),
    public writtenBy = ''
  ) {}
}
