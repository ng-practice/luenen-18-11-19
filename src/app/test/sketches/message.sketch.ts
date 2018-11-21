import { Sketch } from '@kentan-official/core';
import { Chance } from 'chance';
import { Message } from '../../chat/models';

// npm i -D chance @types/chance
// faker
const chance = new Chance();

export class ForMessage extends Sketch<Message> {
  constructor() {
    super({
      guid: chance.guid(),
      text: chance.sentence({ words: 10 }),
      writtenAt: chance.date(),
      writtenBy: 'Groot'
    });
  }
}
