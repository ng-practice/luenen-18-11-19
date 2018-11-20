import { Sketch } from '@kentan-official/core';
import { Chance } from 'chance';
import { Message } from '../../../chat/models';

const chance = new Chance();

export class ForMessage extends Sketch<Message> {
  constructor() {
    super({
      guid: chance.guid(),
      text: chance.sentence({ words: 9 }),
      writtenAt: chance.date(),
      writtenBy: chance.name()
    });
  }
}
