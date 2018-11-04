import { Component, Input } from '@angular/core';
import { EmptyMessage } from '../../lib';
import { Message } from '../../models';

@Component({
  selector: 'eb-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCardComponent {
  @Input()
  message: Message = new EmptyMessage();
}
